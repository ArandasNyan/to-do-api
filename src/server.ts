import app from './app';
import { ENV } from './config/environment';
import connectDatabase from './config/database';

// Conectar ao banco de dados e iniciar o servidor
connectDatabase()
    .then(() => {
        app.listen(ENV.port, () => {
            console.log(`[server] 🚀 Servidor rodando na porta ${ENV.port}`);
        });
    })
    .catch((error) => {
        console.error('[server] ❌ Erro ao conectar ao banco de dados:', error);
    });
