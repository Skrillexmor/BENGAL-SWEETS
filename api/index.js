const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Product = require('../models/Product');
const Setting = require('../models/Setting');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bengalsweets';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- PRODUCTS API ---

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create product
app.post('/api/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update product
app.put('/api/products/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete product
app.delete('/api/products/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// --- SETTINGS (SLIDESHOW) API ---

// Default slideshow content if none exists
const defaultSlideshow = [
  {
    img: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1600&q=80",
    script: "Handcrafted Heritage",
    title: "CHAM CHAM & MAVA PENDA",
    desc: "Prepared daily with 100% farm-fresh cow milk Chenna, slow-cooked whole milk mawa, and Iranian pistachios. Authentic melt-in-mouth recipes since 1989.",
    btnText: "Explore Delicacies",
    btnLink: "categories.html?cat=penda",
    whatsappText: "Hello Bengal Sweets, I would like to inquire about Penda and Cham Cham."
  },
  {
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1600&q=80",
    script: "Crispy Morning Specials",
    title: "DESI GHEE KHASTA KACHORI",
    desc: "The ultimate Rajkot breakfast. Deep-fried in pure desi ghee, stuffed with secret spiced lentils. Served hot with our signature tangy tamarind chutney.",
    btnText: "Order Hot Snacks",
    btnLink: "categories.html?cat=snacks",
    whatsappText: "Hello Bengal Sweets, I would like to inquire about Hot Snacks and Kachori."
  },
  {
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=80",
    script: "Seasonal Exclusives",
    title: "FRESH FRUIT ICE CREAMS",
    desc: "Experience the pure joy of 100% natural fruit ice creams. No artificial flavors, just rich milk cream blended with freshly sourced seasonal fruits.",
    btnText: "View Ice Creams",
    btnLink: "categories.html?cat=icecream",
    whatsappText: "Hello Bengal Sweets, I would like to inquire about Fresh Fruit Ice Creams."
  }
];

// Get settings
app.get('/api/settings', async (req, res) => {
  try {
    let setting = await Setting.findOne();
    if (!setting) {
      // Initialize if empty
      setting = new Setting({ slideshow: defaultSlideshow });
      await setting.save();
    }
    res.json(setting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update slideshow settings
app.put('/api/settings/slideshow', async (req, res) => {
  try {
    let setting = await Setting.findOne();
    if (!setting) {
      setting = new Setting();
    }
    setting.slideshow = req.body;
    const updatedSetting = await setting.save();
    res.json(updatedSetting);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Start Server or Export for Vercel
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
