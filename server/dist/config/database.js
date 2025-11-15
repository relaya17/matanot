import mongoose from 'mongoose';
export const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/giftbox';
        await mongoose.connect(mongoUri);
        console.log('✅ MongoDB connected successfully');
        console.log(`📊 Database: ${mongoose.connection.name}`);
    }
    catch (error) {
        console.error('❌ MongoDB connection error:', error);
        throw error;
    }
};
mongoose.connection.on('disconnected', () => {
    console.log('⚠️  MongoDB disconnected');
});
mongoose.connection.on('error', (err) => {
    console.error('❌ MongoDB error:', err);
});
//# sourceMappingURL=database.js.map