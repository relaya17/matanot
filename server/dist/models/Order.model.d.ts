import mongoose, { Document, Types } from 'mongoose';
import { Order as IOrder } from '../types/index.js';
interface OrderDocument extends Omit<IOrder, 'orderId'>, Document {
    _id: Types.ObjectId;
}
export declare const OrderModel: mongoose.Model<OrderDocument, {}, {}, {}, mongoose.Document<unknown, {}, OrderDocument, {}, {}> & OrderDocument & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
export {};
//# sourceMappingURL=Order.model.d.ts.map