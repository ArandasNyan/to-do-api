import express from 'express';
import authRoutes from './auth.routes';
import taskRoutes from './task.routes';

const router = express.Router();

// Definição dos grupos de rotas
router.use('/auth', authRoutes);
router.use('/tasks', taskRoutes);

// Rota de status da API (pode ser útil para health checks)
router.get('/', (req, res) => {
  res.json({ message: 'API de Gerenciamento de Tarefas' });
});

export default router;
