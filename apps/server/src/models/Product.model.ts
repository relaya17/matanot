import mongoose, { Schema, Document, Types } from 'mongoose';
import { Product as IProduct, ProductOption } from '../types/index.js';

interface ProductDocument extends Omit<IProduct, 'id'>, Document {
  _id: Types.ObjectId;
}

const ProductOptionSchema = new Schema<ProductOption>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  values: [{ type: String, required: true }]
}, { _id: false });

const ProductSchema = new Schema<ProductDocument>({
  slug: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    lowercase: true
  },
  title: { 
    type: String, 
    required: true,
    trim: true
  },
  description: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true,
    min: 0
  },
  images: [{ 
    type: String, 
    required: true 
  }],
  categories: [{ 
    type: String, 
    required: true 
  }],
  tags: [{ type: String }],
  inventory: { 
    type: Number, 
    default: 0,
    min: 0
  },
  options: [ProductOptionSchema]
}, {
  timestamps: true,
  toJSON: {
    transform: (_doc, ret: Record<string, unknown>) => {
      ret.id = (ret._id as Types.ObjectId).toString();
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

// Indexes
ProductSchema.index({ slug: 1 });
ProductSchema.index({ categories: 1 });
ProductSchema.index({ title: 'text', description: 'text' });

export const ProductModel = mongoose.model<ProductDocument>('Product', ProductSchema);
