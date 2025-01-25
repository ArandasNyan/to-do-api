import { Request, Response } from 'express';
import AuthService from '../services/auth.service';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const user = await AuthService.register(req.body);
        res.status(201).json({ message: 'Usuário registrado com sucesso!', user });
    } catch (error) {
        const err = error as Error;
        res.status(400).json({ error: err.message || 'Erro ao registrar usuário' });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const token = await AuthService.login(req.body.email, req.body.password);
        res.json({ token });
    } catch (error) {
        const err = error as Error;
        res.status(401).json({ error: err.message || 'Credenciais inválidas' });
    }
};
