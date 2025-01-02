import { Router } from 'express';
const router = Router();
import { getProducts, createProduct } from '../controllers/productController.js';

router.get('/products', getProducts);
router.post('/', createProduct);

export default router;
