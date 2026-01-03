const TEXT = {
  fr: {
    navAppointment: "Prendre rendez-vous",
    navServices: "Services",
    navBooking: "Réserver",
    navWhy: "Pourquoi nous",
    navContact: "Contact",
    searchPlaceholder: "Rechercher sur le site...",
    searchGo: "Go",

    luxLoop: "KENNY CLEANING • KENNY CLEANING • KENNY CLEANING • KENNY CLEANING •",

    heroHeadline: "Nettoyage haut de gamme, résultats impeccables.",
    heroSub: "Maison, bureaux, Airbnb — un service fiable, rapide et soigné.",
    ctaBook: "Réserver",
    ctaServices: "Voir les services",

    whyTitle: "Pourquoi nous choisir",
    whyText:
      "Chez Kenny Cleaning, on ne “fait pas juste le ménage”. On restaure le confort de votre espace avec une méthode précise, des finitions soignées, et un vrai sens du détail. Chaque intervention est réalisée avec sérieux, discrétion et respect — pour un résultat visible dès la première visite.",

    servicesTitle: "Services",
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

    contactTitle: "Contact",
    ctaEmail: "Envoyer un email",
  },

  en: {
    navAppointment: "Make an appointment",
    navServices: "Services",
    navBooking: "Book",
    navWhy: "Why us",
    navContact: "Contact",
    searchPlaceholder: "Search on the site...",
    searchGo: "Go",

    luxLoop: "KENNY CLEANING • KENNY CLEANING • KENNY CLEANING • KENNY CLEANING •",

    heroHeadline: "Premium cleaning, spotless results.",
    heroSub: "Home, office, Airbnb — reliable, fast, detail-focused service.",
    ctaBook: "Book now",
    ctaServices: "View services",

    whyTitle: "Why choose us",
    whyText:
      "At Kenny Cleaning, we don’t just clean — we reset your space. With a precise method, careful finishing, and real attention to detail, every visit is handled with professionalism, discretion, and respect — so you feel the difference immediately.",

    servicesTitle: "Services",
    svcHome: "Home cleaning (regular)",
    svcDeep: "Deep cleaning",
    svcOffice: "Office cleaning",
    svcAirbnb: "Airbnb turnover",
    svcLaundry: "Laundry / ironing",
    svcPost: "Post-construction cleaning",

    bookingTitle: "Booking",
    bookingSub: "Fill this form — it will open WhatsApp with your message ready to send.",
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

    contactTitle: "Contact",
    ctaEmail: "Send an email",
  },
};

function applyText(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (TEXT[lang][key]) el.innerText = TEXT[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (TEXT[lang][key]) el.setAttribute("placeholder", TEXT[lang][key]);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Default language: French
  let currentLang = "fr";
  applyText(currentLang);

  const enBtn = document.getElementById("lang-en");
  const frBtn = document.getElementById("lang-fr");

  if (enBtn && frBtn) {
    frBtn.classList.add("active");
    enBtn.classList.remove("active");

    frBtn.addEventListener("click", () => {
      currentLang = "fr";
      frBtn.classList.add("active");
      enBtn.classList.remove("active");
      applyText("fr");
    });

    enBtn.addEventListener("click", () => {
      currentLang = "en";
      enBtn.classList.add("active");
      frBtn.classList.remove("active");
      applyText("en");
    });
  }

  // Mobile menu
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => mobileMenu.classList.add("open"));
  }
  if (closeMenu && mobileMenu) {
    closeMenu.addEventListener("click", () => mobileMenu.classList.remove("open"));
  }
  if (mobileMenu) {
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) mobileMenu.classList.remove("open");
    });
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => mobileMenu.classList.remove("open"));
    });
  }

  // Search toggle
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

  // Simple on-page search
  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = searchInput.value.trim().toLowerCase();
      if (!q) return;

      const candidates = document.querySelectorAll("h1, h2, h3, p, li, a, button");
      let target = null;

      candidates.forEach((el) => {
        if (!target && el.innerText && el.innerText.toLowerCase().includes(q)) {
          target = el;
        }
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
        `Nom: ${name}\n` +
        `Adresse: ${address}\n` +
        `Service: ${service}\n` +
        `Date: ${date}\n` +
        `Heure: ${time}\n` +
        (notes ? `Détails: ${notes}\n` : "");

      const msgEN =
        `Hello Kenny Cleaning, I would like to book.\n\n` +
        `Name: ${name}\n` +
        `Address: ${address}\n` +
        `Service: ${service}\n` +
        `Date: ${date}\n` +
        `Time: ${time}\n` +
        (notes ? `Notes: ${notes}\n` : "");

      const message = currentLang === "fr" ? msgFR : msgEN;

      const phone = "33753302385"; // WhatsApp needs no spaces, no +
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });
  }
});
