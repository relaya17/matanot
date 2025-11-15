// Product Types
export interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  categories: string[];
  tags?: string[];
  inventory?: number;
  options?: ProductOption[];
  createdAt?: string;
  updatedAt?: string;
}

// Cart Types
export interface CartItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  selectedOptions?: Record<string, string>;
  note?: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping?: number;
  total: number;
}

// User Types
export interface Address {
  id: string;
  fullName: string;
  phone: string;
  street: string;
  city: string;
  postcode?: string;
  notes?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  addresses?: Address[];
  createdAt?: string;
}

// Order Types
export interface Order {
  orderId: string;
  userId: string | null;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  address: Address;
  createdAt: string;
  updatedAt?: string;
}

