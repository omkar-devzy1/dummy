// Frontend API client. Talks to the Express backend in /server.
// In dev, the default '/api' is proxied to the backend by Vite (see vite.config.js).
// In production, set VITE_API_URL to the deployed API's full URL.
const BASE = import.meta.env.VITE_API_URL || '/api';

const TOKEN_KEY = 'prakruti-token';
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (t) => {
  if (t) localStorage.setItem(TOKEN_KEY, t);
  else localStorage.removeItem(TOKEN_KEY);
};

async function request(path, { method = 'GET', body, auth = false } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  let data = null;
  try { data = await res.json(); } catch { /* no body */ }
  if (!res.ok) {
    throw new Error((data && data.error) || `Request failed (${res.status})`);
  }
  return data;
}

export const api = {
  auth: {
    login: (email, password) => request('/auth/login', { method: 'POST', body: { email, password } }),
    signup: (name, email, password) => request('/auth/signup', { method: 'POST', body: { name, email, password } }),
    me: () => request('/auth/me', { auth: true }),
  },
  products: {
    list: () => request('/products'),
    get: (id) => request(`/products/${id}`),
  },
  categories: {
    list: () => request('/categories'),
  },
  contact: {
    submit: (payload) => request('/contact', { method: 'POST', body: payload }),
  },
  newsletter: {
    subscribe: (email) => request('/newsletter', { method: 'POST', body: { email } }),
  },
  orders: {
    create: (items, total) => request('/orders', { method: 'POST', auth: true, body: { items, total } }),
    track: (id) => request(`/orders/${encodeURIComponent(id)}/track`),
  },
};

export default api;
