import { Router } from 'express';
import { db } from '../store.js';

const router = Router();

// POST /api/newsletter
router.post('/', (req, res) => {
  const { email } = req.body || {};
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email is required' });
  }
  const already = db.subscribers.find(s => s.email.toLowerCase() === email.toLowerCase());
  if (!already) db.subscribers.push({ email, createdAt: new Date().toISOString() });
  return res.status(201).json({ ok: true, message: "You're subscribed!" });
});

export default router;
