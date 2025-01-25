import express from 'express';
import { loginUser, registerUser } from '../controllers/auth.controller';

const router = express.Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registrar um novo usuário
 *     description: Cria uma conta de usuário no sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: "johndoe"
 *               email:
 *                 type: string
 *                 example: "johndoe@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso.
 *       400:
 *         description: Erro ao registrar usuário.
 */
router.post('/register', registerUser);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login do usuário
 *     description: Autentica um usuário e retorna um token JWT para acessar as rotas protegidas.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: "johndoe@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Login bem-sucedido, retorna o token JWT.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Credenciais inválidas.
 *       500:
 *         description: Erro interno do servidor.
 */
router.post('/login', loginUser);

export default router;
