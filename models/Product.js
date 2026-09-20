const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: String, default: '4.8' },
  reviewCount: { type: String, default: '15' },
  img: { type: String, default: '' },
  desc: { type: String, default: '' },
  isBestseller: { type: Boolean, default: false }
}, { timestamps: true });

// Transform output to match existing frontend code expectation (using id instead of _id)
productSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  }
});

module.exports = mongoose.model('Product', productSchema);
