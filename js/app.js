/**
 * VELVET & WHISK ARTISANAL CAKE ATELIER
 * Core Application Logic & Interactive Engines (Khmer Localized)
 */

// ==========================================
// 1. PRODUCT CATALOG DATA (បកប្រែជាភាសាខ្មែរ)
// ==========================================
const PRODUCTS = [
  {
    id: 'cake-1',
    title: 'នំសូកូឡាខ្មៅបែលហ្ស៊ិក Nocturne Truffle',
    category: 'signature',
    price: 68,
    rating: 4.9,
    reviews: 128,
    tag: 'លក់ដាច់បំផុត',
    badgeClass: 'badge-bestseller',
    image: 'assets/images/cake_chocolate_truffle.jpg',
    description: 'សាច់នំសូកូឡាខ្មៅ 70% Valrhona ចំនួន ៣ ស្រទាប់ ស្រោបទឹកហ្គាណាសសូកូឡារលោងស្រទន់ រោយគ្រាប់ហាហ្សែលណាត់លីងស្រួយ តុបតែងដោយមាសកាត់ ២៤k និងផ្លែឈើរីស្រស់។',
    allergens: ['ម្សៅមី (Gluten)', 'ទឹកដោះគោ (Dairy)', 'ស៊ុត (Eggs)', 'គ្រាប់ធញ្ញជាតិ (Pecans)'],
    servings: '៨ - ១០ ចំណិត (ទំហំ ៨ អ៊ីញ)',
    flavorNotes: 'សូកូឡាដិតល្វីងអែម គ្រាប់ធញ្ញជាតិឈ្ងុយស្រួយ និងសាច់នំទន់រលោងដូចព្រំវ៉ាលីវ'
  },
  {
    id: 'cake-2',
    title: 'នំស្ដ្រប៊ឺរីស៊ីហ្វុន Chantilly ស្រស់',
    category: 'signature',
    price: 62,
    rating: 5.0,
    reviews: 94,
    tag: 'ពេញនិយមប្រចាំរដូវកាល',
    badgeClass: 'badge-bestseller',
    image: 'assets/images/cake_strawberry_chiffon.jpg',
    description: 'សាច់នំ Chiffon បែបជប៉ុនស្រាលស្រទន់ដូចពពក ញាត់ជាមួយស្រទាប់ផ្លែស្ត្រប៊ឺរីស្រស់ ក្រែមវ៉ានីឡា Chantilly ពីទឹកដោះគោ Hokkaido និងស្រទាប់ផ្កាធម្មជាតិអាចញ៉ាំបាន។',
    allergens: ['ម្សៅមី (Gluten)', 'ទឹកដោះគោ (Dairy)', 'ស៊ុត (Eggs)'],
    servings: '៦ - ៨ ចំណិត (ទំហំ ៧ អ៊ីញ)',
    flavorNotes: 'ក្លិនវ៉ានីឡាស្រទន់ ផ្លែប៊ឺរីស្រស់ជូរអែម ផ្អែមស្រាលមិនទ្រលាន់'
  },
  {
    id: 'cake-3',
    title: 'នំខារ៉ាមែលប៊័រប្រៃ Praline Crunch',
    category: 'signature',
    price: 65,
    rating: 4.9,
    reviews: 86,
    tag: 'ពេញនិយម',
    badgeClass: '',
    image: 'assets/images/cake_salted_caramel.jpg',
    description: 'សាច់នំប៊័រត្នោតឈ្ងុយឆ្ងាញ់ ជ្រួតជ្រាបជាមួយទឹកខារ៉ាមែលរម្ងាស់យឺតៗ fleur de sel គ្រាប់ភីកានលីងស្ករក្រៀម និងក្រែមប៊័រកាហ្វេ espresso វាយទន់ម៉ត់។',
    allergens: ['ម្សៅមី (Gluten)', 'ទឹកដោះគោ (Dairy)', 'គ្រាប់ធញ្ញជាតិ (Tree Nuts)'],
    servings: '៨ - ១០ ចំណិត (ទំហំ ៨ អ៊ីញ)',
    flavorNotes: 'ស្ករខារ៉ាមែល Toffee, វ៉ានីឡាម៉ាដាហ្គាស្ការ, អំបិលសមុទ្រស្រាលៗ'
  },
  {
    id: 'cake-4',
    title: 'នំតែបៃតង Zen Uji Matcha & សូកូឡាស',
    category: 'dietary',
    price: 64,
    rating: 4.8,
    reviews: 72,
    tag: 'ជម្រើសគ្មាន Gluten',
    badgeClass: '',
    image: 'assets/images/cake_matcha_pistachio.jpg',
    description: 'សាច់នំម្សៅតែបៃតង Uji Matcha ក្យូតូសរីរាង្គ ស្រទាប់មូសគ្រាប់ភីស្តាស្យូស៊ីស៊ីលី ទឹកស្រោបសូកូឡាស Ivory White និងតុបតែងដោយផ្កាម្លិះស្រស់។',
    allergens: ['គ្រាប់ភីស្តាស្យូ (Pistachios)', 'ទឹកដោះគោ (Dairy)', 'ស៊ុត (Eggs)'],
    servings: '៦ - ៨ ចំណិត (ទំហំ ៧ អ៊ីញ)',
    flavorNotes: 'តែបៃតងធម្មជាតិ ក្លិនឈ្ងុយសូកូឡាស គ្រាប់ភីស្តាស្យូលីងឈ្ងុយ'
  },
  {
    id: 'cake-5',
    title: 'នំមង្គលការផ្កា The Grand Royale ៣ ថ្នាក់',
    category: 'wedding',
    price: 280,
    rating: 5.0,
    reviews: 43,
    tag: 'ពិធីមង្គលការធំ',
    badgeClass: 'badge-bestseller',
    image: 'assets/images/cake_wedding_royale.jpg',
    description: 'នំខេកដ៏ស្កឹមស្កៃ ៣ ថ្នាក់លំដាប់អភិជន ផ្សំពីសាច់នំស្រាសំប៉ាញ Brut ក្រែមប៊័រគ្រាប់វ៉ានីឡា Tahiti តុបតែងផ្កាកុលាបស្ករធ្វើដោយដៃ និងស្រោបមាស ២៤k។',
    allergens: ['ម្សៅមី (Gluten)', 'ទឹកដោះគោ (Dairy)', 'ស៊ុត (Eggs)'],
    servings: '៤៥ - ៥៥ ចំណិត (នំ ៣ ថ្នាក់)',
    flavorNotes: 'ស្រាសំប៉ាញស្រទន់ ក្លិនផ្កាវ៉ានីឡាព្រៃ និងក្លិនក្រអូបផ្កាធម្មជាតិ'
  },
  {
    id: 'cake-6',
    title: 'នំរ៉ាស្ប៊ឺរី & មាសប្រណិត La Reine Velvet',
    category: 'signature',
    price: 72,
    rating: 4.9,
    reviews: 110,
    tag: "ស្នាដៃឯកមេចុងភៅ",
    badgeClass: 'badge-bestseller',
    image: 'assets/images/cake_raspberry_velvet.jpg',
    description: 'សាច់នំវ៉ានីឡាបារាំងបុរាណ ជ្រលក់ទឹកផ្លែរ៉ាស្ប៊ឺរីព្រៃជូរអែម ស្រោបក្រែម Swiss meringue តុបតែងផ្លែប៊្លែកប៊ឺរីព្រៃ និងកម្ទេចមាសកាត់ ២៤ ការ៉ាត់។',
    allergens: ['ម្សៅមី (Gluten)', 'ទឹកដោះគោ (Dairy)', 'ស៊ុត (Eggs)'],
    servings: '១០ - ១២ ចំណិត (នំ ២ ថ្នាក់)',
    flavorNotes: 'ផ្លែប៊ឺរីព្រៃស្រស់ ក្រែម Swiss meringue ទន់រលោង រលាយក្នុងមាត់ភ្លាមៗ'
  },
  {
    id: 'cake-7',
    title: 'នំតែ Earl Grey ទឹកឃ្មុំផ្កាឡាវេនឌ័រ',
    category: 'signature',
    price: 64,
    rating: 4.9,
    reviews: 78,
    tag: 'បង្អែមតែពិសេស',
    badgeClass: '',
    image: 'assets/images/cake_earl_grey.jpg',
    description: 'សាច់នំ chiffon ក្លិនតែ Earl Grey និងក្រូចឆ្មារប៊ឺហ្គាម៉ុត ស្រទាប់ក្រែមទឹកឃ្មុំផ្កាឡាវេនឌ័របារាំង ទឹកស្រោបផ្លែប៊្លូប៊ឺរីព្រៃ និងស្រទាប់ផ្កា cornflower ពណ៌ខៀវស្រស់។',
    allergens: ['ម្សៅមី (Gluten)', 'ទឹកដោះគោ (Dairy)', 'ស៊ុត (Eggs)'],
    servings: '៦ - ៨ ចំណិត (ទំហំ ៧ អ៊ីញ)',
    flavorNotes: 'ក្លិនក្រអូបផ្កាឡាវេនឌ័រ ក្លិនតែអឺរ៉ុបបុរាណ និងទឹកឃ្មុំផ្អែមស្រាល'
  },
  {
    id: 'cake-8',
    title: 'នំអូប៉េរ៉ា Opéra Grand Cru កាហ្វេ & សូកូឡា',
    category: 'signature',
    price: 74,
    rating: 5.0,
    reviews: 114,
    tag: 'ស្នាដៃបែបប៉ារីស',
    badgeClass: 'badge-bestseller',
    image: 'assets/images/cake_opera_espresso.jpg',
    description: 'នំប្រពៃណីប៉ារីសប្រើសាច់នំអាល់ម៉ុន génoise ជ្រលក់ទឹកស៊ីរ៉ូកាហ្វេ espresso ក្រែមហ្គាណាសសូកូឡាខ្មៅ 72% វេណេស៊ុយអេឡា និងក្រែមប៊័រកាហ្វេបារាំង។',
    allergens: ['គ្រាប់អាល់ម៉ុន (Almonds)', 'ម្សៅមី (Gluten)', 'ទឹកដោះគោ (Dairy)', 'ស៊ុត (Eggs)'],
    servings: '៨ - ១០ ចំណិត (រាងចតុកោណ ៨ អ៊ីញ)',
    flavorNotes: 'កាហ្វេ espresso ដិតខ្លាំង គ្រាប់អាល់ម៉ុនលីង និងសូកូឡាខ្មៅរលោង'
  },
  {
    id: 'cake-9',
    title: 'នំសូកូឡា Blonde & គ្រាប់ហាហ្សែលណាត់',
    category: 'signature',
    price: 69,
    rating: 4.9,
    reviews: 92,
    tag: "ជម្រើសមេចុងភៅ",
    badgeClass: '',
    image: 'assets/images/cake_blonde_hazelnut.jpg',
    description: 'សាច់នំសូកូឡាពណ៌ទង់ដែង Blonde ដុតយឺតៗ មូស praline គ្រាប់ហាហ្សែលណាត់ Piemonte ទឹកស្រោប Toffee ប៊័រប្រៃ និងរោយគ្រាប់ហាហ្សែលណាត់រំលេចម្សៅមាស។',
    allergens: ['គ្រាប់ហាហ្សែលណាត់ (Hazelnuts)', 'ម្សៅមី (Gluten)', 'ទឹកដោះគោ (Dairy)', 'ស៊ុត (Eggs)'],
    servings: '៨ - ១០ ចំណិត (ទំហំ ៨ អ៊ីញ)',
    flavorNotes: 'ខារ៉ាមែលឈ្ងុយប៊័រ គ្រាប់ហាហ្សែលណាត់បុកស្រួយ និងសូកូឡាផ្អែមស្រទន់'
  },
  {
    id: 'cake-10',
    title: 'នំគ្រាប់ភីស្តាស្យូ & ក្រូចឆ្មារ Meyer Velvet',
    category: 'dietary',
    price: 68,
    rating: 4.8,
    reviews: 83,
    tag: 'គ្មានជាតិ Gluten',
    badgeClass: 'badge-bestseller',
    image: 'assets/images/cake_pistachio_lemon.jpg',
    description: 'សាច់នំគ្មានម្សៅមីធ្វើពីគ្រាប់ភីស្តាស្យូ Bronte ស្រទាប់ក្រែមក្រូចឆ្មារ Meyer ជូរអែម ក្រែមវ៉ានីឡា Mascarpone និងរោយគ្រាប់ភីស្តាស្យូបៃតងបុកល្អិត។',
    allergens: ['គ្រាប់ភីស្តាស្យូ (Pistachios)', 'ទឹកដោះគោ (Dairy)', 'ស៊ុត (Eggs)'],
    servings: '៦ - ៨ ចំណិត (ទំហំ ៧ អ៊ីញ)',
    flavorNotes: 'រសជាតិក្រូចឆ្មារស្រស់ស្រាយ មានតុល្យភាពជាមួយភាពឈ្ងុយនៃគ្រាប់ភីស្តាស្យូ'
  },
  {
    id: 'cake-11',
    title: 'នំមង្គលការផ្កាកុលាប & ស្រាសំប៉ាញ Ivory Rose',
    category: 'wedding',
    price: 220,
    rating: 5.0,
    reviews: 38,
    tag: 'នំមង្គលការ',
    badgeClass: '',
    image: 'assets/images/cake_ivory_wedding.jpg',
    description: 'នំ ២ ថ្នាក់ដ៏ឆើតឆាយផ្សំពីសាច់នំស្រាសំប៉ាញ Brut Rosé ដំណាប់ផ្លែប៉េសសរសជាតិផ្អែមស្រទន់ ក្រែមប៊័រវ៉ានីឡា Tahiti និងផ្កាកុលាបធម្មជាតិតម្រៀបជាកម្រងផ្កា។',
    allergens: ['ម្សៅមី (Gluten)', 'ទឹកដោះគោ (Dairy)', 'ស៊ុត (Eggs)'],
    servings: '៣០ - ៣៥ ចំណិត (នំ ២ ថ្នាក់)',
    flavorNotes: 'ស្រាសំប៉ាញ rosé ផ្លែប៉េសសរដូវក្តៅ និងក្រែមវ៉ានីឡារលោងស្រទន់'
  },
  {
    id: 'cake-12',
    title: 'នំវ៉ានីឡាតាហ៊ីទី & មកុដផ្លែប៊ឺរីព្រៃ',
    category: 'signature',
    price: 66,
    rating: 4.9,
    reviews: 105,
    tag: 'ភាពឆើតឆាយបុរាណ',
    badgeClass: 'badge-bestseller',
    image: 'assets/images/cake_vanilla_crown.jpg',
    description: 'សាច់នំប៊័ទធ័រមីលក៍ពណ៌មាសឈ្ងុយឆ្ងាញ់ លាយគ្រាប់វ៉ានីឡា Tahiti សុទ្ធ ស្រោបក្រែម Swiss meringue តុបតែងផ្លែរ៉ាស្ប៊ឺរីស្រស់ និងមាសកាត់ ២៤k។',
    allergens: ['ម្សៅមី (Gluten)', 'ទឹកដោះគោ (Dairy)', 'ស៊ុត (Eggs)'],
    servings: '៨ - ១០ ចំណិត (ទំហំ ៨ អ៊ីញ)',
    flavorNotes: 'ក្លិនផ្កាវ៉ានីឡាធម្មជាតិ ផ្លែរ៉ាស្ប៊ឺរីជូរអែម និងសាច់នំទន់រលាយក្នុងមាត់'
  }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
const state = {
  cart: JSON.parse(localStorage.getItem('velvet_whisk_cart')) || [],
  activeCategory: 'all',
  searchQuery: '',
  builder: {
    step: 1,
    size: '8-inch',
    sizePrice: 68,
    tiers: 1,
    sponge: 'vanilla',
    spongeName: 'វ៉ានីឡាសុទ្ធ ម៉ាដាហ្គាស្ការ',
    spongeColor: '#FAF3E8',
    filling: 'caramel',
    fillingName: 'ទឹកស្រោចខារ៉ាមែលប៊័រប្រៃ Brittany',
    fillingPrice: 6,
    dripColor: '#C47E32',
    topping: 'berries',
    toppingName: 'ផ្លែប៊ឺរីព្រៃស្រស់ចម្រុះ',
    toppingPrice: 8,
    toppingIcon: '🍓 🫐',
    inscription: 'រីករាយថ្ងៃខួបកំណើត!'
  }
};

// Helper: Save cart to localStorage
function saveCart() {
  localStorage.setItem('velvet_whisk_cart', JSON.stringify(state.cart));
  updateCartUI();
}

// Category display mapping in Khmer
const CATEGORY_NAMES = {
  'all': 'ការច្នៃប្រឌិតទាំងអស់',
  'signature': 'នំខេកហត្ថលេខា',
  'wedding': 'នំអាពាហ៍ពិពាហ៍ & ថ្នាក់ធំ',
  'dietary': 'សុខភាព & គ្មានជាតិ Gluten'
};

// ==========================================
// 3. CATALOG RENDERING & FILTERING
// ==========================================
const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('catalog-search');
const filterPills = document.querySelectorAll('.filter-pill');

function renderProducts() {
  if (!productsGrid) return;

  const filtered = PRODUCTS.filter(cake => {
    const matchesCategory = state.activeCategory === 'all' || cake.category === state.activeCategory;
    const matchesSearch = cake.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          cake.description.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          cake.flavorNotes.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 2.4rem; margin-bottom: 12px;">🎂</p>
        <h3 style="font-size: 1.4rem; margin-bottom: 8px; color: var(--primary-espresso);">រកមិនឃើញនំខេកដែលអ្នកចង់បានទេ</h3>
        <p>សូមសាកល្បងស្វែងរកដោយប្រើពាក្យគន្លឹះផ្សេង ឬជ្រើសរើស "ការច្នៃប្រឌិតទាំងអស់"។</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(cake => `
    <article class="cake-card" data-id="${cake.id}">
      <div class="cake-media-wrap">
        <img src="${cake.image}" alt="${cake.title}" loading="lazy" />
        ${cake.tag ? `<span class="cake-tag-badge ${cake.badgeClass}">${cake.tag}</span>` : ''}
        <button class="cake-quick-view-btn" onclick="openQuickView('${cake.id}')">
          👁️ មើលលម្អិត
        </button>
      </div>
      <div class="cake-details">
        <div class="cake-meta">
          <span class="cake-category">${CATEGORY_NAMES[cake.category] || cake.category}</span>
          <div class="cake-rating">
            <span class="star">★</span>
            <span>${cake.rating}</span>
            <span style="color: var(--text-light); font-size: 0.74rem;">(${cake.reviews})</span>
          </div>
        </div>
        <h3 class="cake-title">${cake.title}</h3>
        <p class="cake-desc">${cake.description}</p>
        <div class="cake-card-footer">
          <span class="cake-price">$${cake.price}</span>
          <button class="add-cart-mini-btn" onclick="addToCart('${cake.id}')">
            <span>+</span> ដាក់ក្នុងកន្ត្រក
          </button>
        </div>
      </div>
    </article>
  `).join('');

  updateFilterPillCounts();
}

function updateFilterPillCounts() {
  const counts = {
    all: PRODUCTS.length,
    signature: PRODUCTS.filter(c => c.category === 'signature').length,
    wedding: PRODUCTS.filter(c => c.category === 'wedding').length,
    dietary: PRODUCTS.filter(c => c.category === 'dietary').length
  };
  filterPills.forEach(pill => {
    const cat = pill.dataset.category;
    if (cat === 'all') pill.textContent = `ការច្នៃប្រឌិតទាំងអស់ (${counts.all})`;
    else if (cat === 'signature') pill.textContent = `នំខេកហត្ថលេខា (${counts.signature})`;
    else if (cat === 'wedding') pill.textContent = `នំអាពាហ៍ពិពាហ៍ & ថ្នាក់ធំ (${counts.wedding})`;
    else if (cat === 'dietary') pill.textContent = `សុខភាព & គ្មានជាតិ Gluten (${counts.dietary})`;
  });
}

// Category filter listeners
filterPills.forEach(pill => {
  pill.addEventListener('click', () => {
    filterPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    state.activeCategory = pill.dataset.category;
    renderProducts();
  });
});

// Search input listener
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim();
    renderProducts();
  });
}

// ==========================================
// 4. INTERACTIVE CUSTOM CAKE BUILDER ENGINE
// ==========================================
const stageTierTop = document.getElementById('visual-tier-top');
const stageTierBottom = document.getElementById('visual-tier-bottom');
const stageTopper = document.getElementById('visual-topper');
const stagePlaque = document.getElementById('visual-plaque');
const builderPriceDisplay = document.getElementById('builder-price-display');
const inscriptionInput = document.getElementById('builder-inscription-input');

function updateBuilderVisual() {
  const b = state.builder;

  // Update Tiers
  if (b.tiers === 2) {
    stageTierTop.classList.add('visible');
    stageTierTop.style.backgroundColor = b.spongeColor;
  } else {
    stageTierTop.classList.remove('visible');
  }

  // Update Bottom Tier color
  stageTierBottom.style.backgroundColor = b.spongeColor;

  // Update Drips
  const dripsTop = document.getElementById('tier-top-drips');
  const dripsBottom = document.getElementById('tier-bottom-drips');
  const dripGradient = `linear-gradient(180deg, ${b.dripColor} 0%, ${b.dripColor} 60%, rgba(0,0,0,0) 100%)`;
  
  if (dripsTop) dripsTop.style.background = dripGradient;
  if (dripsBottom) dripsBottom.style.background = dripGradient;

  // Update Topper Icon
  if (stageTopper) {
    stageTopper.textContent = b.toppingIcon;
  }

  // Update Inscription Plaque
  if (stagePlaque) {
    stagePlaque.textContent = b.inscription ? `"${b.inscription}"` : '"រីករាយថ្ងៃខួបកំណើត!"';
  }

  // Calculate Total Price
  const total = b.sizePrice + b.fillingPrice + b.toppingPrice;
  if (builderPriceDisplay) {
    builderPriceDisplay.textContent = `$${total}`;
  }
}

// Builder Step Navigation
window.switchBuilderStep = function(stepNum) {
  state.builder.step = stepNum;

  // Tabs UI
  document.querySelectorAll('.builder-tab').forEach(tab => {
    tab.classList.toggle('active', parseInt(tab.dataset.step) === stepNum);
  });

  // Panels UI
  document.querySelectorAll('.step-panel').forEach(panel => {
    panel.classList.toggle('active', parseInt(panel.dataset.panel) === stepNum);
  });
};

// Builder Option Click Handler
window.selectBuilderOption = function(category, value, price, extraMeta) {
  const b = state.builder;

  if (category === 'size') {
    b.size = value;
    b.sizePrice = price;
    b.tiers = (value === '2-tier') ? 2 : 1;
  } else if (category === 'sponge') {
    b.sponge = value;
    b.spongeName = extraMeta.name;
    b.spongeColor = extraMeta.color;
  } else if (category === 'filling') {
    b.filling = value;
    b.fillingName = extraMeta.name;
    b.fillingPrice = price;
    b.dripColor = extraMeta.color;
  } else if (category === 'topping') {
    b.topping = value;
    b.toppingName = extraMeta.name;
    b.toppingPrice = price;
    b.toppingIcon = extraMeta.icon;
  }

  // Update selected card styling in current panel
  const currentPanel = document.querySelector(`.step-panel[data-panel="${state.builder.step}"]`);
  if (currentPanel) {
    currentPanel.querySelectorAll('.option-card').forEach(card => card.classList.remove('selected'));
    const chosen = currentPanel.querySelector(`.option-card[data-val="${value}"]`);
    if (chosen) chosen.classList.add('selected');
  }

  updateBuilderVisual();
};

if (inscriptionInput) {
  inscriptionInput.addEventListener('input', (e) => {
    state.builder.inscription = e.target.value;
    updateBuilderVisual();
  });
}

// Add Custom Cake to Bag
window.addCustomCakeToCart = function() {
  const b = state.builder;
  const totalPrice = b.sizePrice + b.fillingPrice + b.toppingPrice;
  const sizeLabel = b.size === '2-tier' ? 'នំ ២ ថ្នាក់' : b.size === '6-inch' ? '៦ អ៊ីញ' : '៨ អ៊ីញ';

  const customItem = {
    id: 'custom-' + Date.now(),
    title: `នំខេករចនាផ្ទាល់ខ្លួន (${sizeLabel})`,
    price: totalPrice,
    image: b.tiers === 2 ? 'assets/images/cake_wedding_royale.jpg' : 'assets/images/cake_chocolate_truffle.jpg',
    isCustom: true,
    quantity: 1,
    customDetails: `${b.spongeName} · ${b.fillingName} · ${b.toppingName} · សារជូនពរ: "${b.inscription}"`
  };

  state.cart.push(customItem);
  saveCart();
  showToast(`🎉 បានបញ្ចូលនំកែច្នៃក្នុងកន្ត្រក ($${totalPrice})!`);
  triggerConfetti();
  openCartDrawer();
};

// ==========================================
// 5. SHOPPING CART SYSTEM & SLIDE DRAWER
// ==========================================
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const cartDrawer = document.getElementById('cart-drawer');
const cartCountBadges = document.querySelectorAll('.cart-count-badge');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSubtotalDisplay = document.getElementById('cart-subtotal');
const cartTotalDisplay = document.getElementById('cart-total');
const shippingProgress = document.getElementById('shipping-progress');
const shippingNotice = document.getElementById('shipping-notice');

window.addToCart = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
      isCustom: false
    });
  }

  saveCart();
  showToast(`បានបញ្ចូល "${product.title}" ទៅក្នុងកន្ត្រក!`);

  // Animate cart icon badge
  cartCountBadges.forEach(b => {
    b.classList.remove('bump');
    void b.offsetWidth; // force reflow
    b.classList.add('bump');
  });
};

window.updateItemQty = function(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== id);
  }
  saveCart();
};

window.removeItem = function(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  saveCart();
  showToast('បានលុបទំនិញចេញពីកន្ត្រក');
};

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountBadges.forEach(badge => {
    badge.textContent = totalCount;
  });

  if (!cartItemsContainer) return;

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🍰</div>
        <h4 style="font-size: 1.2rem; color: var(--primary-espresso); margin-bottom: 6px;">កន្ត្រករបស់អ្នកមិនទាន់មានទំនិញទេ</h4>
        <p style="font-size: 0.9rem;">សូមជ្រើសរើសនំខេកហត្ថលេខារបស់យើង ឬរចនានំផ្ទាល់ខ្លួនក្នុងក្តីស្រមៃរបស់អ្នក!</p>
        <button class="btn btn-primary" onclick="closeCartDrawer(); window.location.href='#catalog';" style="margin-top: 14px;">
          ស្វែងរកកាតាឡុកនំ
        </button>
      </div>
    `;
    if (cartSubtotalDisplay) cartSubtotalDisplay.textContent = '$0.00';
    if (cartTotalDisplay) cartTotalDisplay.textContent = '$0.00';
    if (shippingProgress) shippingProgress.style.width = '0%';
    if (shippingNotice) shippingNotice.textContent = 'បន្ថែម $80 ទៀត ដើម្បីទទួលបានសេវាដឹកជញ្ជូនត្រជាក់ដោយឥតគិតថ្លៃ!';
    return;
  }

  // Render items
  cartItemsContainer.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-thumb" />
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.title}</h4>
        ${item.customDetails ? `<div class="cart-item-custom-notes">${item.customDetails}</div>` : ''}
        <div class="cart-item-actions">
          <div class="qty-stepper">
            <button class="qty-btn" onclick="updateItemQty('${item.id}', -1)">−</button>
            <span class="qty-number">${item.quantity}</span>
            <button class="qty-btn" onclick="updateItemQty('${item.id}', 1)">+</button>
          </div>
          <span class="cart-item-price">$${item.price * item.quantity}</span>
          <button class="cart-item-remove" onclick="removeItem('${item.id}')" title="លុបចេញ">✕</button>
        </div>
      </div>
    </div>
  `).join('');

  // Calculate totals
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const freeThreshold = 80;
  const progress = Math.min(100, Math.round((subtotal / freeThreshold) * 100));

  if (shippingProgress) shippingProgress.style.width = `${progress}%`;
  if (shippingNotice) {
    if (subtotal >= freeThreshold) {
      shippingNotice.innerHTML = '🎉 <strong>អ្នកទទួលបានការដឹកជញ្ជូនត្រជាក់ដោយឥតគិតថ្លៃ!</strong>';
    } else {
      shippingNotice.innerHTML = `បន្ថែម <strong>$${(freeThreshold - subtotal).toFixed(2)}</strong> ទៀត ដើម្បីទទួលបានការដឹកជញ្ជូនដោយឥតគិតថ្លៃ`;
    }
  }

  if (cartSubtotalDisplay) cartSubtotalDisplay.textContent = `$${subtotal.toFixed(2)}`;
  if (cartTotalDisplay) cartTotalDisplay.textContent = `$${subtotal.toFixed(2)}`;
}

window.openCartDrawer = function() {
  if (cartDrawerOverlay && cartDrawer) {
    cartDrawerOverlay.classList.add('open');
    cartDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeCartDrawer = function() {
  if (cartDrawerOverlay && cartDrawer) {
    cartDrawerOverlay.classList.remove('open');
    cartDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }
};

if (cartDrawerOverlay) {
  cartDrawerOverlay.addEventListener('click', (e) => {
    if (e.target === cartDrawerOverlay) closeCartDrawer();
  });
}

// ==========================================
// 6. QUICK VIEW MODAL
// ==========================================
const quickViewModal = document.getElementById('quick-view-modal');
const quickViewContent = document.getElementById('quick-view-content');

window.openQuickView = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !quickViewContent) return;

  quickViewContent.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1.1fr; gap: 30px; align-items: center;">
      <div style="border-radius: 18px; overflow: hidden; box-shadow: var(--shadow-md);">
        <img src="${product.image}" alt="${product.title}" style="width: 100%; height: 320px; object-fit: cover;" />
      </div>
      <div>
        <span class="section-tagline" style="margin-bottom: 8px;">${CATEGORY_NAMES[product.category] || product.category}</span>
        <h2 style="font-size: 1.5rem; color: var(--primary-espresso); margin-bottom: 10px; line-height: 1.35;">${product.title}</h2>
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px;">
          <div style="color: #f59e0b;">★★★★★</div>
          <span style="font-weight: 700; font-size: 0.9rem;">${product.rating}</span>
          <span style="color: var(--text-muted); font-size: 0.8rem;">(${product.reviews} ការវាយតម្លៃពិតប្រាកដ)</span>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          ${product.description}
        </p>
        <div style="background: var(--cream-surface); padding: 14px; border-radius: var(--radius-md); margin-bottom: 20px; font-size: 0.86rem; line-height: 1.6;">
          <p style="margin-bottom: 6px;"><strong>🍰 ចំណែកទទួលទាន:</strong> ${product.servings}</p>
          <p style="margin-bottom: 6px;"><strong>✨ ក្លិន & រសជាតិ:</strong> ${product.flavorNotes}</p>
          <p><strong>⚠️ ជាតិអាឡែហ្ស៊ី:</strong> ${product.allergens.join(', ')}</p>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 1.8rem; font-weight: 800; font-family: var(--font-serif); color: var(--primary-espresso);">
            $${product.price}
          </span>
          <button class="btn btn-primary" onclick="addToCart('${product.id}'); closeQuickView();">
            ដាក់ក្នុងកន្ត្រក
          </button>
        </div>
      </div>
    </div>
  `;

  if (quickViewModal) {
    quickViewModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeQuickView = function() {
  if (quickViewModal) {
    quickViewModal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// ==========================================
// 7. CHECKOUT SIMULATION MODAL
// ==========================================
const checkoutModal = document.getElementById('checkout-modal');
const checkoutBody = document.getElementById('checkout-modal-body');

window.openCheckout = function() {
  if (state.cart.length === 0) {
    showToast('កន្ត្រករបស់អ្នកមិនទាន់មានទំនិញទេ។ សូមជ្រើសរើសនំជាមុនសិន!');
    return;
  }
  closeCartDrawer();

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= 80 ? 0 : 12;
  const grandTotal = subtotal + deliveryFee;

  if (checkoutBody) {
    checkoutBody.innerHTML = `
      <h2 style="font-size: 1.7rem; color: var(--primary-espresso); margin-bottom: 6px; line-height: 1.35;">បំពេញព័ត៌មាននៃការកក់របស់អ្នក</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px;">
        ដុតថ្មីៗដោយផ្ទាល់ដៃនៅព្រឹកព្រលឹមនៃថ្ងៃកម្មវិធីរបស់អ្នក។
      </p>

      <div style="background: var(--cream-surface); padding: 16px 20px; border-radius: var(--radius-md); margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.9rem;">
          <span>តម្លៃទំនិញសរុប (${state.cart.length} មុខ)</span>
          <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.9rem;">
          <span>សេវាដឹកជញ្ជូនត្រជាក់</span>
          <span>${deliveryFee === 0 ? '<strong style="color: var(--pistachio-accent)">ឥតគិតថ្លៃ (FREE)</strong>' : '$' + deliveryFee.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: 800; font-family: var(--font-serif); border-top: 1px solid var(--cream-border); padding-top: 8px;">
          <span>តម្លៃសរុបទាំងអស់</span>
          <span>$${grandTotal.toFixed(2)}</span>
        </div>
      </div>

      <form id="checkout-form" onsubmit="handleCheckoutSubmit(event, ${grandTotal})">
        <div class="checkout-form-grid">
          <div class="checkout-input-group">
            <label>ឈ្មោះអ្នកទទួល *</label>
            <input type="text" required placeholder="ឧ. កញ្ញា សុធារី" />
          </div>
          <div class="checkout-input-group">
            <label>លេខទូរស័ព្ទ *</label>
            <input type="tel" required placeholder="012 345 678" />
          </div>
          <div class="checkout-input-group form-full-width">
            <label>អាសយដ្ឋានដឹកជញ្ជូន ឬមកយកនៅហាង *</label>
            <input type="text" required placeholder="ផ្ទះលេខ... ផ្លូវ... រាជធានីភ្នំពេញ ឬ 'មកយកនៅហាង'" />
          </div>
          <div class="checkout-input-group">
            <label>កាលបរិច្ឆេទកម្មវិធី *</label>
            <input type="date" required id="delivery-date-input" />
          </div>
          <div class="checkout-input-group">
            <label>ពេលវេលាដឹកជញ្ជូន *</label>
            <select required>
              <option value="morning">ពេលព្រឹក (9:00 AM - 12:00 PM)</option>
              <option value="afternoon">ពេលរសៀល (1:00 PM - 5:00 PM)</option>
              <option value="evening">ពេលល្ងាច (5:00 PM - 8:00 PM)</option>
            </select>
          </div>
          <div class="checkout-input-group form-full-width">
            <label>សារជូនពរលើកាត (សរសេរអក្សរផ្ចង់ដោយដៃឥតគិតថ្លៃ)</label>
            <input type="text" placeholder="ឧ. សូមជូនពរឱ្យមានសុខភាពល្អ និងសុភមង្គលជានិច្ច!" />
          </div>
        </div>

        <div style="display: flex; gap: 14px; margin-top: 24px;">
          <button type="button" class="btn btn-secondary" onclick="closeCheckout()" style="flex: 1;">
            ត្រឡប់ទៅកន្ត្រកវិញ
          </button>
          <button type="submit" class="btn btn-primary" style="flex: 1.5;">
            បញ្ជាក់ & កម្ម៉ង់ឥឡូវនេះ ($${grandTotal.toFixed(2)})
          </button>
        </div>
      </form>
    `;

    // Set default min date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateInput = document.getElementById('delivery-date-input');
    if (dateInput) {
      dateInput.min = tomorrow.toISOString().split('T')[0];
      dateInput.value = tomorrow.toISOString().split('T')[0];
    }
  }

  if (checkoutModal) {
    checkoutModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeCheckout = function() {
  if (checkoutModal) {
    checkoutModal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

window.handleCheckoutSubmit = function(e, total) {
  e.preventDefault();
  const orderId = 'VW-' + Math.floor(100000 + Math.random() * 900000);

  checkoutBody.innerHTML = `
    <div class="checkout-success-box">
      <div class="checkout-success-icon">✓</div>
      <span class="section-tagline">ការកក់ទុកបានជោគជ័យ!</span>
      <h2 style="font-size: 1.8rem; color: var(--primary-espresso); margin-bottom: 10px; line-height: 1.35;">
        សូមអរគុណចំពោះការជាវរបស់អ្នក
      </h2>
      <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 440px; margin: 0 auto 20px; line-height: 1.6;">
        ការកម្ម៉ង់លេខ <strong>#${orderId}</strong> ត្រូវបានទទួលដោយមេចុងភៅរបស់យើង។ សារ SMS បញ្ជាក់ការកម្ម៉ង់ និងព័ត៌មានតាមដានត្រូវបានផ្ញើជូនរួចរាល់។
      </p>
      <div style="background: var(--cream-surface); padding: 16px; border-radius: var(--radius-md); max-width: 360px; margin: 0 auto 26px; text-align: left; font-size: 0.88rem; line-height: 1.7;">
        <p><strong>លេខកូដកម្ម៉ង់:</strong> #${orderId}</p>
        <p><strong>ទឹកប្រាក់សរុប:</strong> $${total.toFixed(2)}</p>
        <p><strong>ស្ថានភាព:</strong> រៀបចំដុតថ្មីៗនៅព្រឹកព្រលឹម 👨‍🍳</p>
      </div>
      <button class="btn btn-primary" onclick="finishOrderAndReset()">
        ត្រឡប់ទៅទំព័រដើម
      </button>
    </div>
  `;

  triggerConfetti();
  state.cart = [];
  saveCart();
};

window.finishOrderAndReset = function() {
  closeCheckout();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ==========================================
// 8. TOAST NOTIFICATIONS
// ==========================================
const toastContainer = document.getElementById('toast-container');

window.showToast = function(msg) {
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span><span>${msg}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
};

// ==========================================
// 9. FAQ ACCORDION
// ==========================================
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isOpen = item.classList.contains('open');

    // Close others
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

    if (!isOpen) {
      item.classList.add('open');
    }
  });
});

// ==========================================
// 10. CONFETTI BURST EFFECT
// ==========================================
function triggerConfetti() {
  const count = 40;
  const colors = ['#C9933B', '#DF8F8F', '#261619', '#E6B76B', '#3D7D6B'];

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.style.position = 'fixed';
    el.style.width = Math.random() * 8 + 6 + 'px';
    el.style.height = Math.random() * 12 + 8 + 'px';
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.left = (window.innerWidth / 2) + (Math.random() * 300 - 150) + 'px';
    el.style.top = (window.innerHeight / 2) + (Math.random() * 100 - 50) + 'px';
    el.style.borderRadius = '3px';
    el.style.zIndex = '9999';
    el.style.pointerEvents = 'none';
    el.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(el);

    const destX = (Math.random() - 0.5) * window.innerWidth * 0.7;
    const destY = (Math.random() - 0.7) * window.innerHeight * 0.8;

    const anim = el.animate([
      { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1 },
      { transform: `translate(${destX}px, ${destY}px) scale(0.6) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], {
      duration: 1200 + Math.random() * 800,
      easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
    });

    anim.onfinish = () => el.remove();
  }
}

// ==========================================
// 11. MOBILE NAVIGATION & SCROLL LISTENER
// ==========================================
const mobileDrawer = document.getElementById('mobile-nav-drawer');
window.openMobileNav = function() {
  if (mobileDrawer) mobileDrawer.classList.add('open');
};
window.closeMobileNav = function() {
  if (mobileDrawer) mobileDrawer.classList.remove('open');
};

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (navbar) {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// Newsletter subscription toast
window.handleNewsletter = function(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  if (input && input.value) {
    showToast(`💌 សូមស្វាគមន៍មកកាន់ក្លឹប VIP របស់យើង! សូមពិនិត្យមើល ${input.value} ដើម្បីទទួលបានការបញ្ចុះតម្លៃ ១០%។`);
    input.value = '';
  }
};

// ==========================================
// 12. KHMER FONT SELECTOR
// ==========================================
window.setKhmerFont = function(fontKey) {
  document.body.classList.remove('font-theme-kantumruy', 'font-theme-siemreap', 'font-theme-battambang');
  document.body.classList.add(`font-theme-${fontKey}`);
  try {
    localStorage.setItem('velvet_whisk_font', fontKey);
  } catch (e) {}

  document.querySelectorAll('.font-choice-btn').forEach(btn => {
    const isTarget = btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(fontKey);
    btn.classList.toggle('active', !!isTarget);
  });
};

// ==========================================
// 13. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const savedFont = localStorage.getItem('velvet_whisk_font') || 'kantumruy';
  setKhmerFont(savedFont);
  renderProducts();
  updateCartUI();
  updateBuilderVisual();
});
