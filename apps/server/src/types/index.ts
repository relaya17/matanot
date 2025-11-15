import { Request } from 'express';

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
  createdAt?: Date;
  updatedAt?: Date;
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
  createdAt?: Date;
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
  createdAt: Date;
  updatedAt?: Date;
}

// Auth Types
export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role?: string;
  };
}

export interface JWTPayload {
  id: string;
  email: string;
  role?: string;
}

