import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes/index.routes';
import { swaggerDocs } from './config/swagger';

const app = express();

// Middlewares
app.use(express.json());  // Permite requisições com corpo JSON
app.use(cors());  // Libera o acesso entre domínios diferentes (CORS)
app.use(helmet());  // Melhora a segurança com cabeçalhos HTTP

// Rotas centralizadas
app.use('/api', routes);

// Configuração da documentação
swaggerDocs(app);

app.get('/', async (req: Request, res: Response) => {
    res.send('API de Gerenciamento de Tarefas!');
});

export default app;
