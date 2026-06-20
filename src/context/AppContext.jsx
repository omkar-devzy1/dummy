import React, { createContext, useContext, useState, useEffect } from 'react';
import { setToken } from '../api';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Auth
  const [user, setUser] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('prakruti-dark');
    if (saved) setDarkMode(JSON.parse(saved));
    const savedWishlist = localStorage.getItem('prakruti-wishlist');
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    const savedUser = localStorage.getItem('prakruti-user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  useEffect(() => {
    localStorage.setItem('prakruti-dark', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('prakruti-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('prakruti-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('prakruti-user');
    }
  }, [user]);

  const toggleWishlist = (id) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  // Gate any purchase / account action behind login.
  // If logged in, runs the action immediately. Otherwise stores it and
  // opens the login modal so it runs right after a successful sign-in.
  const requireAuth = (action) => {
    if (user) {
      action?.();
    } else {
      setPendingAction(() => action || null);
      setLoginOpen(true);
    }
  };

  // Called by LoginModal after a successful API auth call.
  const login = (account, token) => {
    if (token) setToken(token);
    setUser(account);
    setLoginOpen(false);
    if (pendingAction) {
      const run = pendingAction;
      setPendingAction(null);
      run();
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setCart([]);
    setCartOpen(false);
  };

  const addToCart = (item) => {
    requireAuth(() => {
      setCart(prev => {
        const existing = prev.find(i => i.id === item.id);
        if (existing) {
          return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
        }
        return [...prev, { ...item, qty: 1 }];
      });
      setCartOpen(true);
    });
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <AppContext.Provider value={{
      darkMode, setDarkMode,
      wishlist, toggleWishlist,
      cart, addToCart, cartCount, clearCart,
      cartOpen, setCartOpen,
      user, login, logout,
      loginOpen, setLoginOpen,
      requireAuth,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
