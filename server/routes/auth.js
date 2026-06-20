import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { db, nextId } from '../store.js';
import { signToken, requireAuth } from '../auth.js';

const router = Router();

const publicUser = (u) => ({ id: u.id, name: u.name, email: u.email });

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body || {};
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email and password are required' });
  }
  const exists = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (exists) return res.status(409).json({ error: 'An account with this email already exists' });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = { id: nextId(), name, email, passwordHash };
  db.users.push(user);
  return res.status(201).json({ token: signToken(user), user: publicUser(user) });
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: 'Email and password are required' });

  const user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  return res.json({ token: signToken(user), user: publicUser(user) });
});

// GET /api/auth/me
router.get('/me', requireAuth, (req, res) => {
  const user = db.users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  return res.json({ user: publicUser(user) });
});

export default router;
