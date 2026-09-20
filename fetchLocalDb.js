require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const Product = require('./models/Product');

async function dumpData() {
  try {
    await mongoose.connect('mongodb://localhost:27017/bengalsweets');
    const products = await Product.find({}).lean();
    
    // Remove mongodb specific fields
    const cleanProducts = products.map(p => {
      const { _id, __v, ...rest } = p;
      return { id: _id.toString(), ...rest };
    });

    fs.writeFileSync('dump.json', JSON.stringify(cleanProducts, null, 2));
    console.log('Successfully dumped data to dump.json');
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

dumpData();
