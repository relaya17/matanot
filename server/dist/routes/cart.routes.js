import { Router } from 'express';
import { saveCart, getCart } from '../controllers/cart.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
const router = Router();
router.post('/', authMiddleware, saveCart);
router.get('/', authMiddleware, getCart);
export default router;
//# sourceMappingURL=cart.routes.js.map