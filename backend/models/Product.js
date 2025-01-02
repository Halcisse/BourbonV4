import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  weight: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
});

export default model('Product', ProductSchema);
