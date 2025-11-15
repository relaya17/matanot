import { OrderModel } from '../models/Order.model.js';
export const createOrder = async (req, res) => {
    try {
        const { cart, address, userId } = req.body;
        const order = new OrderModel({
            userId: userId || null,
            items: cart.items,
            subtotal: cart.subtotal,
            shipping: cart.shipping || 0,
            total: cart.total,
            address,
            status: 'pending'
        });
        await order.save();
        res.status(201).json({
            message: 'Order created successfully',
            order: order.toJSON()
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create order' });
    }
};
export const getOrders = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const orders = await OrderModel
            .find({ userId })
            .sort({ createdAt: -1 });
        res.json(orders);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
};
export const getOrderById = async (req, res) => {
    try {
        const userId = req.user?.id;
        const orderId = req.params.id;
        const order = await OrderModel.findById(orderId);
        if (!order) {
            res.status(404).json({ error: 'Order not found' });
            return;
        }
        // Check if user owns this order or is admin
        if (order.userId !== userId && req.user?.role !== 'admin') {
            res.status(403).json({ error: 'Access denied' });
            return;
        }
        res.json(order);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch order' });
    }
};
//# sourceMappingURL=order.controller.js.map