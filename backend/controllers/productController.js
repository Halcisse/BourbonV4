import Product from '../models/Product.js';

export async function getProducts(req, res) {
  const product = await find();
  res.json(product);
}

export async function createProduct(req, res) {
  const { name, price, weight, description, image } = req.body;
  const product = new Product({ name, price, weight, description, image });
  await product.save();
  res.json(product);
}
