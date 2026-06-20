// In-memory data store. Swap for a real database (Postgres/Mongo) later —
// every route talks to this module, so only this file changes.

export const db = {
  users: [],        // { id, name, email, passwordHash }
  orders: [],       // { id, userId, items, total, status, steps, createdAt }
  contacts: [],     // { id, name, email, phone, service, message, createdAt }
  subscribers: [],  // { email, createdAt }
};

let seq = 1000;
export const nextId = () => ++seq;

export const orderId = () => {
  const year = 2026;
  const n = String(nextId()).padStart(5, '0');
  return `PRK-${year}-${n}`;
};
