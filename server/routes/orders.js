import { Router } from 'express';
import { db, orderId } from '../store.js';
import { requireAuth } from '../auth.js';

const router = Router();

const buildSteps = () => ([
  { id: 1, label: 'Order Confirmed', icon: '✅', time: 'Today, 9:00 AM', done: true },
  { id: 2, label: 'Plants Prepared', icon: '🌿', time: 'Today, 11:30 AM', done: true },
  { id: 3, label: 'Out for Delivery', icon: '🚚', time: 'Today, 2:00 PM', done: true, active: true },
  { id: 4, label: 'Delivered', icon: '🏡', time: 'Expected by 6:00 PM', done: false },
]);

// POST /api/orders  (auth required) — create an order from cart items
router.post('/', requireAuth, (req, res) => {
  const { items, total } = req.body || {};
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Cart is empty' });
  }
  const computedTotal = items.reduce((sum, i) => sum + (Number(i.price) || 0) * (Number(i.qty) || 1), 0);
  const order = {
    id: orderId(),
    userId: req.user.id,
    items,
    total: total ?? computedTotal,
    status: 'On the way',
    steps: buildSteps(),
    createdAt: new Date().toISOString(),
  };
  db.orders.push(order);
  return res.status(201).json({ order });
});

// GET /api/orders  (auth required) — current user's orders
router.get('/', requireAuth, (req, res) => {
  res.json({ orders: db.orders.filter(o => o.userId === req.user.id) });
});

// GET /api/orders/:id/track — public tracking by order id
router.get('/:id/track', (req, res) => {
  const found = db.orders.find(o => o.id === req.params.id);
  if (found) {
    const count = found.items.reduce((sum, i) => sum + (Number(i.qty) || 1), 0);
    return res.json({ orderId: found.id, status: found.status, steps: found.steps, items: count, total: found.total });
  }
  // Unknown id → return a demo tracking so the UI always has something to show.
  return res.json({ orderId: req.params.id, status: 'On the way', steps: buildSteps(), items: 3, total: 1297, demo: true });
});

export default router;
