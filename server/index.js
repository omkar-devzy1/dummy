import express from 'express';
import cors from 'cors';

import { categories } from './data.js';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import contactRoutes from './routes/contact.js';
import newsletterRoutes from './routes/newsletter.js';
import orderRoutes from './routes/orders.js';

const app = express();
const PORT = process.env.PORT || 4500;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => res.json({ ok: true, service: 'prakruti-api' }));

// Categories
app.get('/api/categories', (req, res) => res.json({ categories }));

// Feature routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/orders', orderRoutes);

// 404 for unknown API routes
app.use('/api', (req, res) => res.status(404).json({ error: 'Not found' }));

app.listen(PORT, () => {
  console.log(`🌿 Prakruti API running on http://localhost:${PORT}`);
});
