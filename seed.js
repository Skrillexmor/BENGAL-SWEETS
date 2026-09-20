const mongoose = require('mongoose');
const Product = require('./models/Product');
const Setting = require('./models/Setting');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bengalsweets';

const DEFAULT_DELICACIES = [
  // --- PENDA (3) ---
  {
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

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB. Clearing existing products...');
    await Product.deleteMany({});
    
    console.log('Inserting default products...');
    await Product.insertMany(DEFAULT_DELICACIES);
    
    console.log('Database seeded successfully!');
    process.exit(0);
  })
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
  });
