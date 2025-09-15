import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

const Dish = mongoose.model('Dish', dishSchema);

export default Dish;