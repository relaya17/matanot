import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/User.model.js';
export const register = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        // Check if user exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            res.status(400).json({ error: 'User already exists' });
            return;
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create user
        const user = new UserModel({
            name,
            email,
            password: hashedPassword,
            phone
        });
        await user.save();
        // Generate token
        const userId = user._id.toString();
        const token = jwt.sign({ id: userId, email: user.email, role: user.role }, process.env.JWT_SECRET || 'default-secret', { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: user.toJSON()
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Find user with password
        const user = await UserModel.findOne({ email }).select('+password');
        if (!user) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }
        // Check password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }
        // Generate token
        const userId = user._id.toString();
        const token = jwt.sign({ id: userId, email: user.email, role: user.role }, process.env.JWT_SECRET || 'default-secret', { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
        res.json({
            message: 'Login successful',
            token,
            user: user.toJSON()
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};
export const getProfile = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user?.id);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
};
//# sourceMappingURL=auth.controller.js.map