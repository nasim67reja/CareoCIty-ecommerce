const mongoose = require('mongoose');
// const slugify = require('slugify');

// Mongoose schema :

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Product must have a name'],
    trim: true,
    unique: true,
  },
  price: {
    type: Number,
    required: [true, 'A Product must have a price'],
  },
  listPrice: {
    type: Number,
  },
  summary: {
    type: String,
    required: [true, 'A Product must have a summary'],
  },
  description: {
    type: String,
    trim: true,
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating msut be below 5.0'],
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
});

// create model:
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
