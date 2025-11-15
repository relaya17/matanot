import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../types';

interface ProductsState {
  list: Product[];
  currentProduct: Product | null;
  loading: boolean;
  error: string | null;
  categories: string[];
}

const initialState: ProductsState = {
  list: [],
  currentProduct: null,
  loading: false,
  error: null,
  categories: [
    'ימי הולדת',
    'אהבה',
    'תינוקות',
    'מתנות לגבר',
    'מתנות לעובדים',
    'בלונים',
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.list = action.payload;
      state.loading = false;
      state.error = null;
    },

    setCurrentProduct: (state, action: PayloadAction<Product | null>) => {
      state.currentProduct = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setProducts,
  setCurrentProduct,
  setLoading,
  setError,
  clearError,
} = productsSlice.actions;

export default productsSlice.reducer;

