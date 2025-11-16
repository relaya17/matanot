import mongoose, { Schema } from 'mongoose';
const AddressSchema = new Schema({
    id: { type: String, required: true },
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    postcode: { type: String },
    notes: { type: String }
}, { _id: false });
const UserSchema = new Schema({
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
        transform: (_doc, ret) => {
            ret.id = ret._id.toString();
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            return ret;
        }
    }
});
// Indexes
UserSchema.index({ email: 1 });
export const UserModel = mongoose.model('User', UserSchema);
//# sourceMappingURL=User.model.js.map