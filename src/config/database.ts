import mongoose from 'mongoose';
import { ENV } from './environment';

const connectDatabase = async () => {
  try {
    await mongoose.connect(ENV.databaseUrl, {
      serverSelectionTimeoutMS: 15000, // Tempo limite para conexão
      connectTimeoutMS: 10000, // Tempo limite para estabelecer conexão inicial
    });

    console.log('\x1b[32m[database]\x1b[0m Conectado ao banco de dados com sucesso!');

    // Eventos para monitorar a conexão
    mongoose.connection.on('connected', () => {
      console.log('[database] Mongoose conectado.');
    });

    mongoose.connection.on('error', (err) => {
      console.error('[database] Erro de conexão:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('[database] Mongoose desconectado.');
    });

  } catch (error) { 
    console.error('\x1b[31m[database] Erro ao conectar ao banco de dados:\x1b[0m', error);
    process.exit(1); // Encerra a aplicação em caso de falha crítica
  }
};

// Fechar conexão ao encerrar o processo
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('[database] Conexão com o banco de dados encerrada.');
  process.exit(0);
});

export default connectDatabase;
