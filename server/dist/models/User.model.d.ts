import mongoose, { Document, Types } from 'mongoose';
import { User as IUser } from '../types/index.js';
interface UserDocument extends Omit<IUser, 'id'>, Document {
    _id: Types.ObjectId;
    password: string;
    role: string;
}
export declare const UserModel: mongoose.Model<UserDocument, {}, {}, {}, mongoose.Document<unknown, {}, UserDocument, {}, {}> & UserDocument & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
export {};
//# sourceMappingURL=User.model.d.ts.map