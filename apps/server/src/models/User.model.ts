import mongoose, { Schema, Document, Types } from 'mongoose';
import { User as IUser, Address } from '../types/index.js';

interface UserDocument extends Omit<IUser, 'id'>, Document {
  _id: Types.ObjectId;
  password: string;
  role: string;
}

const AddressSchema = new Schema<Address>({
  id: { type: String, required: true },
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  postcode: { type: String },
  notes: { type: String }
}, { _id: false });

const UserSchema = new Schema<UserDocument>({
  name: { 
    type: String, 
    required: true,
    trim: true
  },
  email: { 
    type: String, 
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: { 
    type: String, 
    required: true,
    select: false
  },
  phone: { type: String },
  addresses: [AddressSchema],
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {
  timestamps: true,
  toJSON: {
    transform: (_doc, ret: Record<string, unknown>) => {
      ret.id = (ret._id as Types.ObjectId).toString();
      delete ret._id;
      delete ret.__v;
      delete ret.password;
      return ret;
    }
  }
});

// Indexes
UserSchema.index({ email: 1 });

export const UserModel = mongoose.model<UserDocument>('User', UserSchema);
