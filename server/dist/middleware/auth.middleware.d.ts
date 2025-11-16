import { Response, NextFunction } from 'express';
import { AuthRequest } from '../types/index.js';
export declare const authMiddleware: (req: AuthRequest, res: Response, next: NextFunction) => void;
export declare const adminMiddleware: (req: AuthRequest, res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.middleware.d.ts.map