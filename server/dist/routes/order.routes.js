import { Router } from 'express';
import { createOrder, getOrders, getOrderById } from '../controllers/order.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
const router = Router();
router.post('/', createOrder);
router.get('/', authMiddleware, getOrders);
router.get('/:id', authMiddleware, getOrderById);
export default router;
//# sourceMappingURL=order.routes.js.map