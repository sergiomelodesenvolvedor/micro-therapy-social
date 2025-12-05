# ✅ Checklist: Esquema DB Inicial - Sprint 1

## 📋 Tarefa: Esquema DB inicial (tabelas e relações)

**Tempo estimado:** 5.5 horas  
**Status:** ✅ CONCLUÍDO

---

## ✅ O que foi feito

### 1. Migrations SQL criadas (6 arquivos)

- ✅ `001_create_users.sql` - Tabela de usuários
- ✅ `002_create_posts.sql` - Posts/reflexões
- ✅ `003_create_badges.sql` - Badges/conquistas
- ✅ `004_create_comments.sql` - Comentários
- ✅ `005_create_payments.sql` - Pagamentos (Stripe)
- ✅ `006_create_reactions.sql` - Reações aos posts

### 2. Arquivos de Infraestrutura

- ✅ `supabase.js` - Cliente configurado com helpers
- ✅ `seed.js` - Script para popular dados de teste
- ✅ `README.md` - Documentação completa

### 3. Configuração

- ✅ `.env.example` atualizado com variáveis do Supabase
- ✅ `package.json` com scripts `db:seed` e `db:test`

---

## 🎯 Próximos Passos (você precisa fazer)

### Passo 1: Criar conta no Supabase

1. Acesse https://supabase.com
2. Crie uma conta gratuita
3. Clique em "New Project"
4. Nome do projeto: `micro-therapy-social`
5. Escolha senha forte para o database
6. Escolha região mais próxima (South America)

### Passo 2: Executar as Migrations

1. No Supabase, vá em **SQL Editor** (menu lateral esquerdo)
2. Copie o conteúdo de `backend/src/database/migrations/001_create_users.sql`
3. Cole no editor e clique em **RUN**
4. Repita para os arquivos 002, 003, 004, 005, 006 **em ordem**

### Passo 3: Configurar as credenciais

1. No Supabase, vá em **Settings** > **API**
2. Copie a **URL** e a **anon/public key**
3. No seu projeto, copie `.env.example` para `.env`:
   ```bash
   cd backend
   cp .env.example .env
   ```
4. Edite o `.env` e preencha:
   ```env
   SUPABASE_URL=https://seu-projeto.supabase.co
   SUPABASE_KEY=sua_chave_aqui
   ```

### Passo 4: Testar a conexão

```bash
cd backend
npm run db:test
```

Deve aparecer: ✅ Conexão com Supabase estabelecida com sucesso!

### Passo 5: Popular com dados de teste

```bash
npm run db:seed
```

Deve criar:

- 3 usuários de teste
- 2 posts de exemplo
- 2 badges

### Passo 6: Verificar no Supabase

1. Vá em **Table Editor** (menu lateral)
2. Clique em cada tabela (users, posts, badges...)
3. Veja os dados criados pelo seed

---

## 📊 Estrutura Criada

```
backend/src/database/
├── migrations/
│   ├── 001_create_users.sql      ✅ Usuários
│   ├── 002_create_posts.sql      ✅ Posts
│   ├── 003_create_badges.sql     ✅ Badges
│   ├── 004_create_comments.sql   ✅ Comentários
│   ├── 005_create_payments.sql   ✅ Pagamentos
│   └── 006_create_reactions.sql  ✅ Reações
├── supabase.js                   ✅ Cliente
├── seed.js                       ✅ Dados teste
└── README.md                     ✅ Documentação
```

---

## 🗄️ Tabelas do Banco

| Tabela        | Descrição              | Relações         |
| ------------- | ---------------------- | ---------------- |
| **users**     | Usuários da plataforma | -                |
| **posts**     | Posts/reflexões        | → users          |
| **badges**    | Conquistas             | → users          |
| **comments**  | Comentários            | → posts, → users |
| **payments**  | Histórico pagamentos   | → users          |
| **reactions** | Reações aos posts      | → posts, → users |

---

## 💡 Dicas

### Visualizar relacionamentos

No Supabase, vá em **Database** > **Relationships** para ver o diagrama ER.

### Queries de exemplo

**Ver todos os usuários:**

```sql
SELECT * FROM users;
```

**Ver posts com autor:**

```sql
SELECT p.*, u.username
FROM posts p
JOIN users u ON p.user_id = u.id;
```

**Ranking de pontos:**

```sql
SELECT username, points
FROM users
ORDER BY points DESC
LIMIT 10;
```

---

## 🐛 Troubleshooting

### Erro: "relation does not exist"

→ Você não executou as migrations. Vá no SQL Editor e execute todos os arquivos.

### Erro: "Invalid API key"

→ Verifique se copiou a chave correta do Supabase (Settings > API).

### Erro: "Connection refused"

→ Verifique se a URL do Supabase está correta no `.env`.

---

## ✅ Checklist Final

- [ ] Conta no Supabase criada
- [ ] Projeto criado no Supabase
- [ ] Todas as 6 migrations executadas
- [ ] `.env` configurado com credenciais
- [ ] Teste de conexão passou (`npm run db:test`)
- [ ] Dados de seed criados (`npm run db:seed`)
- [ ] Verificado no Table Editor do Supabase

---

## 📝 Notas Importantes

1. **NUNCA comite o arquivo `.env`** com credenciais reais
2. Use a **anon/public key** no frontend
3. Use a **service_role key** apenas no backend (super poderes)
4. Ative Row Level Security (RLS) antes do lançamento
5. Faça backup regular do banco

---

## 🎉 Conclusão

✅ **Esquema DB implementado com sucesso!**

Você agora tem:

- 6 tabelas estruturadas
- Relacionamentos definidos
- Índices para performance
- Scripts de seed para testes
- Cliente Supabase configurado
- Documentação completa

**Próxima tarefa da Sprint 1:** CI básico + linting + pre-commit
