import express from 'express';
import { authenticateJWT } from '../middleware/auth.middleware';
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/task.controller';

const router = express.Router();

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Criar uma nova tarefa
 *     description: Cria uma nova tarefa com título e descrição.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Minha Tarefa"
 *               description:
 *                 type: string
 *                 example: "Descrição da tarefa"
 *               completed:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 *       400:
 *         description: Título e descrição são obrigatórios
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/', authenticateJWT, createTask);

/**
 * @swagger
 * /api/tasks/list:
 *   get:
 *     summary: Listar todas as tarefas
 *     description: Retorna uma lista de todas as tarefas cadastradas.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tarefas retornada com sucesso
 *       500:
 *         description: Erro ao buscar as tarefas
 */
router.get('/list', authenticateJWT, getTasks);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Atualizar uma tarefa por ID
 *     description: Atualiza uma tarefa existente com base no ID fornecido.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da tarefa a ser atualizada
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Tarefa Atualizada"
 *               description:
 *                 type: string
 *                 example: "Descrição atualizada"
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 *       404:
 *         description: Tarefa não encontrada
 *       400:
 *         description: Erro ao atualizar a tarefa
 */
router.put('/:id', authenticateJWT, updateTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Excluir uma tarefa por ID
 *     description: Exclui uma tarefa com base no ID fornecido.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da tarefa a ser excluída
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarefa removida com sucesso
 *       404:
 *         description: Tarefa não encontrada
 *       500:
 *         description: Erro ao excluir a tarefa
 */
router.delete('/:id', authenticateJWT, deleteTask);

export default router;
