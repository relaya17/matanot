import { Request, Response } from 'express';
import { AuthRequest } from '../types/index.js';
export declare const createOrder: (req: Request, res: Response) => Promise<void>;
export declare const getOrders: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getOrderById: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=order.controller.d.ts.map