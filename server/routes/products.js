import { Router } from 'express';
import { products, categories } from '../data.js';

const router = Router();

// GET /api/products
router.get('/', (req, res) => {
  res.json({ products });
});

// GET /api/products/:id
router.get('/:id', (req, res) => {
  const product = products.find(p => String(p.id) === req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json({ product });
});

export default router;
export { categories };
