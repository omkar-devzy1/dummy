import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'prakruti-dev-secret-change-me';
const JWT_EXPIRES = '7d';

export const signToken = (user) =>
  jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: JWT_EXPIRES });

// Express middleware — requires a valid Bearer token, attaches req.user.
export const requireAuth = (req, res, next) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Authentication required' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};
