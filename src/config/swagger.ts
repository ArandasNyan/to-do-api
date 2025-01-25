import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';
import { ENV } from './environment';

const options = {
    definition: {
        openapi: '3.0.0', // Versão do OpenAPI
        info: {
            title: 'API de Gerenciamento de Tarefas',
            version: '1.0.0',
            description: 'Documentação da API To-Do List',
        },
        servers: [
            {
                url: 'http://localhost:5000', // URL base da API em ambiente local
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [{ bearerAuth: [] }],
    },
    apis: ['./src/routes/*.ts'], // Caminho para buscar anotações nos arquivos de rotas
};

const swaggerSpecs = swaggerJsdoc(options);

export const swaggerDocs = (app: express.Application) => {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
    console.log(`[swagger] Documentação de api disponível em http://localhost:${ENV.port}/docs`)
};