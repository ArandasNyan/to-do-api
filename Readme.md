# To-Do List API

## Descrição
Essa é uma API de gerenciamento de tarefas desenvolvida como parte de um aprendizado prático em desenvolvimento backend com Node.js e TypeScript. O objetivo principal do projeto é aplicar conceitos fundamentais como autenticação, organização de código com controllers e services, documentação via Swagger, testes automatizados e boas práticas de segurança.

## Tecnologias Utilizadas
- **Node.js** - Plataforma de backend
- **Express.js** - Framework para gerenciamento de rotas e middleware
- **TypeScript** - Tipagem estática para maior segurança e produtividade
- **MongoDB (com Mongoose)** - Banco de dados NoSQL para armazenamento das tarefas
- **JWT (JSON Web Token)** - Autenticação de usuários
- **Jest + Supertest** - Testes automatizados
- **Swagger (OpenAPI)** - Documentação da API

## Funcionalidades
- **Autenticação de usuários:**
  - Registro de novos usuários
  - Login com JWT
  - Proteção de rotas com middleware de autenticação

- **Gerenciamento de tarefas (CRUD):**
  - Criar uma nova tarefa
  - Listar todas as tarefas
  - Atualizar uma tarefa
  - Excluir uma tarefa
  - Marcar uma tarefa como concluída

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/ArandasMyan/to-do-api.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd to-do-api
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Crie um arquivo `.env` com base no `.env.example` e configure suas variáveis de ambiente:
   ```env
   PORT=5000
   DATABASE_URL=mongodb://localhost:27017/todo-db
   JWT_SECRET=suachavejwt
   BCRYPT_SALT_ROUNDS=10
   ```

5. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

6. Para rodar em produção:
   ```bash
   npm run build
   npm run prod
   ```

## Uso

- Acesse a documentação via Swagger para explorar os endpoints:
  ```
  http://localhost:5000/docs
  ```

- Exemplo de requisição para criar uma tarefa (POST /api/tasks):
  ```json
  {
    "title": "Aprender Node.js",
    "description": "Estudar conceitos básicos de backend",
    "completed": false
  }
  ```

## Testes
Para rodar os testes automatizados:

```bash
npm run test
```

## Estrutura de Pastas
```
.
|-- src/
|   |-- config/          # Configuração da aplicação
|   |-- controllers/     # Controladores da API
|   |-- middleware/      # Middlewares de autenticação e segurança
|   |-- models/          # Modelos do banco de dados
|   |-- routes/          # Definição de rotas
|   |-- services/        # Regra de negócio
|   |-- tests/           # Testes automatizados
|   |-- app.ts           # Configuração principal do Express
|   |-- server.ts        # Inicialização do servidor
|-- dist/                # Build da aplicação (gerado pelo TypeScript)
|-- package.json         # Dependências do projeto
|-- tsconfig.json        # Configuração do TypeScript
|-- .gitignore           # Arquivos a serem ignorados pelo Git
```

## Melhorias Futuras
- Implementação de testes mais abrangentes
- Adição de filtragem e paginação nas tarefas
- Deploy de conteinerização
- Deploy automatizado para plataformas cloud (Railway/Vercel)

## Contato
Caso tenha alguma dúvida ou sugestão, entre em contato pelo GitHub.

---
Projeto desenvolvido para fins de estudo e aprendizado em desenvolvimento backend com Node.js e TypeScript.

