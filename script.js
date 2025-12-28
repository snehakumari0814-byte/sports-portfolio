// ----- TRANSLATIONS -----
const translations = {
  en: {
    nav_home: "Home",
    nav_career: "Career",
    nav_stats: "Stats",
    nav_media: "Media",
    nav_fans: "Fans",

    hero_title: "Mahendra Singh Dhoni",
    hero_subtitle:
      "Former India captain, legendary finisher and wicket-keeper who led India to all three ICC white-ball trophies.",
    hero_counter_icc: "ICC Trophies (WT20, WC, CT)",
    hero_counter_ipl: "IPL Titles as Captain",
    hero_counter_runs: "International Runs",

    timeline_heading: "Career Timeline",
    stats_heading: "Stats & Achievements",
    media_heading: "Media Gallery",
    fans_heading: "Social & Fan Zone",
    fans_follow: "Follow Dhoni",
    fans_leave_msg: "Leave a Message",
    fans_submit: "Submit",
    fans_name_placeholder: "Your name",
    fans_msg_placeholder: "Your message for Dhoni"
  },
  hi: {
    nav_home: "होम",
    nav_career: "करियर",
    nav_stats: "आँकड़े",
    nav_media: "मीडिया",
    nav_fans: "फैन्स",

    hero_title: "महेंद्र सिंह धोनी",
    hero_subtitle:
      "पूर्व भारतीय कप्तान, शानदार फिनिशर और विकेटकीपर जिन्होंने भारत को सभी तीन आईसीसी व्हाइट-बॉल ट्रॉफियां दिलाईं।",
    hero_counter_icc: "आईसीसी ट्रॉफी (टी20, वर्ल्ड कप, चैंपियंस ट्रॉफी)",
    hero_counter_ipl: "कप्तान के रूप में आईपीएल खिताब",
    hero_counter_runs: "अंतरराष्ट्रीय रन",

    timeline_heading: "करियर टाइमलाइन",
    stats_heading: "आँकड़े और उपलब्धियाँ",
    media_heading: "मीडिया गैलरी",
    fans_heading: "सोशल और फैन ज़ोन",
    fans_follow: "धोनी को फॉलो करें",
    fans_leave_msg: "संदेश छोड़ें",
    fans_submit: "सबमिट",
    fans_name_placeholder: "आपका नाम",
    fans_msg_placeholder: "धोनी के लिए आपका संदेश"
  }
};

let currentLang = "en";

// ----- DHONI TIMELINE DATA -----
const timelineEvents = [
  {
    year: 2004,
    title: "International Debut",
    description:
      "Makes ODI debut for India against Bangladesh, beginning his international journey.",
    image: "images/ms_dhoni_2004debut.jpg"
  },
  {
    year: 2005,
    title: "Breakthrough 183* vs Sri Lanka",
    description:
      "Promoted up the order, he smashes 183* in Jaipur, then the highest ODI score in a chase.",
    image: "images/ms_dhoni_2005.jpg"
  },
  {
    year: 2007,
    title: "ICC T20 World Cup Win",
    description:
      "Leads a young Indian side to the inaugural ICC World Twenty20 title in South Africa.",
    image: "images/ms_dhoni_2007.jpg"
  },
  {
    year: 2011,
    title: "World Cup Winning Six",
    description:
      "Captains India to the ICC Cricket World Cup title and finishes the final with an iconic winning six.",
    image: "images/ms_dhoni_2011.jpg"
  },
  {
    year: 2013,
    title: "ICC Champions Trophy",
    description:
      "Becomes the first captain to win all three ICC white-ball trophies as India win in England.",
    image: "images/ms_dhoni_ct2013.jpg"
  },
  {
    year: 2018,
    title: "Padma Bhushan Honour",
    description:
      "Receives the Padma Bhushan, India’s third-highest civilian award, for his contribution to cricket.",
    image: "images/ms_dhoni_2018.jpg"
  },
  {
    year: 2023,
    title: "Fifth IPL Title with CSK",
    description:
      "Leads Chennai Super Kings to their fifth IPL title, further cementing his legacy.",
    image: "images/ms_dhoni_2023.jpg"
  }
];

// ----- DHONI MEDIA DATA -----
const mediaItems = [
  {
    type: "trophy",
    title: "Lifting the 2011 World Cup Trophy",
    thumbnail: "images/ms_dhoni_wc2011.jpg"
  },
  {
    type: "trophy",
    title: "With 2007 T20 World Cup Trophy",
    thumbnail: "images/ms_dhoni_t20_2007.jpg"
  },
  {
    type: "trophy",
    title: "Champions Trophy 2013 Victory",
    thumbnail: "images/ms_dhoni_ct2013.jpg"
  },
  {
    type: "match",
    title: "Finishing in Style",
    thumbnail: "images/ms_dhoni_finisher.jpg"
  },
  {
    type: "match",
    title: "Behind the Stumps",
    thumbnail: "images/ms_dhoni_wk.jpg"
  },
  {
    type: "match",
    title: "",
    thumbnail: "images/ms_dhoni2.jpg"
  },
  {
    type: "match",
    title: "",
    thumbnail: "images/ms_dhoni3.jpg"
  },
  {
    type: "match",
    title: "",
    thumbnail: "images/ms_dhoni4.jpg"
  },
  {
    type: "match",
    title: "",
    thumbnail: "images/ms_dhoni5.jpg"
  },
  {
    type: "match",
    title: "Wife and Daughter",
    thumbnail: "images/ms_dhoni_family.jpg"
  },
  {
    type: "video",
    title: "World Cup Final Winning Six",
    videoUrl: "https://www.youtube.com/embed/R0alThHNb0Y"
  },
  {
    type: "video",
    title: "Best Dhoni Finishes",
    videoUrl: "https://www.youtube.com/embed/y9-Wn8RinFQ?si=7Nm76v6AyY-7H_55"
  },
  {
    type: "video",
    title: "Lightning fast stumpings compilation",
    videoUrl: "https://www.youtube.com/embed/fYM2VRrCPQ4"
  }
];

// ----- MATCH LOCATIONS FOR MAP -----
const matchLocations = [
  {
    place: "Wankhede Stadium, Mumbai, India",
    year: 2011,
    title: "World Cup Final vs Sri Lanka",
    info: "Dhoni scored 91* and finished with the famous winning six to win the 2011 World Cup.",
    coords: [18.9389, 72.8258]
  },
  {
    place: "Sawai Mansingh Stadium, Jaipur, India",
    year: 2005,
    title: "183* vs Sri Lanka",
    info: "Promoted to No. 3, Dhoni smashed 183* in a record ODI chase.",
    coords: [26.8943, 75.8037]
  },
  {
    place: "JSCA Stadium, Ranchi, India",
    year: 2013,
    title: "Homecoming ODI",
    info: "One of his memorable international matches in his home city Ranchi.",
    coords: [23.314, 85.321]
  },
  {
    place: "M. A. Chidambaram Stadium, Chennai, India",
    year: 2013,
    title: "Test Century vs Australia",
    info: "Dhoni scored a big hundred at home, dominating Australia in Chennai.",
    coords: [13.0629, 80.2793]
  },
  {
    place: "Lord's Cricket Ground, London, England",
    year: 2013,
    title: "ICC Champions Trophy Final",
    info: "India beat England; Dhoni became the first captain with all three ICC white-ball titles.",
    coords: [51.529, -0.172]
  },
  {
    place: "Wanderers Stadium, Johannesburg, South Africa",
    year: 2007,
    title: "ICC T20 World Cup Final",
    info: "Under Dhoni, India beat Pakistan to win the inaugural T20 World Cup.",
    coords: [-26.131, 28.0575]
  },
  {
    place: "Sydney Cricket Ground, Sydney, Australia",
    year: 2012,
    title: "CB Series Finishing Knock",
    info: "Dhoni’s late six off Clint McKay helped India chase 13 in the last over.",
    coords: [-33.891, 151.224]
  },
  {
    place: "Adelaide Oval, Adelaide, Australia",
    year: 2012,
    title: "Classic ODI Finish",
    info: "Another calm successful chase in Australia showcasing his finishing skills.",
    coords: [-34.9157, 138.5969]
  },
  {
    place: "Sher-e-Bangla Stadium, Mirpur, Bangladesh",
    year: 2016,
    title: "Asia Cup T20 Final vs Bangladesh",
    info: "Dhoni’s late cameo sealed the Asia Cup T20 title for India.",
    coords: [23.806, 90.3614]
  },
  {
    place: "Eden Park, Auckland, New Zealand",
    year: 2014,
    title: "Tense ODI Tie vs New Zealand",
    info: "Dhoni led India to a thrilling tie in a high-pressure chase at Eden Park.",
    coords: [-36.8748, 174.7441]
  }
];

// ----- COUNTERS -----
function animateCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let current = 0;
    const increment = Math.max(1, Math.floor(target / 100));

    const update = () => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = current;
        requestAnimationFrame(update);
      }
    };
    update();
  });
}

// ----- TIMELINE -----
function renderTimeline() {
  const list = document.getElementById("timelineList");
  const detailsBox = document.getElementById("timelineDetails");

  list.innerHTML = "";
  timelineEvents.forEach((event, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="timeline-year">${event.year}</div>
      <div class="timeline-title">${event.title}</div>
    `;
    li.addEventListener("click", () => {
      document
        .querySelectorAll("#timelineList li")
        .forEach(item => item.classList.remove("active"));
      li.classList.add("active");
      detailsBox.innerHTML = `
        <div class="timeline-detail-inner">
          ${event.image ? `<img src="${event.image}" alt="${event.title}">` : ""}
          <div class="timeline-detail-text">
            <h3>${event.title} (${event.year})</h3>
            <p>${event.description}</p>
          </div>
        </div>
      `;
    });
    if (index === 0) li.classList.add("active");
    list.appendChild(li);
  });

  const first = timelineEvents[0];
  detailsBox.innerHTML = `
    <div class="timeline-detail-inner">
      ${first.image ? `<img src="${first.image}" alt="${first.title}">` : ""}
      <div class="timeline-detail-text">
        <h3>${first.title} (${first.year})</h3>
        <p>${first.description}</p>
      </div>
    </div>
  `;
}

// ----- MEDIA GALLERY -----
function renderMedia(filter = "all") {
  const grid = document.getElementById("mediaGrid");
  grid.classList.remove("fade-in");
  grid.classList.add("fade-out");

  setTimeout(() => {
    grid.innerHTML = "";

    const filtered = mediaItems.filter(
      item => filter === "all" || item.type === filter
    );

    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "media-card";

      if (item.type === "video") {
        card.innerHTML = `
          <div class="media-card-inner">
            <iframe src="${item.videoUrl}" frameborder="0" allowfullscreen></iframe>
            <span>${item.title}</span>
          </div>
        `;
      } else {
        card.innerHTML = `
          <div class="media-card-inner">
            <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
            <span>${item.title}</span>
          </div>
        `;
      }

      card.addEventListener("click", () => openMediaModal(item));
      grid.appendChild(card);
    });

    grid.classList.remove("fade-out");
    grid.classList.add("fade-in");
  }, 150);
}

function setupMediaFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderMedia(filter);
    });
  });
}

// ----- MODAL -----
const modal = document.getElementById("mediaModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

function openMediaModal(item) {
  modalBody.innerHTML = "";
  if (item.type === "video") {
    const iframe = document.createElement("iframe");
    iframe.src = item.videoUrl;
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "true");
    modalBody.appendChild(iframe);
  } else {
    const img = document.createElement("img");
    img.src = item.thumbnail;
    img.alt = item.title;
    modalBody.appendChild(img);
  }
  modal.classList.add("show");
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("show");
  modalBody.innerHTML = "";
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("show");
    modalBody.innerHTML = "";
  }
});

// ----- FAN FORM + FAN WALL (localStorage) -----
const FAN_STORAGE_KEY = "dhoniFanMessages";

function loadStoredFans() {
  try {
    const raw = localStorage.getItem(FAN_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveStoredFans(list) {
  localStorage.setItem(FAN_STORAGE_KEY, JSON.stringify(list));
}

function renderFanMessages() {
  const listEl = document.getElementById("fanMessages");
  const countEl = document.getElementById("fanCount");
  const messages = loadStoredFans();

  listEl.innerHTML = "";

  if (!messages.length) {
    const empty = document.createElement("li");
    empty.textContent = "No messages yet. Be the first to write!";
    empty.style.fontSize = "0.8rem";
    empty.style.color = "#888";
    listEl.appendChild(empty);
  } else {
    messages
      .slice()
      .reverse()
      .forEach(msg => {
        const li = document.createElement("li");
        li.className = "fan-message-card";
        li.innerHTML = `
          <div class="fan-message-meta">
            <span class="fan-message-name">${msg.name}</span>
            ${msg.location ? `<span class="fan-message-location">${msg.location}</span>` : ""}
          </div>
          <div class="fan-message-text">${msg.text}</div>
        `;
        listEl.appendChild(li);
      });
  }

  if (countEl) {
    countEl.textContent =
      messages.length === 1 ? "1 message" : `${messages.length} messages`;
  }
}

// ----- SEND FAN MESSAGE TO BACKEND -----
function sendFanToBackend(name, message, location) {
  const API_URL = "http://127.0.0.1:5000/api/fan-message";

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, message, location })
  })
    .then(res => res.json())
    .then(data => {
      console.log("Backend response:", data);
    })
    .catch(err => {
      console.error("Could not reach backend:", err);
    });
}

function setupFanForm() {
  const form = document.getElementById("fanForm");
  if (!form) return;

  renderFanMessages();

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("fanName").value.trim();
    const message = document.getElementById("fanMessage").value.trim();
    const location = document.getElementById("fanLocation").value.trim();

    if (!name || !message) return;

    const current = loadStoredFans();
    current.push({
      name,
      text: message,
      location,
      createdAt: Date.now()
    });
    saveStoredFans(current);

    // Send also to backend API
    sendFanToBackend(name, message, location);

    form.reset();
    renderFanMessages();
  });
}

// ----- SCROLL REVEAL -----
function setupScrollReveal() {
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );
  sections.forEach(sec => observer.observe(sec));
}

// ----- MATCHES MAP (Leaflet, dark basemap) -----
function initMatchesMap() {
  const mapContainer = document.getElementById("matchesMap");
  if (!mapContainer || typeof L === "undefined") return;

  const map = L.map("matchesMap").setView([20.5937, 78.9629], 3.5);

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    {
      maxZoom: 18,
      attribution: "&copy; OpenStreetMap contributors &copy; CARTO"
    }
  ).addTo(map);

  const dhoniIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    shadowSize: [41, 41]
  });

  matchLocations.forEach(loc => {
    const marker = L.marker(loc.coords, { icon: dhoniIcon }).addTo(map);
    marker.bindPopup(
      `<div class="map-popup">
         <div class="map-popup-heading">${loc.place}</div>
         <div class="map-popup-sub">${loc.year} – ${loc.title}</div>
         <div class="map-popup-info">${loc.info}</div>
       </div>`
    );
  });
}

// ----- LANGUAGE SWITCHING -----
function applyTranslations() {
  const dict = translations[currentLang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });
}

function setupLanguageSwitcher() {
  const buttons = document.querySelectorAll(".lang-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang === currentLang) return;
      currentLang = lang;

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      applyTranslations();
    });
  });

  applyTranslations();
}

// ----- THEME TOGGLER -----
function setupThemeToggle() {
  const html = document.documentElement;
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;

  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    html.setAttribute("data-theme", stored);
  } else {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    html.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }

  toggleBtn.addEventListener("click", () => {
    const current = html.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

// ----- INIT -----
window.addEventListener("DOMContentLoaded", () => {
  animateCounters();
  renderTimeline();
  renderMedia();
  setupMediaFilters();
  setupFanForm();
  setupScrollReveal();
  setupLanguageSwitcher();
  setupThemeToggle();
  initMatchesMap();
});
