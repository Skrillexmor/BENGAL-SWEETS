/* ==========================================================================
   BENGAL SWEETS (BENGAL'S SINCE 1989) - APPLICATION LOGIC
   Hero Slideshow, Admin Product Management, Catalog Sync & WhatsApp Routing
   ========================================================================== */

// --- INITIAL / DEFAULT DELICACIES DATA ---
const DEFAULT_DELICACIES = [
  // --- PENDA (3) ---
  {
    id: "penda_mava",
    name: "Mava Penda",
    category: "penda",
    categoryTitle: "Penda",
    price: "₹175.50",
    rating: "4.5",
    reviewCount: "6",
    isBestseller: false,
    desc: "Soft grainy milk pedas with a gentle sweetness, a perfect sweet treat.",
    img: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "penda_kesar",
    name: "Kesar Penda",
    category: "penda",
    categoryTitle: "Penda",
    price: "₹299",
    rating: "4.6",
    reviewCount: "18",
    isBestseller: true,
    desc: "Soft and rich sweet with a hint of kesar, a sweet treat for special moments.",
    img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "penda_safed",
    name: "Safed Penda",
    category: "penda",
    categoryTitle: "Penda",
    price: "₹195",
    rating: "4.3",
    reviewCount: "26",
    isBestseller: false,
    desc: "Classic smooth white milk pedas crafted from 100% pure fresh mawa.",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80"
  },

  // --- CHUM CHUM DECORATION (2) ---
  {
    id: "chum_silver",
    name: "Silver Chum Chum",
    category: "chumchum",
    categoryTitle: "Chum Chum Decoration",
    price: "₹286",
    rating: "4.5",
    reviewCount: "47",
    isBestseller: true,
    desc: "Juicy Chenna sweet garnished with pure silver vark, rich mawa layer and pistachio slivers.",
    img: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "chum_pineapple",
    name: "Pineapple Chum Chum",
    category: "chumchum",
    categoryTitle: "Chum Chum Decoration",
    price: "₹286",
    rating: "3.9",
    reviewCount: "10",
    isBestseller: false,
    desc: "Delicate chenna chamcham infused with natural tangy pineapple essence and dry fruit flakes.",
    img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80"
  },

  // --- HOT SNACKS & FARSHAN (4) ---
  {
    id: "snack_kachori",
    name: "Khasta Kachori",
    category: "snacks",
    categoryTitle: "Hot Snacks & Farshan",
    price: "₹28.50",
    rating: "3.5",
    reviewCount: "3",
    isBestseller: false,
    desc: "Traditional Deep Fried in Desi Ghee Served with Aloo ki Sabzi.",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "snack_khandvi",
    name: "Khandvi",
    category: "snacks",
    categoryTitle: "Hot Snacks & Farshan",
    price: "₹91",
    rating: "4.2",
    reviewCount: "9",
    isBestseller: false,
    desc: "Delicate melt-in-mouth rolled gram flour savory tempered with mustard seeds and fresh coconut.",
    img: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "snack_khaman",
    name: "Nylon Khaman",
    category: "snacks",
    categoryTitle: "Hot Snacks & Farshan",
    price: "₹91",
    rating: "4.7",
    reviewCount: "86",
    isBestseller: true,
    desc: "Soft and fluffy khaman, a perfect snack to enjoy any time of the day.",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "snack_samosa",
    name: "Samosa ( Singara )",
    category: "snacks",
    categoryTitle: "Hot Snacks & Farshan",
    price: "₹32.50",
    rating: "4.1",
    reviewCount: "11",
    isBestseller: false,
    desc: "Crispy golden crust filled with spiced potatoes, green peas, roasted peanuts and whole spices.",
    img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=400&q=80"
  },

  // --- GUJARATI DECORATIVE SWEETS (2) ---
  {
    id: "sweet_khajur_roll",
    name: "Khajur Roll",
    category: "gujarati_sweets",
    categoryTitle: "Gujarati Decorative Sweets",
    price: "₹195",
    rating: "3.2",
    reviewCount: "5",
    isBestseller: false,
    desc: "All the sweets are low in sugar content and all shrikhand are low fat and made out of pure cow milk.",
    img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "sweet_italian_orange",
    name: "Italian Orange",
    category: "gujarati_sweets",
    categoryTitle: "Gujarati Decorative Sweets",
    price: "₹208",
    rating: "4.1",
    reviewCount: "12",
    isBestseller: false,
    desc: "Festive decorative orange sweet balls dusted with desiccated coconut.",
    img: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80"
  },

  // --- LIQUID MILK SWEETS (2) ---
  {
    id: "sweet_rasmalai",
    name: "Rasmalai",
    category: "liquid_sweets",
    categoryTitle: "Liquid Milk Sweets ( Loose )",
    price: "₹195",
    rating: "4.8",
    reviewCount: "5",
    isBestseller: true,
    desc: "Soft and creamy Rasmalai soaked in sweet, milky syrup for a classic treat.",
    img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "sweet_rasmadhuri",
    name: "Kesar Rasmadhuri",
    category: "liquid_sweets",
    categoryTitle: "Liquid Milk Sweets ( Loose )",
    price: "₹195",
    rating: "4.7",
    reviewCount: "259",
    isBestseller: true,
    desc: "Delicate chenna dumplings swimming in saffron and pistachio infused rabri milk.",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80"
  },

  // --- BARFI & GHEE DELICACIES (2) ---
  {
    id: "sweet_thabdi",
    name: "Thabdi",
    category: "barfi",
    categoryTitle: "Barfi & Traditional Delicacies",
    price: "₹201.50",
    rating: "4.6",
    reviewCount: "42",
    isBestseller: false,
    desc: "A traditional sweet preparation, freshly served, made fresh in the kitchen daily.",
    img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "sweet_kaju_katli",
    name: "Diamond Kaju Katli",
    category: "barfi",
    categoryTitle: "Barfi & Traditional Delicacies",
    price: "₹260",
    rating: "4.9",
    reviewCount: "135",
    isBestseller: true,
    desc: "100% pure Goan cashews ground fine with minimal sugar and silver vark.",
    img: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80"
  },

  // --- FRESH FRUIT NATURAL ICE CREAMS (2) ---
  {
    id: "ice_sitaphal",
    name: "Natural Fresh Sitaphal Ice Cream",
    category: "icecream",
    categoryTitle: "Fresh Fruit Ice Creams",
    price: "₹160",
    rating: "4.9",
    reviewCount: "88",
    isBestseller: true,
    desc: "100% real custard apple (Sitaphal) pulp blended in fresh thick milk cream. No artificial essence.",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "ice_tender_coconut",
    name: "Creamy Tender Coconut Ice Cream",
    category: "icecream",
    categoryTitle: "Fresh Fruit Ice Creams",
    price: "₹160",
    rating: "4.8",
    reviewCount: "64",
    isBestseller: true,
    desc: "Natural tender coconut malai chunks in a thick, velvety scoop.",
    img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=400&q=80"
  }
];

// --- LIVE SYNC STORAGE (MongoDB API) ---
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? 'http://localhost:5000/api' : '/api';
let DELICACIES_DATA = [];

async function fetchProducts() {
  try {
    const res = await fetch(`${API_BASE}/products`);
    if (res.ok) {
      DELICACIES_DATA = await res.json();
    } else {
      DELICACIES_DATA = DEFAULT_DELICACIES;
    }
  } catch (err) {
    console.error('Failed to fetch products from backend:', err);
    DELICACIES_DATA = DEFAULT_DELICACIES;
  }
}

// --- INQUIRY STATE ---
let selectedCategory = "all";
let catalogSearchQuery = "";
let inquiryItems = JSON.parse(localStorage.getItem("bengal_sweets_inquiry")) || [];

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", async () => {
  await fetchProducts();
  await fetchAndRenderSlideshow();
  initMobileNav();
  initHeroSlider();
  initCatalogPage();
  initAdminPortal();
  initHomeFeaturedProducts();
  updateInquiryUI();
});

// --- MOBILE NAVIGATION ---
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileNavToggle");
  const mainNav = document.getElementById("mainNav");
  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener("click", () => {
      mainNav.classList.toggle("active");
    });
  }
}

// ==========================================================================
// HERO SLIDER / CAROUSEL ENGINE
// ==========================================================================
let currentSlide = 0;
let slideInterval = null;

async function fetchAndRenderSlideshow() {
  const slider = document.getElementById("heroSlider");
  if (!slider) return;
  
  try {
    const res = await fetch(`${API_BASE}/settings`);
    if (res.ok) {
      const settings = await res.json();
      if (settings && settings.slideshow && settings.slideshow.length > 0) {
        renderSlideshow(settings.slideshow, slider);
      }
    }
  } catch (err) {
    console.error("Failed to load slideshow settings", err);
  }
}

function renderSlideshow(slides, container) {
  container.innerHTML = slides.map((slide, index) => `
    <div class="glace-slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
      <img src="${slide.img}" alt="${slide.title}" class="glace-slide-img">
      <div class="glace-slide-overlay"></div>
      <div class="glace-slide-content">
        <span class="glace-slide-script">${slide.script}</span>
        <h2 class="glace-slide-title">${slide.title}</h2>
        <p class="glace-slide-desc">${slide.desc}</p>
        <div style="display:flex; justify-content:center; gap:14px; flex-wrap:wrap;">
          <a href="${slide.btnLink}" class="btn-glace-outline">${slide.btnText}</a>
          <a href="https://wa.me/919428275629?text=${encodeURIComponent(slide.whatsappText)}" target="_blank" class="btn-whatsapp-glace">
            <i class="fa-brands fa-whatsapp"></i> Inquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  `).join('');

  const dotsHtml = `
    <div class="glace-slider-nav">
      ${slides.map((_, i) => `<button class="dot-btn ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})" aria-label="Go to slide ${i + 1}"></button>`).join('')}
    </div>
  `;
  container.insertAdjacentHTML('beforeend', dotsHtml);
}

function initHeroSlider() {
  const slider = document.getElementById("heroSlider");
  if (!slider) return;

  startSlideTimer();

  slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
  slider.addEventListener("mouseleave", () => startSlideTimer());
}

function startSlideTimer() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, 5500);
}

function changeSlide(direction) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot-btn");
  if (slides.length === 0) return;

  slides[currentSlide].classList.remove("active");
  if (dots[currentSlide]) dots[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + direction + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");
  if (dots[currentSlide]) dots[currentSlide].classList.add("active");
}

function goToSlide(index) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot-btn");
  if (slides.length === 0) return;

  slides[currentSlide].classList.remove("active");
  if (dots[currentSlide]) dots[currentSlide].classList.remove("active");

  currentSlide = index;

  slides[currentSlide].classList.add("active");
  if (dots[currentSlide]) dots[currentSlide].classList.add("active");

  startSlideTimer();
}

// ==========================================================================
// CATALOG PAGE LOGIC
// ==========================================================================
function initCatalogPage() {
  const column = document.getElementById("delicaciesColumn");
  if (!column) return;

  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get("cat");
  if (catParam) {
    selectedCategory = catParam;
    const pillButtons = document.querySelectorAll(".cat-pill");
    pillButtons.forEach(btn => {
      if (btn.getAttribute("onclick") && btn.getAttribute("onclick").includes(`'${catParam}'`)) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  renderCatalog();
}

function renderCatalog() {
  const column = document.getElementById("delicaciesColumn");
  if (!column) return;

  const filtered = DELICACIES_DATA.filter(item => {
    const matchCat = selectedCategory === "all" || item.category === selectedCategory;
    const matchSearch = !catalogSearchQuery || 
      item.name.toLowerCase().includes(catalogSearchQuery) || 
      item.desc.toLowerCase().includes(catalogSearchQuery);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    column.innerHTML = `
      <div style="grid-column: 1 / -1; background:#FFF; border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:48px 20px; text-align:center;">
        <i class="fa-solid fa-magnifying-glass" style="font-size:2rem; color:var(--brand-gold-deep); margin-bottom:12px;"></i>
        <h3 style="font-family:var(--font-heading); font-size:1.1rem; letter-spacing:1px; text-transform:uppercase; color:var(--text-primary); margin-bottom:6px;">No delicacies found matching your search</h3>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:16px;">Try clearing filters or search for Penda, Chum Chum, or Kachori.</p>
        <button class="btn-glace-outline" onclick="resetCatalogFilters()">Clear Filters</button>
      </div>
    `;
    return;
  }

  column.innerHTML = filtered.map(item => `
    <div class="glace-product-card" style="background:#FFF; border:1px solid var(--border-light); border-radius:var(--radius-sm);">
      <div class="glace-product-img-wrapper">
        <img src="${item.img}" alt="${item.name}" class="glace-product-img" loading="lazy">
      </div>
      <h3 class="glace-product-name">${item.name}</h3>
      <span class="glace-product-category">${item.categoryTitle || item.category}</span>
      <div class="glace-product-price">${item.price}</div>
      <button class="glace-add-inquiry-btn" onclick="addToInquiry('${item.id}')">Inquire / Add</button>
    </div>
  `).join("");
}

function filterCatalog(categorySlug, btnElem) {
  selectedCategory = categorySlug;
  const pills = document.querySelectorAll(".cat-pill-minimal, .cat-pill");
  pills.forEach(p => p.classList.remove("active"));
  if (btnElem) btnElem.classList.add("active");
  renderCatalog();
}

function handleCatalogSearch(query) {
  catalogSearchQuery = query.toLowerCase().trim();
  renderCatalog();
}

function resetCatalogFilters() {
  selectedCategory = "all";
  catalogSearchQuery = "";
  const input = document.getElementById("catalogSearch");
  if (input) input.value = "";
  const pills = document.querySelectorAll(".cat-pill-minimal, .cat-pill");
  pills.forEach(p => p.classList.remove("active"));
  if (pills[0]) pills[0].classList.add("active");
  renderCatalog();
}

// --- WHATSAPP INQUIRY LIST SYSTEM ---
function addToInquiry(itemId) {
  const item = DELICACIES_DATA.find(d => d.id === itemId);
  if (!item) return;

  inquiryItems.push(item);
  saveInquiry();
  updateInquiryUI();
  showToast(`Added ${item.name} to inquiry list!`);
}

function removeFromInquiry(index) {
  inquiryItems.splice(index, 1);
  saveInquiry();
  updateInquiryUI();
}

function clearInquiry() {
  inquiryItems = [];
  saveInquiry();
  updateInquiryUI();
}

function saveInquiry() {
  localStorage.setItem("bengal_sweets_inquiry", JSON.stringify(inquiryItems));
}

// ==========================================================================
// HOME PAGE FEATURED PRODUCTS LOGIC
// ==========================================================================
function initHomeFeaturedProducts() {
  const featuredGrid = document.getElementById("featuredProductsGrid");
  if (!featuredGrid) return; // Only runs on index.html

  // Filter only bestsellers and take up to 8
  const bestsellers = DELICACIES_DATA.filter(item => item.isBestseller).slice(0, 8);

  if (bestsellers.length === 0) {
    featuredGrid.innerHTML = `<p style="text-align:center; color:var(--text-muted); grid-column:1/-1;">No featured items found.</p>`;
    return;
  }

  featuredGrid.innerHTML = bestsellers.map(item => `
    <div class="glace-product-card">
      <div class="glace-product-img-wrapper">
        <img src="${item.img}" alt="${item.name}" class="glace-product-img" loading="lazy">
      </div>
      <h3 class="glace-product-name">${item.name}</h3>
      <span class="glace-product-category">${item.categoryTitle || item.category}</span>
      <div class="glace-product-price">${item.price}</div>
      <button class="glace-add-inquiry-btn" onclick="addToInquiry('${item.id}')">Inquire / Add</button>
    </div>
  `).join("");
}

function updateInquiryUI() {
  const list = document.getElementById("sidebarInquiryList");
  const badge = document.getElementById("inquiryBadgeCount");
  const actionsArea = document.getElementById("inquiryActionsArea");

  const count = inquiryItems.length;
  if (badge) badge.textContent = `${count} items`;

  if (!list) return;

  if (count === 0) {
    list.innerHTML = `
      <div class="inquiry-empty-box">
        <i class="fa-solid fa-basket-shopping"></i>
        <p>Your inquiry list is empty. Click <strong>ADD</strong> on any sweet or snack to add it here.</p>
      </div>
    `;
    if (actionsArea) actionsArea.style.display = "none";
    return;
  }

  if (actionsArea) actionsArea.style.display = "block";

  list.innerHTML = inquiryItems.map((item, idx) => `
    <div class="inquiry-row-item">
      <span style="font-weight:700; color:#141213;">${item.name}</span>
      <span style="font-size:0.82rem; color:#7A5B18; font-weight:800;">${item.price}</span>
      <button class="inquiry-row-remove" onclick="removeFromInquiry(${idx})" title="Remove">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `).join("");
}

function sendInquiryOnWhatsApp() {
  const phone = "919428275629"; // Miral Patel WhatsApp
  const branch = document.getElementById("selectedBranchInquiry")?.value || "Rajkot Branch";
  const notes = document.getElementById("inquiryNotes")?.value.trim() || "";

  let msg = `*Namaste Bengal Sweets (Bengal's Since 1989)!*%0A%0A`;
  msg += `*Selected Location:* ${branch}%0A%0A`;
  msg += `I would like to inquire about the following delicacies:%0A`;

  if (inquiryItems.length > 0) {
    inquiryItems.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.name}* (${item.price})%0A`;
    });
  } else {
    msg += `• Daily fresh sweets, penda, and hot farshan availability.%0A`;
  }

  if (notes) {
    msg += `%0A*Quantity / Notes:* ${notes}%0A`;
  }

  msg += `%0APlease share availability and pickup timing.%0A`;
  msg += `_Thank you!_`;

  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${msg}`;
  window.open(url, "_blank");
}

// --- CONTACT FORM SUBMISSION TO WHATSAPP ---
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("contactName")?.value.trim() || "";
  const phone = document.getElementById("contactPhone")?.value.trim() || "";
  const branch = document.getElementById("contactBranch")?.value || "Branch 1 (Indira Circle)";
  const type = document.getElementById("contactType")?.value || "General Inquiry";
  const message = document.getElementById("contactMessage")?.value.trim() || "";

  let msg = `*🪔 BENGAL SWEETS (SINCE 1989) - CUSTOMER INQUIRY*%0A%0A`;
  msg += `*Name:* ${name}%0A`;
  msg += `*Phone:* ${phone}%0A`;
  msg += `*Branch:* ${branch}%0A`;
  msg += `*Inquiry Type:* ${type}%0A`;
  if (message) {
    msg += `*Details / Quantities:* ${message}%0A`;
  }
  msg += `%0A_Please reply with availability and quote. Thank you!_`;

  const targetPhone = "919428275629";
  const url = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${msg}`;
  window.open(url, "_blank");
  showToast("Opening WhatsApp with your inquiry to Miral Patel...");
}

// ==========================================================================
// ADMIN PRODUCT MANAGEMENT PORTAL LOGIC
// ==========================================================================
function initAdminPortal() {
  const loginScreen = document.getElementById("adminLoginScreen");
  const dashboard = document.getElementById("adminDashboard");
  if (!loginScreen || !dashboard) return; // Not on admin.html

  const isAdminLoggedIn = sessionStorage.getItem("bengals_admin_logged_in") === "true";
  if (isAdminLoggedIn) {
    showAdminDashboard();
  }
}

function handleAdminLogin(e) {
  e.preventDefault();
  const pinInput = document.getElementById("adminPinInput");
  const errorMsg = document.getElementById("loginErrorMsg");
  const pin = pinInput?.value.trim();

  if (pin === "1989" || pin === "admin123") {
    sessionStorage.setItem("bengals_admin_logged_in", "true");
    if (errorMsg) errorMsg.style.display = "none";
    showAdminDashboard();
    showToast("Welcome to Bengal's Admin Dashboard!");
  } else {
    if (errorMsg) errorMsg.style.display = "block";
  }
}

function showAdminDashboard() {
  const loginScreen = document.getElementById("adminLoginScreen");
  const dashboard = document.getElementById("adminDashboard");
  const logoutBtn = document.getElementById("adminLogoutBtn");

  if (loginScreen) loginScreen.style.display = "none";
  if (dashboard) {
    dashboard.style.display = "block";
    dashboard.classList.add("active");
  }
  if (logoutBtn) logoutBtn.style.display = "inline-flex";

  renderAdminProductsTable();
  renderAdminSlideshowTable();
}

function logoutAdmin() {
  sessionStorage.removeItem("bengals_admin_logged_in");
  window.location.reload();
}

function renderAdminProductsTable() {
  const tbody = document.getElementById("adminProductsTableBody");
  const statTotal = document.getElementById("statTotalItems");
  const statBestsellers = document.getElementById("statBestsellers");
  if (!tbody) return;

  if (statTotal) statTotal.textContent = DELICACIES_DATA.length;
  if (statBestsellers) statBestsellers.textContent = DELICACIES_DATA.filter(i => i.isBestseller).length;

  tbody.innerHTML = DELICACIES_DATA.map((item) => `
    <tr style="border-bottom:1px solid var(--border-light);">
      <td style="padding:12px 16px;">
        <img src="${item.img}" alt="${item.name}" style="width:48px; height:48px; border-radius:50%; object-fit:cover; background:var(--bg-porcelain);">
      </td>
      <td style="padding:12px 16px;">
        <strong style="color:var(--text-primary); font-size:0.9rem;">${item.name}</strong>
        <div style="font-size:0.75rem; color:var(--text-muted); max-width: 260px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.desc}</div>
      </td>
      <td style="padding:12px 16px;">
        <span style="background:var(--bg-porcelain); border:1px solid var(--border-light); padding:3px 10px; border-radius:var(--radius-full); font-size:0.72rem; text-transform:uppercase; font-weight:700;">${item.categoryTitle || item.category}</span>
      </td>
      <td style="padding:12px 16px;">
        <strong style="color:var(--brand-gold-deep); font-size:0.92rem;">${item.price}</strong>
      </td>
      <td style="padding:12px 16px; font-size:0.82rem;">
        ★ ${item.rating} <span style="color:var(--text-muted);">(${item.reviewCount})</span>
      </td>
      <td style="padding:12px 16px;">
        ${item.isBestseller ? '<span style="color:#DC2626; font-weight:700; font-size:0.75rem;">★ Yes</span>' : '<span style="color:var(--text-muted); font-size:0.75rem;">No</span>'}
      </td>
      <td style="padding:12px 16px; text-align:right;">
        <div style="display:inline-flex; gap:6px;">
          <button class="btn-glace-outline" style="padding:4px 10px; font-size:0.72rem;" onclick="editProduct('${item.id}')"><i class="fa-solid fa-pen"></i> Edit</button>
          <button class="btn-glace-outline" style="padding:4px 10px; font-size:0.72rem; border-color:#DC2626; color:#DC2626;" onclick="deleteProduct('${item.id}')"><i class="fa-solid fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join("");
}

// Add / Edit Product Modal Handlers
function openAddProductModal() {
  const modal = document.getElementById("productModalOverlay");
  const title = document.getElementById("modalTitle");
  const form = document.getElementById("productForm");

  if (!modal || !form) return;

  form.reset();
  document.getElementById("editProductId").value = "";
  if (title) title.textContent = "Add New Delicacy";

  modal.style.display = "flex";
}

function closeProductModal() {
  const modal = document.getElementById("productModalOverlay");
  if (modal) modal.style.display = "none";
}

function editProduct(productId) {
  const item = DELICACIES_DATA.find(p => p.id === productId);
  if (!item) return;

  const modal = document.getElementById("productModalOverlay");
  const title = document.getElementById("modalTitle");

  document.getElementById("editProductId").value = item.id;
  document.getElementById("prodName").value = item.name;
  document.getElementById("prodCategory").value = item.category;
  document.getElementById("prodPrice").value = item.price;
  document.getElementById("prodRating").value = item.rating || "4.8";
  document.getElementById("prodReviews").value = item.reviewCount || "15";
  document.getElementById("prodImg").value = item.img || "";
  document.getElementById("prodDesc").value = item.desc || "";
  document.getElementById("prodBestseller").checked = item.isBestseller || false;

  if (title) title.textContent = `Edit: ${item.name}`;
  if (modal) modal.style.display = "flex";
}

async function handleProductFormSubmit(e) {
  e.preventDefault();

  const editId = document.getElementById("editProductId").value;
  const name = document.getElementById("prodName").value.trim();
  const category = document.getElementById("prodCategory").value;
  const price = document.getElementById("prodPrice").value.trim();
  const rating = document.getElementById("prodRating").value.trim() || "4.8";
  const reviews = document.getElementById("prodReviews").value.trim() || "10";
  let img = document.getElementById("prodImg").value.trim();
  const desc = document.getElementById("prodDesc").value.trim();
  const isBestseller = document.getElementById("prodBestseller").checked;

  const catTitles = {
    penda: "Penda",
    chumchum: "Chum Chum Decoration",
    snacks: "Hot Snacks & Farshan",
    liquid_sweets: "Liquid Milk Sweets ( Loose )",
    gujarati_sweets: "Gujarati Decorative Sweets",
    barfi: "Barfi & Traditional Delicacies",
    icecream: "Fresh Fruit Ice Creams"
  };

  const defaultImgs = {
    penda: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=400&q=80",
    chumchum: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80",
    snacks: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80",
    liquid_sweets: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80",
    gujarati_sweets: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=400&q=80",
    barfi: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80",
    icecream: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80"
  };

  if (!img) {
    img = defaultImgs[category] || defaultImgs.penda;
  }

  const payload = {
    name, category, categoryTitle: catTitles[category] || category,
    price, rating, reviewCount: reviews, img, desc, isBestseller
  };

  try {
    if (editId) {
      const res = await fetch(`${API_BASE}/products/${editId}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        showToast(`Updated ${name} successfully!`);
      }
    } else {
      const res = await fetch(`${API_BASE}/products`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        showToast(`Added ${name} to delicacies catalog!`);
      }
    }
    // Refresh list
    await fetchProducts();
    renderAdminProductsTable();
    closeProductModal();
  } catch (err) {
    console.error("Error saving product:", err);
    showToast("Error saving product. Check server.");
  }
}

async function deleteProduct(productId) {
  const item = DELICACIES_DATA.find(p => p.id === productId);
  if (!item) return;

  if (confirm(`Are you sure you want to delete "${item.name}" from catalog?`)) {
    try {
      const res = await fetch(`${API_BASE}/products/${productId}`, { method: 'DELETE' });
      if (res.ok) {
        await fetchProducts();
        renderAdminProductsTable();
        showToast(`Deleted ${item.name} from catalog.`);
      }
    } catch (err) {
      console.error("Error deleting product:", err);
      showToast("Error deleting product.");
    }
  }
}

function resetToFactoryData() {
  if (confirm("Reset menu to factory default items? Custom products will be restored.")) {
    localStorage.removeItem("bengal_sweets_products");
    DELICACIES_DATA = getStoredProducts();
    renderAdminProductsTable();
    showToast("Menu reset to defaults!");
  }
}

// --- TOAST NOTIFICATIONS ---
function showToast(message) {
  let toast = document.getElementById("toastBox");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastBox";
    toast.className = "toast-msg-box";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

// ==========================================================================
// ADMIN SLIDESHOW MANAGEMENT LOGIC
// ==========================================================================
let SLIDESHOW_DATA = [];

async function renderAdminSlideshowTable() {
  const tbody = document.getElementById("adminSlideshowTableBody");
  if (!tbody) return;

  try {
    const res = await fetch(`${API_BASE}/settings`);
    if (res.ok) {
      const settings = await res.json();
      SLIDESHOW_DATA = settings.slideshow || [];
    }
  } catch (err) {
    console.error("Error fetching slideshow settings:", err);
  }

  tbody.innerHTML = SLIDESHOW_DATA.map((slide, index) => `
    <tr style="border-bottom:1px solid var(--border-light);">
      <td style="padding:12px 16px;">
        <img src="${slide.img}" alt="Slide" style="width:80px; height:48px; border-radius:var(--radius-xs); object-fit:cover; background:var(--bg-porcelain);">
      </td>
      <td style="padding:12px 16px;">
        <div style="font-size:0.75rem; color:var(--text-muted);">${slide.script}</div>
        <strong style="color:var(--text-primary); font-size:0.9rem;">${slide.title}</strong>
      </td>
      <td style="padding:12px 16px;">
        <div style="font-size:0.8rem; color:var(--text-muted); max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${slide.desc}</div>
      </td>
      <td style="padding:12px 16px; text-align:right;">
        <button class="btn-glace-outline" style="padding:6px 10px; font-size:0.75rem; margin-right:4px;" onclick="editSlide(${index})">
          <i class="fa-solid fa-pen"></i> Edit
        </button>
        <button class="btn-glace-outline" style="padding:6px 10px; font-size:0.75rem; color:var(--accent-red); border-color:var(--accent-red);" onclick="deleteSlide(${index})">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function openAddSlideModal() {
  const modal = document.getElementById("slideModalOverlay");
  const form = document.getElementById("slideForm");
  const title = document.getElementById("slideModalTitle");
  if (form) form.reset();
  document.getElementById("editSlideIndex").value = "";
  if (title) title.textContent = "Add New Slide";
  if (modal) modal.style.display = "flex";
}

function closeSlideModal() {
  const modal = document.getElementById("slideModalOverlay");
  if (modal) modal.style.display = "none";
}

function editSlide(index) {
  const slide = SLIDESHOW_DATA[index];
  if (!slide) return;
  
  const modal = document.getElementById("slideModalOverlay");
  const title = document.getElementById("slideModalTitle");
  
  document.getElementById("editSlideIndex").value = index;
  document.getElementById("slideImg").value = slide.img;
  document.getElementById("slideScript").value = slide.script;
  document.getElementById("slideTitle").value = slide.title;
  document.getElementById("slideDesc").value = slide.desc;
  document.getElementById("slideBtnText").value = slide.btnText;
  document.getElementById("slideBtnLink").value = slide.btnLink;
  document.getElementById("slideWhatsappText").value = slide.whatsappText;

  if (title) title.textContent = `Edit Slide ${index + 1}`;
  if (modal) modal.style.display = "flex";
}

async function deleteSlide(index) {
  if (confirm(`Are you sure you want to delete this slide?`)) {
    SLIDESHOW_DATA.splice(index, 1);
    await saveSlideshowData();
  }
}

async function saveSlideshowData() {
  try {
    const res = await fetch(`${API_BASE}/settings/slideshow`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(SLIDESHOW_DATA)
    });
    if (res.ok) {
      showToast("Slideshow settings saved successfully!");
      renderAdminSlideshowTable();
    }
  } catch (err) {
    console.error("Error saving slideshow:", err);
    showToast("Error saving slideshow settings.");
  }
}

async function handleSlideFormSubmit(e) {
  e.preventDefault();
  
  const editIndex = document.getElementById("editSlideIndex").value;
  
  const newSlide = {
    img: document.getElementById("slideImg").value.trim(),
    script: document.getElementById("slideScript").value.trim(),
    title: document.getElementById("slideTitle").value.trim(),
    desc: document.getElementById("slideDesc").value.trim(),
    btnText: document.getElementById("slideBtnText").value.trim(),
    btnLink: document.getElementById("slideBtnLink").value.trim(),
    whatsappText: document.getElementById("slideWhatsappText").value.trim()
  };

  if (editIndex !== "") {
    SLIDESHOW_DATA[parseInt(editIndex, 10)] = newSlide;
  } else {
    SLIDESHOW_DATA.push(newSlide);
  }
  
  closeSlideModal();
  await saveSlideshowData();
}
