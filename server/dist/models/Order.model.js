import mongoose, { Schema } from 'mongoose';
const CartItemSchema = new Schema({
    productId: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, min: 1 },
    selectedOptions: { type: Map, of: String },
    note: { type: String }
}, { _id: false });
const AddressSchema = new Schema({
    id: { type: String, required: true },
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    postcode: { type: String },
    notes: { type: String }
}, { _id: false });
const OrderSchema = new Schema({
    userId: {
        type: String,
        default: null
    },
    items: [CartItemSchema],
    subtotal: {
        type: Number,
        required: true,
        min: 0
    },
    shipping: {
        type: Number,
        required: true,
        min: 0
    },
    total: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        enum: ['pending', 'paid', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    address: {
        type: AddressSchema,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform: (_doc, ret) => {
            ret.orderId = ret._id.toString();
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
});
// Indexes
OrderSchema.index({ userId: 1 });
OrderSchema.index({ status: 1 });
OrderSchema.index({ createdAt: -1 });
export const OrderModel = mongoose.model('Order', OrderSchema);
//# sourceMappingURL=Order.model.js.map