/* ==========================================================
   Kenny Cleaning — i18n + menu + search + WhatsApp booking
   FIX: default is FR + no flash to EN + remembers choice
   ========================================================== */

const TEXT = {
  fr: {
    navAppointment: "Prendre rendez-vous",
    navWhy: "Pourquoi nous",
    navServices: "Services",
    navBooking: "Réserver",
    navContact: "Contact",

    searchPlaceholder: "Rechercher sur le site...",
    searchGo: "Go",

    luxLoop: "KENNY CLEANING • KENNY CLEANING • KENNY CLEANING • KENNY CLEANING •",

    heroHeadline: "Nettoyage haut de gamme, résultats impeccables.",
    heroSub: "Maison, bureaux, Airbnb — un service fiable, rapide et soigné.",
    ctaBook: "Réserver",
    ctaServices: "Voir les services",

    badge1: "Discret & ponctuel",
    badge2: "Détails soignés",
    badge3: "Île-de-France",

    whyTitle: "Pourquoi nous choisir",
    whyText:
      "Chez Kenny Cleaning, on ne “fait pas juste le ménage”. On restaure le confort de votre espace avec une méthode précise, des finitions soignées et un vrai sens du détail. Chaque intervention est réalisée avec sérieux, discrétion et respect — pour un résultat visible dès la première visite.",
    why1Title: "Qualité constante",
    why1Text: "Une checklist claire, les zones critiques traitées en priorité, et une finition impeccable.",
    why2Title: "Fiable & ponctuel",
    why2Text: "Communication simple, arrivée à l’heure, et respect total de votre espace.",
    why3Title: "Service sur-mesure",
    why3Text: "Maison, bureaux, Airbnb : on s’adapte à vos besoins, fréquence et priorités.",

    galleryTitle: "Galerie",
    gallerySub: "Appuyez sur la bulle pour voir les photos.",
    galleryBubbleLabel: "Galerie",

    servicesTitle: "Services",
    servicesSub: "Choisissez le service qui correspond à votre besoin — et réservez en 30 secondes via WhatsApp.",
    svcHome: "Nettoyage à domicile (régulier)",
    svcDeep: "Grand nettoyage (deep cleaning)",
    svcOffice: "Nettoyage de bureaux",
    svcAirbnb: "Airbnb turnover",
    svcLaundry: "Lessive / repassage",
    svcPost: "Nettoyage après travaux",

    bookingTitle: "Réserver",
    bookingSub: "Remplissez ce formulaire — il ouvrira WhatsApp avec votre message prêt à envoyer.",
    phName: "Nom complet",
    phAddress: "Adresse (ville/zone)",
    phNotes: "Détails (surface, pièces, exigences)...",
    optHome: "Nettoyage à domicile (régulier)",
    optDeep: "Grand nettoyage",
    optOffice: "Nettoyage de bureaux",
    optAirbnb: "Airbnb turnover",
    optLaundry: "Lessive / repassage",
    optPost: "Nettoyage après travaux",
    ctaWhatsapp: "Envoyer sur WhatsApp",
    bookingNote: "Astuce : indiquez la surface (m²), le nombre de pièces et vos priorités.",

    contactTitle: "Contact",
    contactWhatsappLabel: "WhatsApp",
    contactEmailLabel: "Email",
    ctaEmail: "Envoyer un email",
   
   },


  en: {
    navAppointment: "Make an appointment",
    navWhy: "Why us",
    navServices: "Services",
    navBooking: "Book",
    navContact: "Contact",

    searchPlaceholder: "Search on the site...",
    searchGo: "Go",

    luxLoop: "KENNY CLEANING • KENNY CLEANING • KENNY CLEANING • KENNY CLEANING •",

    heroHeadline: "High-end cleaning, impeccable results.",
    heroSub: "Home, offices, Airbnb — a reliable, fast and careful service.",
    ctaBook: "Book now",
    ctaServices: "View services",

    badge1: "Discreet & punctual",
    badge2: "Meticulous details",
    badge3: "Île-de-France",

    whyTitle: "Why choose us",
    whyText:
      "At Kenny Cleaning, we don’t just “clean.” We restore the comfort of your space with a precise method, meticulous finishing touches, and real attention to detail. Every service is carried out with professionalism, discretion, and respect — for results you notice from the very first visit.",
    why1Title: "Consistent quality",
    why1Text: "A clear checklist, priority areas handled first, and a spotless finish.",
    why2Title: "Reliable & punctual",
    why2Text: "Simple communication, on-time arrival, and total respect for your space.",
    why3Title: "Tailored service",
    why3Text: "Home, offices, Airbnb: we adapt to your needs, frequency, and priorities.",

    galleryTitle: "Gallery",
    gallerySub: "Tap the bubble to view photos.",
    galleryBubbleLabel: "Gallery",

    servicesTitle: "Services",
    servicesSub: "Choose the service that fits your needs — and book in 30 seconds via WhatsApp.",
    svcHome: "Home cleaning (regular)",
    svcDeep: "Deep cleaning",
    svcOffice: "Office cleaning",
    svcAirbnb: "Airbnb turnover",
    svcLaundry: "Laundry / ironing",
    svcPost: "Post-construction cleaning",

    bookingTitle: "Booking",
    bookingSub: "Fill out this form — it will open WhatsApp with your message ready to send.",
    phName: "Full name",
    phAddress: "Address (city/area)",
    phNotes: "Details (size, rooms, requirements)...",
    optHome: "Home cleaning (regular)",
    optDeep: "Deep cleaning",
    optOffice: "Office cleaning",
    optAirbnb: "Airbnb turnover",
    optLaundry: "Laundry / ironing",
    optPost: "Post-construction cleaning",
    ctaWhatsapp: "Send on WhatsApp",
    bookingNote: "Tip: include size (m²), number of rooms, and your priorities.",

    contactTitle: "Contact",
    contactWhatsappLabel: "WhatsApp",
    contactEmailLabel: "Email",
    ctaEmail: "Send an email",
  },
};

function applyText(lang) {
  // update <html lang="">
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (TEXT[lang][key]) el.textContent = TEXT[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (TEXT[lang][key]) el.setAttribute("placeholder", TEXT[lang][key]);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // ✅ Default FR + remember last choice
  let currentLang = localStorage.getItem("kc_lang") || "fr";
  applyText(currentLang);

  const frBtn = document.getElementById("lang-fr");
  const enBtn = document.getElementById("lang-en");

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem("kc_lang", lang);
    applyText(lang);

    if (lang === "fr") {
      frBtn.classList.add("active");
      enBtn.classList.remove("active");
    } else {
      enBtn.classList.add("active");
      frBtn.classList.remove("active");
    }
  }

  if (frBtn && enBtn) {
    frBtn.addEventListener("click", () => setLang("fr"));
    enBtn.addEventListener("click", () => setLang("en"));
    // ensure active state matches on load
    setLang(currentLang);
  }

  // Mobile menu
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");

  if (menuToggle && mobileMenu) menuToggle.addEventListener("click", () => mobileMenu.classList.add("open"));
  if (closeMenu && mobileMenu) closeMenu.addEventListener("click", () => mobileMenu.classList.remove("open"));

  if (mobileMenu) {
    mobileMenu.addEventListener("click", (e) => { if (e.target === mobileMenu) mobileMenu.classList.remove("open"); });
    mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => mobileMenu.classList.remove("open")));
  }

  // Search toggle + simple search
  const searchToggle = document.getElementById("search-toggle");
  const searchBar = document.getElementById("search-bar");
  const searchForm = document.getElementById("site-search-form");
  const searchInput = document.getElementById("site-search-input");

  if (searchToggle && searchBar) {
    searchToggle.addEventListener("click", () => {
      searchBar.classList.toggle("show");
      if (searchBar.classList.contains("show") && searchInput) searchInput.focus();
    });
  }

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = searchInput.value.trim().toLowerCase();
      if (!q) return;

      const candidates = document.querySelectorAll("h1, h2, h3, p, li, a, button");
      let target = null;

      candidates.forEach((el) => {
        if (!target && el.textContent && el.textContent.toLowerCase().includes(q)) target = el;
      });

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.classList.add("search-highlight");
        setTimeout(() => target.classList.remove("search-highlight"), 2000);
      } else {
        alert(currentLang === "fr" ? "Aucun résultat trouvé." : "No results found.");
      }
    });
  }

  // WhatsApp booking
  const form = document.getElementById("booking-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const address = form.address.value.trim();
      const service = form.service.value.trim();
      const date = form.date.value;
      const time = form.time.value;
      const notes = form.message.value.trim();

      const msgFR =
        `Bonjour Kenny Cleaning, je souhaite réserver.\n\n` +
        `Nom: ${name}\nAdresse: ${address}\nService: ${service}\nDate: ${date}\nHeure: ${time}\n` +
        (notes ? `Détails: ${notes}\n` : "");

      const msgEN =
        `Hello Kenny Cleaning, I would like to book.\n\n` +
        `Name: ${name}\nAddress: ${address}\nService: ${service}\nDate: ${date}\nTime: ${time}\n` +
        (notes ? `Notes: ${notes}\n` : "");

      const message = currentLang === "fr" ? msgFR : msgEN;
      const phone = "33753302385";
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    });
  }
});
const GALLERY_IMAGES = [
  "images/WhatsApp Image 2026-01-04 at 1.20.11 PM.jpeg",
  "images/WhatsApp Image 2026-01-04 at 1.20.12 PM (1).jpeg",
  "images/WhatsApp Image 2026-01-04 at 1.20.12 PM (2).jpeg",
  "images/WhatsApp Image 2026-01-04 at 1.20.12 PM.jpeg",
  "images/WhatsApp Image 2026-01-04 at 1.20.13 PM.jpeg",
  "images/WhatsApp Image 2026-01-04 at 1.20.14 PM (1).jpeg",
  "images/WhatsApp Image 2026-01-04 at 1.20.14 PM.jpeg"
];
(function initGallery() {
  const openGallery = document.getElementById("openGallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const prev = document.getElementById("lightbox-prev");
  const next = document.getElementById("lightbox-next");
  const close = document.getElementById("lightbox-close");

  if (!openGallery || !lightbox || !lightboxImg) return;

  let idx = 0;

  function show(i) {
    if (!GALLERY_IMAGES.length) {
      alert("Add images to GALLERY_IMAGES in script.js");
      return;
    }
    idx = (i + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    lightboxImg.src = GALLERY_IMAGES[idx];
    lightbox.classList.add("active");
  }

  openGallery.addEventListener("click", () => show(0));

  if (prev) prev.addEventListener("click", () => show(idx - 1));
  if (next) next.addEventListener("click", () => show(idx + 1));

  if (close) close.addEventListener("click", () => lightbox.classList.remove("active"));

  // click outside image to close
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.remove("active");
  });

  // swipe on mobile
  let startX = 0;
  lightbox.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX));
  lightbox.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    if (endX < startX - 50) show(idx + 1);
    if (endX > startX + 50) show(idx - 1);
  });
})();
