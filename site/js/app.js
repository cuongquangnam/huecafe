(function () {
  const COPY = {
    en: {
      skip: "Skip to the houses",
      menu: "Menu",
      close: "Close",
      navLabel: "Houses",
      langLabel: "Language",
      navImperial: "Imperial",
      navVisit: "Visit",
      heroEyebrow: "The old capital",
      heroTitle: "Three spaces<br>for one city.",
      heroLede: "A book café on a quiet street, a kitchen down an alley, and a sky lounge above the Perfume River.",
      viewPhoto: "View photograph",
      photos: "Photographs",
      photoN: "Photograph {n}",
      openPhoto: "Open photograph",
      houses: "The houses",
      houseBook: "Shelves, ochre walls, a morning that lasts",
      houseXeo: "Pizza, stone, and the alley after dusk",
      imperialShort: "Imperial Sky",
      houseImperial: "Perfume River, from the sixteenth floor",
      bookEyebrow: "The quiet room",
      bookSub: "A quiet corner for books and coffee.",
      bookP1: "On Lương Thế Vinh the walls are ochre and the banquettes are green. Shelves hold the afternoon. Coffee arrives with lotus seeds, and a book is already open on someone’s lap.",
      bookP2: "Pastry sits on blue-and-white porcelain. The street stays at a polite distance. It is the room for a slow morning, a chapter, or nothing in particular.",
      address: "Address",
      hours: "Hours",
      phone: "Phone",
      hoursBook: "Daily · 06:30 – 21:00",
      hoursXeo: "Daily · 09:00 – 22:30",
      hoursImperial: "Daily · 07:00 – 24:00",
      call: "Call the house",
      directions: "Directions",
      scroll: "Scroll",
      stripShelves: "From the shelves",
      stripAlley: "From the alley",
      stripTerrace: "From the terrace",
      xeoEyebrow: "The alley",
      xeoSub: "The taste of Huế, down the alley.",
      xeoP1: "Down 10 Bến Nghé, the windows are wood and the walls are stone. Pizza comes off the board. Tables fill with flowers, cake, and talk that runs past the dinner hour.",
      xeoP2: "Coffee at a long table. Outside, the alley has not gone quiet.",
      imperialEyebrow: "The sky",
      imperialSub: "The Perfume River, from above.",
      imperialP1: "On the 16th floor of TTC Imperial Hotel, Huế arranges itself: the bridges, Cồn Hến, and the Perfume River turning gold. Salt coffee before dark. Cocktails once the city lights come on.",
      imperialP2: "Koi lanterns hang over the bar. The terrace is for dresses, dates, and the long look down the old capital.",
      visitTitle: "Three addresses in Huế.",
      visitNote: "Hours follow what each house posts, and they shift on holidays. A call is the sure way to know tonight.",
      map: "Map",
      backTop: "Back to the top",
      prev: "Prev",
      next: "Next",
      prevPhoto: "Previous photograph",
      nextPhoto: "Next photograph",
      metaTitle: "HÚE — Book & Cafe, by Xéooo, Imperial Sky Lounge",
      metaDesc: "HÚE in Huế: a book café on Lương Thế Vinh, HÚE by Xéooo in hẻm Bến Nghé, and Imperial Sky Lounge & Cafe above the Perfume River.",
      book: "Book & Cafe",
      xeo: "by Xéooo",
      imperial: "Imperial Sky",
      journal: "The table",
      photoOf: "{place} photograph",
    },
    vi: {
      skip: "Tới phần các nhà",
      menu: "Menu",
      close: "Đóng",
      navLabel: "Các nhà",
      langLabel: "Ngôn ngữ",
      navImperial: "Imperial",
      navVisit: "Ghé thăm",
      heroEyebrow: "Cố đô Huế",
      heroTitle: "Ba không gian<br>cho một thành phố.",
      heroLede: "Một quán sách trên phố yên, một bếp cuối hẻm, và một phòng trà nhìn xuống sông Hương.",
      viewPhoto: "Xem ảnh",
      photos: "Ảnh",
      photoN: "Ảnh {n}",
      openPhoto: "Mở ảnh",
      houses: "Các nhà",
      houseBook: "Kệ sách, tường nghệ, một buổi sáng dài",
      houseXeo: "Pizza, tường đá, và hẻm lúc chạng vạng",
      imperialShort: "Imperial Sky",
      houseImperial: "Sông Hương, từ tầng mười sáu",
      bookEyebrow: "Gian yên",
      bookSub: "Một góc yên cho sách và cà phê.",
      bookP1: "Quán trên phố Lương Thế Vinh, tường màu nghệ, ghế băng xanh. Kệ sách đầy. Cà phê thường kèm hạt sen, và hay có ai đó đang đọc dở một cuốn.",
      bookP2: "Bánh bày trên đĩa sứ xanh trắng. Ngoài phố khá yên. Ngồi đây một buổi sáng chậm, đọc vài trang, hoặc chẳng làm gì cũng được.",
      address: "Địa chỉ",
      hours: "Giờ mở cửa",
      phone: "Điện thoại",
      hoursBook: "Mỗi ngày · 06:30 – 21:00",
      hoursXeo: "Mỗi ngày · 09:00 – 22:30",
      hoursImperial: "Mỗi ngày · 07:00 – 24:00",
      call: "Gọi quán",
      directions: "Chỉ đường",
      scroll: "Vuốt",
      stripShelves: "Từ kệ sách",
      stripAlley: "Trong hẻm",
      stripTerrace: "Trên sân",
      xeoEyebrow: "Con hẻm",
      xeoSub: "Hương vị Huế, cuối hẻm.",
      xeoP1: "Xuống hẻm 10 Bến Nghé, cửa sổ gỗ và tường đá. Pizza ra khỏi thớt. Bàn đầy hoa, bánh ngọt, và chuyện trò qua giờ cơm.",
      xeoP2: "Cà phê trên một bàn dài. Ngoài cửa, con hẻm vẫn chưa yên.",
      imperialEyebrow: "Trên cao",
      imperialSub: "Sông Hương nhìn từ trên cao.",
      imperialP1: "Ở tầng 16 khách sạn TTC Imperial, Huế trải ra: những cây cầu, Cồn Hến, và sông Hương chuyển vàng. Cà phê muối trước khi trời tối. Cocktail khi đèn thành phố lên.",
      imperialP2: "Đèn lồng cá chép treo trên quầy. Sân thượng là chỗ cho váy áo, các bữa tiệc hay buổi hẹn, và cái nhìn rộng ra toàn thành phố.",
      visitTitle: "Ba địa chỉ ở Huế.",
      visitNote: "Giờ mở cửa theo lịch từng nhà và có thể đổi vào ngày lễ. Gọi trước là cách chắc nhất để biết tối nay.",
      map: "Bản đồ",
      backTop: "Về đầu trang",
      prev: "Trước",
      next: "Sau",
      prevPhoto: "Ảnh trước",
      nextPhoto: "Ảnh sau",
      metaTitle: "HÚE — Book & Cafe, by Xéooo, Imperial Sky Lounge",
      metaDesc: "HÚE ở Huế: quán sách trên Lương Thế Vinh, HÚE by Xéooo trong hẻm Bến Nghé, và Imperial Sky Lounge & Cafe nhìn xuống sông Hương.",
      book: "Book & Cafe",
      xeo: "by Xéooo",
      imperial: "Imperial Sky",
      journal: "Trên bàn",
      photoOf: "Ảnh {place}",
    },
  };

  let lang = "vi";

  function t(key) {
    return (COPY[lang] && COPY[lang][key]) || COPY.en[key] || key;
  }

  const manifest = Array.isArray(window.HUE_MANIFEST) ? window.HUE_MANIFEST : [];
  const byName = new Map(manifest.map((item) => [item.name, item]));
  const byId = new Map(manifest.map((item) => [item.id, item]));

  const heroNames = [
    "HAI04477.jpg",
    "HAI05115.jpg",
    "13HPNY.jpg",
    "HAI07279.jpg",
    "HAI07063.jpg",
    "HAI05432.jpg",
    "HAI07317.jpg",
    "DSCF9044 2.JPG",
  ];

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let heroItems = [];
  let heroIndex = 0;
  let heroTimer = 0;
  let lightboxItems = [];
  let lightboxIndex = 0;
  let lastFocus = null;

  function altFor(item) {
    return t("photoOf").replace("{place}", t(item.store));
  }

  function sample(list, count) {
    if (list.length <= count) return list.slice();
    const out = [];
    for (let i = 0; i < count; i += 1) {
      const index = Math.round((i * (list.length - 1)) / (count - 1));
      out.push(list[index]);
    }
    return out;
  }

  function resolve(store, names, count) {
    const used = new Set();
    const out = [];
    names.forEach((name) => {
      const item = byName.get(name);
      if (!item || used.has(item.id)) return;
      out.push(item);
      used.add(item.id);
    });
    manifest.forEach((item) => {
      if (out.length >= count) return;
      if (item.store !== store || used.has(item.id)) return;
      out.push(item);
      used.add(item.id);
    });
    return out.slice(0, count);
  }

  function fillFrame(el, item, size) {
    if (!item) return;
    el.dataset.id = item.id;
    const img = document.createElement("img");
    img.src = size === "full" ? item.src : item.thumb;
    img.alt = altFor(item);
    img.width = item.w;
    img.height = item.h;
    img.decoding = "async";
    if (size !== "full") img.loading = "lazy";
    el.replaceChildren(img);
  }

  function renderHero() {
    heroItems = heroNames.map((name) => byName.get(name)).filter(Boolean);
    if (!heroItems.length) heroItems = sample(manifest, 6);
    const media = document.getElementById("hero-media");
    const dots = document.getElementById("hero-dots");
    media.replaceChildren();
    dots.replaceChildren();
    heroItems.forEach((item, index) => {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = "";
      img.dataset.id = item.id;
      if (index === 0) img.classList.add("is-on");
      media.appendChild(img);

      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", t("photoN").replace("{n}", index + 1));
      if (index === 0) dot.classList.add("is-on");
      dot.addEventListener("click", () => showHero(index));
      dots.appendChild(dot);
    });
    updateHeroCaption();
    startHeroTimer();
  }

  function startHeroTimer() {
    window.clearInterval(heroTimer);
    heroTimer = 0;
    if (!reduced && heroItems.length > 1) {
      heroTimer = window.setInterval(() => showHero((heroIndex + 1) % heroItems.length), 6500);
    }
  }

  function stepHero(delta) {
    if (heroItems.length < 2) return;
    showHero((heroIndex + delta + heroItems.length) % heroItems.length);
    startHeroTimer();
  }

  function showHero(index) {
    heroIndex = index;
    const images = document.querySelectorAll("#hero-media img");
    const dots = document.querySelectorAll("#hero-dots button");
    images.forEach((img, i) => img.classList.toggle("is-on", i === index));
    dots.forEach((dot, i) => dot.classList.toggle("is-on", i === index));
    updateHeroCaption();
  }

  function updateHeroCaption() {
    const item = heroItems[heroIndex];
    const node = document.getElementById("hero-index");
    if (!item || !node) return;
    const number = String(heroIndex + 1).padStart(2, "0");
    node.textContent = number + "  ·  " + t(item.store);
  }

  function renderPicks() {
    document.querySelectorAll("[data-pick]").forEach((el) => {
      const item = byName.get(el.dataset.pick);
      fillFrame(el, item, el.dataset.size || "thumb");
      if (el.dataset.static === "true") delete el.dataset.id;
    });
  }

  function renderMosaics() {
    document.querySelectorAll(".mosaic").forEach((mosaic) => {
      const names = (mosaic.dataset.names || "").split("|").filter(Boolean);
      const frames = [...mosaic.querySelectorAll(".frame")];
      const items = resolve(mosaic.dataset.store, names, frames.length);
      frames.forEach((frame, index) => {
        const size = frame.dataset.size || "thumb";
        fillFrame(frame, items[index], size);
      });
    });
  }

  function renderStrips() {
    document.querySelectorAll(".strip").forEach((strip) => {
      const section = strip.closest("section");
      const used = new Set((section.querySelector(".mosaic")?.dataset.names || "").split("|"));
      const count = Number(strip.dataset.count || 12);
      const pool = manifest.filter((item) => item.store === strip.dataset.store && !used.has(item.name));
      sample(pool, count).forEach((item) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "frame";
        button.setAttribute("aria-label", t("openPhoto"));
        fillFrame(button, item, "thumb");
        strip.appendChild(button);
      });
    });
  }

  function openLightbox(item, list) {
    if (!item || !list.length) return;
    lightboxItems = list;
    lightboxIndex = Math.max(0, list.findIndex((entry) => entry.id === item.id));
    lastFocus = document.activeElement;
    const box = document.getElementById("lightbox");
    box.hidden = false;
    document.body.classList.add("lb-open");
    showLightbox();
    box.querySelector(".lb-close").focus();
  }

  function showLightbox() {
    const item = lightboxItems[lightboxIndex];
    if (!item) return;
    const img = document.getElementById("lb-img");
    img.alt = altFor(item);
    img.src = item.thumb;
    const full = new Image();
    const token = item.id;
    img.dataset.token = token;
    full.onload = () => {
      if (img.dataset.token === token) img.src = item.src;
    };
    full.src = item.src;
    document.getElementById("lb-caption").textContent = t(item.store);
    document.getElementById("lb-count").textContent = (lightboxIndex + 1) + " / " + lightboxItems.length;
  }

  function stepLightbox(delta) {
    if (!lightboxItems.length) return;
    lightboxIndex = (lightboxIndex + delta + lightboxItems.length) % lightboxItems.length;
    showLightbox();
  }

  function closeLightbox() {
    const box = document.getElementById("lightbox");
    box.hidden = true;
    document.body.classList.remove("lb-open");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  function bind() {
    document.body.addEventListener("click", (event) => {
      const host = event.target.closest("[data-id]");
      if (!host || host.closest("a") || host.dataset.static === "true") return;
      const item = byId.get(host.dataset.id);
      if (!item) return;
      const section = host.closest("section");
      const local = section
        ? [...section.querySelectorAll("[data-id]")]
          .map((node) => byId.get(node.dataset.id))
          .filter(Boolean)
        : manifest;
      const unique = [];
      const seen = new Set();
      local.forEach((entry) => {
        if (seen.has(entry.id)) return;
        seen.add(entry.id);
        unique.push(entry);
      });
      openLightbox(item, unique.length ? unique : manifest);
    });

    document.getElementById("hero-prev").addEventListener("click", () => stepHero(-1));
    document.getElementById("hero-next").addEventListener("click", () => stepHero(1));
    document.getElementById("hero-view").addEventListener("click", () => {
      const item = heroItems[heroIndex];
      if (item) openLightbox(item, heroItems);
    });

    const box = document.getElementById("lightbox");
    box.querySelector(".lb-close").addEventListener("click", closeLightbox);
    box.querySelector(".lb-prev").addEventListener("click", () => stepLightbox(-1));
    box.querySelector(".lb-next").addEventListener("click", () => stepLightbox(1));
    box.addEventListener("click", (event) => {
      if (event.target === box) closeLightbox();
    });

    let swipeX = null;
    box.addEventListener("pointerdown", (event) => {
      if (event.target.id === "lb-img") swipeX = event.clientX;
    });
    box.addEventListener("pointerup", (event) => {
      if (swipeX == null) return;
      const delta = event.clientX - swipeX;
      swipeX = null;
      if (delta > 50) stepLightbox(-1);
      if (delta < -50) stepLightbox(1);
    });

    document.addEventListener("keydown", (event) => {
      if (document.getElementById("lightbox").hidden) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") stepLightbox(1);
      if (event.key === "ArrowLeft") stepLightbox(-1);
    });

    const nav = document.getElementById("nav");
    const toggle = document.querySelector(".nav-toggle");
    const links = document.getElementById("nav-links");
    const hero = document.querySelector(".hero");
    const onScroll = () => {
      nav.classList.toggle("is-solid", window.scrollY > hero.offsetHeight - 70);
    };
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });

    function setMenuLabel() {
      const open = links.classList.contains("is-open");
      toggle.dataset.i18n = open ? "close" : "menu";
      toggle.textContent = t(toggle.dataset.i18n);
    }
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      setMenuLabel();
    });
    links.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        links.classList.remove("is-open");
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        setMenuLabel();
      }
    });
    document.querySelectorAll("[data-set-lang]").forEach((button) => {
      button.addEventListener("click", () => applyLang(button.dataset.setLang));
    });

    const sectionLinks = [...document.querySelectorAll(".nav-links a")];
    const sections = sectionLinks
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);
    if ("IntersectionObserver" in window) {
      const watcher = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          sectionLinks.forEach((link) => {
            link.classList.toggle("is-here", link.getAttribute("href") === "#" + entry.target.id);
          });
        });
      }, { rootMargin: "-45% 0px -45% 0px" });
      sections.forEach((section) => watcher.observe(section));
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        window.clearInterval(heroTimer);
        heroTimer = 0;
      } else if (!reduced && !heroTimer && heroItems.length > 1) {
        startHeroTimer();
      }
    });
  }

  function applyLang(next) {
    lang = next === "vi" ? "vi" : "en";
    try { localStorage.setItem("hue-lang", lang); } catch (err) { /* private mode */ }
    document.documentElement.lang = lang === "vi" ? "vi" : "en";
    document.title = t("metaTitle");
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("metaDesc"));
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = t(el.dataset.i18n);
      if (el.hasAttribute("data-i18n-html")) el.innerHTML = value;
      else el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });
    document.querySelectorAll("[data-set-lang]").forEach((button) => {
      const on = button.dataset.setLang === lang;
      button.classList.toggle("is-on", on);
      button.setAttribute("aria-pressed", String(on));
    });
    document.querySelectorAll("#hero-dots button").forEach((dot, index) => {
      dot.setAttribute("aria-label", t("photoN").replace("{n}", index + 1));
    });
    document.querySelectorAll("button.frame").forEach((button) => {
      button.setAttribute("aria-label", t("openPhoto"));
    });
    document.querySelectorAll(".frame img").forEach((img) => {
      const item = byId.get(img.parentElement && img.parentElement.dataset.id);
      if (item) img.alt = altFor(item);
    });
    updateHeroCaption();
    if (lightboxItems.length && !document.getElementById("lightbox").hidden) showLightbox();
  }

  bind();
  const saved = (() => {
    try { return localStorage.getItem("hue-lang"); } catch (err) { return null; }
  })();
  applyLang(saved === "en" ? "en" : "vi");

  if (!manifest.length) return;

  renderHero();
  renderPicks();
  renderMosaics();
  renderStrips();
})();
