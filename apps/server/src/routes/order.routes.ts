import { Router, IRouter } from 'express';
import { createOrder, getOrders, getOrderById } from '../controllers/order.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router: IRouter = Router();

router.post('/', createOrder);
router.get('/', authMiddleware, getOrders);
router.get('/:id', authMiddleware, getOrderById);

export default router;
