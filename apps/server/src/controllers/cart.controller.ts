import { Response } from 'express';
import { AuthRequest } from '../types/index.js';

// Simple in-memory cart storage (replace with Redis or DB in production)
const cartStorage = new Map<string, unknown>();

export const saveCart = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const cart = req.body;
    cartStorage.set(userId, cart);

    res.json({ message: 'Cart saved successfully', cart });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save cart' });
  }
};

export const getCart = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const cart = cartStorage.get(userId) || { items: [], subtotal: 0, total: 0 };

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
};

