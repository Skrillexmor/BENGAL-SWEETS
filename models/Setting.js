const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema({
  img: { type: String, required: true },
  script: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  btnText: { type: String, required: true },
  btnLink: { type: String, required: true },
  whatsappText: { type: String, required: true }
});

const settingSchema = new mongoose.Schema({
  slideshow: [slideSchema]
}, { timestamps: true });

settingSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  }
});

module.exports = mongoose.model('Setting', settingSchema);
