import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User, Address } from '../../types';

interface UserState {
  profile: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  profile: null,
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.profile = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      localStorage.setItem('token', action.payload.token);
    },

    updateProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.profile) {
        state.profile = { ...state.profile, ...action.payload };
      }
    },

    addAddress: (state, action: PayloadAction<Address>) => {
      if (state.profile) {
        state.profile.addresses = [...(state.profile.addresses || []), action.payload];
      }
    },

    logout: (state) => {
      state.profile = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
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
  setUser,
  updateProfile,
  addAddress,
  logout,
  setLoading,
  setError,
  clearError,
} = userSlice.actions;

export default userSlice.reducer;

