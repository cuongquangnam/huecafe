#!/usr/bin/env python3
"""Resize the HÚE photo archive into web-sized JPEGs and write manifest.js."""

import json
import os
import time
import unicodedata
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
FULL_DIR = SITE / "media" / "full"
THUMB_DIR = SITE / "media" / "thumbs"
SKIP_DIRS = {"site", "scripts", ".git"}
ORDER = {"book": 0, "xeo": 1, "imperial": 2, "journal": 3}
FULL_EDGE = 1920
THUMB_EDGE = 960

Image.MAX_IMAGE_PIXELS = 250_000_000


def classify(path: str) -> str:
    folded = unicodedata.normalize("NFD", path).encode("ascii", "ignore").decode().upper()
    if "BOOK" in folded:
        return "book"
    if "IMPERIAL" in folded:
        return "imperial"
    if "XEO" in folded:
        return "xeo"
    return "journal"


def collect() -> list[tuple[str, str]]:
    found = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS and not d.startswith(".")]
        for name in filenames:
            if name.startswith("."):
                continue
            if Path(name).suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
                continue
            full = os.path.join(dirpath, name)
            found.append((full, classify(full)))
    found.sort(key=lambda item: (ORDER[item[1]], os.path.basename(item[0]).lower(), item[0]))
    return found


def process_one(job: tuple[int, str, str]) -> dict:
    index, path, store = job
    file_id = f"{store}-{index:03d}"
    full_path = FULL_DIR / f"{file_id}.jpg"
    thumb_path = THUMB_DIR / f"{file_id}.jpg"
    try:
        with Image.open(path) as raw:
            image = ImageOps.exif_transpose(raw)
            if image.mode != "RGB":
                image = image.convert("RGB")
            width, height = image.size
            full = image.copy()
            full.thumbnail((FULL_EDGE, FULL_EDGE), Image.Resampling.LANCZOS)
            full.save(full_path, "JPEG", quality=76, optimize=True, progressive=True)
            thumb = image.copy()
            thumb.thumbnail((THUMB_EDGE, THUMB_EDGE), Image.Resampling.LANCZOS)
            thumb.save(thumb_path, "JPEG", quality=68, optimize=True, progressive=True)
        return {
            "id": file_id,
            "store": store,
            "src": f"media/full/{file_id}.jpg",
            "thumb": f"media/thumbs/{file_id}.jpg",
            "w": width,
            "h": height,
            "name": os.path.basename(path),
        }
    except Exception as exc:  # keep the batch going if one file is unreadable
        return {"error": f"{path}: {exc}"}


def main() -> None:
    FULL_DIR.mkdir(parents=True, exist_ok=True)
    THUMB_DIR.mkdir(parents=True, exist_ok=True)
    files = collect()
    counts: dict[str, int] = {key: 0 for key in ORDER}
    jobs = []
    for path, store in files:
        counts[store] += 1
        jobs.append((counts[store], path, store))

    started = time.time()
    workers = min(8, max(2, os.cpu_count() or 4))
    print(f"processing {len(jobs)} images with {workers} workers", flush=True)

    items = []
    errors = []
    with ThreadPoolExecutor(max_workers=workers) as pool:
        futures = [pool.submit(process_one, job) for job in jobs]
        done = 0
        for future in as_completed(futures):
            result = future.result()
            done += 1
            if "error" in result:
                errors.append(result["error"])
            else:
                items.append(result)
            if done % 40 == 0 or done == len(jobs):
                print(f"{done}/{len(jobs)}", flush=True)

    items.sort(key=lambda item: item["id"])
    payload = json.dumps(items, ensure_ascii=False, separators=(",", ":"))
    (SITE / "manifest.js").write_text("window.HUE_MANIFEST=" + payload + ";\n", encoding="utf-8")
    (SITE / "manifest.json").write_text(json.dumps(items, ensure_ascii=False), encoding="utf-8")

    elapsed = round(time.time() - started, 1)
    summary = {store: sum(1 for item in items if item["store"] == store) for store in ORDER}
    print(f"DONE {len(items)} images in {elapsed}s {summary}", flush=True)
    if errors:
        print(f"ERRORS {len(errors)}", flush=True)
        for line in errors[:20]:
            print(line, flush=True)


if __name__ == "__main__":
    main()
