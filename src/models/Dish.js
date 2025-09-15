const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
