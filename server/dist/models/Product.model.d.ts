import mongoose, { Document, Types } from 'mongoose';
import { Product as IProduct } from '../types/index.js';
interface ProductDocument extends Omit<IProduct, 'id'>, Document {
    _id: Types.ObjectId;
}
export declare const ProductModel: mongoose.Model<ProductDocument, {}, {}, {}, mongoose.Document<unknown, {}, ProductDocument, {}, {}> & ProductDocument & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
export {};
//# sourceMappingURL=Product.model.d.ts.map