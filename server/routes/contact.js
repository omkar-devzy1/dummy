import { Router } from 'express';
import { db, nextId } from '../store.js';

const router = Router();

// POST /api/contact
router.post('/', (req, res) => {
  const { name, email, phone, service, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required' });
  }
  const entry = { id: nextId(), name, email, phone, service, message, createdAt: new Date().toISOString() };
  db.contacts.push(entry);
  return res.status(201).json({ ok: true, message: "Thanks! We'll get back to you within 2 business hours." });
});

export default router;
