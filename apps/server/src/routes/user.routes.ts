import { Router, IRouter } from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/user.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router: IRouter = Router();

router.get('/profile', authMiddleware, getUserProfile);
router.put('/profile', authMiddleware, updateUserProfile);

export default router;
