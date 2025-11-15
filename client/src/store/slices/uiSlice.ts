import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

interface Modal {
  isOpen: boolean;
  type: 'product' | 'terms' | 'privacy' | 'auth' | null;
  data?: unknown;
}

interface UIState {
  notifications: Notification[];
  modal: Modal;
  isSidebarOpen: boolean;
  isLoading: boolean;
}

const initialState: UIState = {
  notifications: [],
  modal: {
    isOpen: false,
    type: null,
  },
  isSidebarOpen: false,
  isLoading: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Omit<Notification, 'id'>>) => {
      const notification: Notification = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.notifications.push(notification);
    },

    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (notif) => notif.id !== action.payload
      );
    },

    openModal: (
      state,
      action: PayloadAction<{ type: Modal['type']; data?: unknown }>
    ) => {
      state.modal = {
        isOpen: true,
        type: action.payload.type,
        data: action.payload.data,
      };
    },

    closeModal: (state) => {
      state.modal = {
        isOpen: false,
        type: null,
        data: undefined,
      };
    },

    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },

    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },

    setGlobalLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  addNotification,
  removeNotification,
  openModal,
  closeModal,
  toggleSidebar,
  setSidebarOpen,
  setGlobalLoading,
} = uiSlice.actions;

export default uiSlice.reducer;

