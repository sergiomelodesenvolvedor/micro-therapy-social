# 🗄️ Database - Micro Therapy Social

Estrutura do banco de dados Supabase (PostgreSQL).

## 📁 Estrutura

```
database/
├── migrations/          # Migrations SQL (em ordem)
│   ├── 001_create_users.sql
│   ├── 002_create_posts.sql
│   ├── 003_create_badges.sql
│   ├── 004_create_comments.sql
│   ├── 005_create_payments.sql
│   └── 006_create_reactions.sql
├── supabase.js         # Cliente Supabase configurado
├── seed.js             # Dados de teste
└── README.md           # Esta documentação
```

## 🚀 Como usar

### 1. Configurar Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Crie uma conta gratuita
3. Crie um novo projeto
4. Anote a **URL** e a **anon/public key**
5. Adicione no arquivo `.env`:

```env
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_KEY=sua-chave-aqui
```

### 2. Executar Migrations

**No Supabase Dashboard:**

1. Vá em **SQL Editor** (menu lateral)
2. Copie e cole cada arquivo de migration (001, 002, 003...)
3. Execute em ordem (RUN)
4. Verifique as tabelas em **Table Editor**

**Ou via código (futuro):**

```bash
npm run db:migrate
```

### 3. Popular com dados de teste

```bash
npm run db:seed
```

ou

```bash
node src/database/seed.js
```

### 4. Testar conexão

```javascript
const { testConnection } = require('./database/supabase');

await testConnection(); // ✅ Conexão com Supabase estabelecida!
```

## 📊 Esquema do Banco

### 👤 users

Usuários da plataforma.

| Campo            | Tipo               | Descrição                                 |
| ---------------- | ------------------ | ----------------------------------------- |
| id               | UUID               | ID único (PK)                             |
| email            | VARCHAR            | Email único                               |
| username         | VARCHAR            | Nome de usuário                           |
| avatar_url       | VARCHAR            | URL do avatar                             |
| points           | INT                | Pontos acumulados                         |
| premium          | BOOLEAN            | Assinante premium?                        |
| streak_days      | INT                | Dias consecutivos                         |
| last_login       | TIMESTAMP          | Último acesso                             |
| data_criacao     | TIMESTAMP WITH TZ  | Quando o registro foi criado              |
| data_atualizacao | TIMESTAMP WITH TZ  | Última atualização (trigger de atualização)|
| ativo            | BOOLEAN            | Soft delete (true = ativo, false = removido) |

### 📝 posts

Posts/reflexões dos usuários.

| Campo            | Tipo               | Descrição                                   |
| ---------------- | ------------------ | ------------------------------------------- |
| id               | UUID               | ID único (PK)                               |
| user_id          | UUID               | Quem criou (FK)                             |
| content          | TEXT               | Conteúdo do post                            |
| bot_response     | TEXT               | Resposta automática                         |
| likes            | INT                | Número de likes                             |
| is_anonymous     | BOOLEAN            | Post anônimo?                               |
| data_criacao     | TIMESTAMP WITH TZ  | Quando o registro foi criado                |
| data_atualizacao | TIMESTAMP WITH TZ  | Última atualização (trigger de atualização) |
| ativo            | BOOLEAN            | Soft delete (true = ativo, false = removido) |

### 🏆 badges

Conquistas dos usuários.

| Campo            | Tipo               | Descrição                                   |
| ---------------- | ------------------ | ------------------------------------------- |
| id               | UUID               | ID único (PK)                               |
| user_id          | UUID               | Dono (FK)                                   |
| name             | VARCHAR            | Nome do badge                               |
| description      | TEXT               | Descrição                                   |
| icon_url         | VARCHAR            | URL do ícone                                |
| category         | VARCHAR            | Categoria                                   |
| unlocked_at      | TIMESTAMP WITH TZ  | Quando desbloqueou                          |
| data_criacao     | TIMESTAMP WITH TZ  | Quando o registro foi criado                |
| data_atualizacao | TIMESTAMP WITH TZ  | Última atualização (trigger de atualização) |
| ativo            | BOOLEAN            | Soft delete (true = ativo, false = removido) |

### 💬 comments

Comentários em posts.

| Campo            | Tipo               | Descrição                                   |
| ---------------- | ------------------ | ------------------------------------------- |
| id               | UUID               | ID único (PK)                               |
| post_id          | UUID               | Post (FK)                                   |
| user_id          | UUID               | Autor (FK)                                  |
| content          | TEXT               | Conteúdo                                    |
| is_bot           | BOOLEAN            | É bot?                                      |
| data_criacao     | TIMESTAMP WITH TZ  | Quando o registro foi criado                |
| data_atualizacao | TIMESTAMP WITH TZ  | Última atualização (trigger de atualização) |
| ativo            | BOOLEAN            | Soft delete (true = ativo, false = removido) |

### 💳 payments

Histórico de pagamentos.

| Campo              | Tipo               | Descrição                                   |
| ------------------ | ------------------ | ------------------------------------------- |
| id                 | UUID               | ID único (PK)                               |
| user_id            | UUID               | Usuário (FK)                                |
| stripe_payment_id  | VARCHAR            | ID Stripe                                    |
| stripe_customer_id | VARCHAR            | Cliente Stripe                               |
| status             | VARCHAR            | Status                                       |
| amount             | INT                | Valor (centavos)                             |
| currency           | VARCHAR            | Moeda (BRL)                                  |
| data_criacao       | TIMESTAMP WITH TZ  | Quando o registro foi criado                 |
| data_atualizacao   | TIMESTAMP WITH TZ  | Última atualização (trigger de atualização)  |
| ativo              | BOOLEAN            | Soft delete (true = ativo, false = removido) |

### 👍 reactions

Reações aos posts.

| Campo            | Tipo               | Descrição                                   |
| ---------------- | ------------------ | ------------------------------------------- |
| id               | UUID               | ID único (PK)                               |
| post_id          | UUID               | Post (FK)                                   |
| user_id          | UUID               | Usuário (FK)                                |
| type             | VARCHAR            | Tipo de reação                              |
| data_criacao     | TIMESTAMP WITH TZ  | Quando o registro foi criado                |
| data_atualizacao | TIMESTAMP WITH TZ  | Última atualização (trigger de atualização) |
| ativo            | BOOLEAN            | Soft delete (true = ativo, false = removido) |

## 🔑 Relacionamentos

```
users (1) ──→ (N) posts
users (1) ──→ (N) badges
users (1) ──→ (N) comments
users (1) ──→ (N) payments
users (1) ──→ (N) reactions

posts (1) ──→ (N) comments
posts (1) ──→ (N) reactions
```

## 📝 Exemplos de Queries

### Criar usuário

```javascript
const { data, error } = await supabase
  .from('users')
  .insert({
    email: 'user@example.com',
    username: 'John Doe',
    points: 0,
  })
  .select()
  .single();
```

### Listar posts com autor

```javascript
const { data, error } = await supabase
  .from('posts')
  .select(
    `
    *,
    users (username, avatar_url)
  `
  )
  .order('data_criacao', { ascending: false });
```

### Buscar badges de um usuário

```javascript
const { data, error } = await supabase.from('badges').select('*').eq('user_id', userId);
```

### Ranking de usuários

```javascript
const { data, error } = await supabase
  .from('users')
  .select('username, points, avatar_url')
  .order('points', { ascending: false })
  .limit(10);
```

## 🛡️ Segurança

- **Row Level Security (RLS)**: Configure no Supabase para proteger dados
- **Validações**: Checks e constraints já incluídos nas migrations
- **Índices**: Otimizações para queries frequentes

## 📚 Próximos Passos

- [ ] Configurar RLS (Row Level Security)
- [ ] Criar views para queries complexas
- [ ] Adicionar triggers para atualização automática
- [ ] Implementar soft delete
- [ ] Adicionar auditoria (logs de alterações)
