import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ENV } from '../config/environment';

interface AuthRequest extends Request {
    user?: any;
}

export const authenticateJWT = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(403).json({ error: 'Acesso negado' });
  
    try {
      const decoded = jwt.verify(token, ENV.jwtSecret);
      req.user = decoded; // Adiciona a informação do usuário à requisição
      next();
    } catch (error) {
      res.status(401).json({ error: 'Token inválido' });
    }
  };