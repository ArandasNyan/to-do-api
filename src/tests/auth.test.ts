import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';
import { ENV } from '../config/environment';

beforeAll(async () => {
  await mongoose.connect(ENV.databaseUrl, {
    serverSelectionTimeoutMS: 15000,
    connectTimeoutMS: 10000,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  console.log('[database] Conexão encerrada após os testes.');
});

jest.setTimeout(15000); // 15 segundos de timeout

describe('Testes de Autenticação', () => {
  it('Deve registrar um novo usuário', async () => {
    const res = await request(app).post('/api/auth/register').send({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password123',
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message');
  });

  it('Deve falhar ao tentar logar com credenciais inválidas', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'wronguser@example.com',
      password: 'wrongpassword',
    });

    expect(res.statusCode).toEqual(401);
  });
});
