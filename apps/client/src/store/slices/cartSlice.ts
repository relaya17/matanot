import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Cart, CartItem } from '../../types';

interface CartState extends Cart {
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  subtotal: 0,
  shipping: 0,
  total: 0,
  isOpen: false,
};

const calculateTotals = (items: CartItem[], shipping = 0): Pick<Cart, 'subtotal' | 'total'> => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return {
    subtotal,
    total: subtotal + shipping,
  };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.productId === action.payload.productId
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      const totals = calculateTotals(state.items, state.shipping);
      state.subtotal = totals.subtotal;
      state.total = totals.total;
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.productId !== action.payload);
      const totals = calculateTotals(state.items, state.shipping);
      state.subtotal = totals.subtotal;
      state.total = totals.total;
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.productId === action.payload.productId);
      if (item) {
        item.quantity = action.payload.quantity;
        const totals = calculateTotals(state.items, state.shipping);
        state.subtotal = totals.subtotal;
        state.total = totals.total;
      }
    },

    setNote: (state, action: PayloadAction<{ productId: string; note: string }>) => {
      const item = state.items.find((item) => item.productId === action.payload.productId);
      if (item) {
        item.note = action.payload.note;
      }
    },

    setShipping: (state, action: PayloadAction<number>) => {
      state.shipping = action.payload;
      state.total = state.subtotal + action.payload;
    },

    clearCart: (state) => {
      state.items = [];
      state.subtotal = 0;
      state.total = state.shipping || 0;
    },

    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },

    setCartOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  setNote,
  setShipping,
  clearCart,
  toggleCart,
  setCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;

