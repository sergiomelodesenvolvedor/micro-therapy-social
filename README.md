# Micro Therapy Social

🧠 **Plataforma gamificada de micro-intervenções para saúde mental**

Uma rede social que ajuda pessoas com ansiedade e depressão através de:
- ✍️ Posts de desabafos
- 🤖 Respostas automáticas com dicas
- 🏆 Gamificação (pontos, badges, ranking)
- 💎 Plano premium com IA avançada

---

## 🚀 Visão Geral

### O que é?
App web que permite usuários postarem pensamentos negativos/ansiosos e receberem respostas de apoio de um bot, com sistema de pontos para motivar uso contínuo.

### Por quê?
- Terapia é cara e demora
- App fornece resposta **rápida** (< 60s)
- Gamificação mantém engajamento
- Comunidade reduz isolamento

### Números do Projeto
- **Duração:** 24 semanas (6 meses)
- **Sprints:** 12 (2 semanas cada)
- **Horas totais:** ~672h (~56h/sprint)
- **Início:** 8 Dec 2025
- **Fim:** 25 May 2026

---

## 📋 Stack Recomendado

### Backend
- **Node.js** + Express (ou FastAPI)
- **Supabase** (PostgreSQL + Auth)
- **OpenAI API** (IA para respostas)

### Frontend
- **HTML5** (estrutura)
- **CSS3** (estilos + animações)
- **JavaScript** (vanilla, sem frameworks)

### Infraestrutura
- **Railway/Render** (deploy backend)
- **Vercel** (deploy frontend)
- **Stripe** (pagamentos)

### Bot
- **Telegram** ou **Discord** (notificações)
- **Webhooks** (comunicação com API)

---

## 🎮 Features Principais

### MVP (Sprints 1-4)
- ✅ Cadastro com magic link
- ✅ Criar/ver posts
- ✅ Bot responde automaticamente
- ✅ Perfil com pontos
- ✅ Ranking
- ✅ Badges básicas

### Growth (Sprints 5-6)
- ✅ Streaks (dias seguidos)
- ✅ Reações em posts
- ✅ Comentários
- ✅ Notificações
- ✅ Piloto com 50-100 usuários

### Premium (Sprints 7-8)
- ✅ Assinatura Stripe
- ✅ IA avançada (OpenAI)
- ✅ Relatórios semanais em PDF
- ✅ Análise de humor

### Scale (Sprints 9-12)
- ✅ Segurança (LGPD)
- ✅ Growth marketing
- ✅ Performance
- ✅ Lançamento público

---

## 📊 Arquitetura

### Diagrama de Alto Nível

```
┌──────────────────────────────────────────────────────────────────┐
│                        MICRO THERAPY SOCIAL                       │
├──────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌─────────────────┐         ┌──────────────────┐                │
│  │   🖥️ FRONTEND    │         │   🤖 BOT LAYER   │                │
│  │  HTML/CSS/JS    │         │  Telegram/Discord│                │
│  │ (Navegador)     │         │  Webhooks        │                │
│  └────────┬────────┘         └────────┬─────────┘                │
│           │                           │                           │
│           └───────────┬───────────────┘                           │
│                       │                                            │
│                  REST API                                          │
│                 (HTTPS)                                            │
│                       │                                            │
│                       ▼                                            │
│           ┌───────────────────────┐                               │
│           │  🔐 BACKEND API       │                               │
│           │  Node.js + Express    │                               │
│           │  Railway.app          │                               │
│           │                       │                               │
│           │ • Auth (JWT)          │                               │
│           │ • Posts CRUD          │                               │
│           │ • Pontuação           │                               │
│           │ • Badges              │                               │
│           │ • Pagamentos (Stripe) │                               │
│           │ • IA (OpenAI)         │                               │
│           └───────────┬───────────┘                               │
│                       │                                            │
│        ┌──────────────┼──────────────┐                            │
│        │              │              │                            │
│        ▼              ▼              ▼                            │
│    ┌────────┐   ┌──────────┐  ┌────────────┐                    │
│    │Supabase│   │  Stripe  │  │  OpenAI    │                    │
│    │(DB)    │   │(Payments)│  │   (IA)     │                    │
│    └────────┘   └──────────┘  └────────────┘                    │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

### Fluxo de um Post (End-to-End)

```
1️⃣ USUÁRIO CRIA POST
   ┌────────────────────────────────────────┐
   │ Usuário escreve no Frontend            │
   │ "Estou com muita ansiedade hoje..."    │
   └───────────┬────────────────────────────┘
               │
               ▼
   ┌────────────────────────────────────────┐
   │ Frontend envia POST /api/posts         │
   │ com JWT token + conteúdo               │
   └───────────┬────────────────────────────┘
               │
2️⃣ BACKEND PROCESSA
               ▼
   ┌────────────────────────────────────────┐
   │ Backend valida token (JWT)             │
   │ Verifica usuário no Supabase           │
   └───────────┬────────────────────────────┘
               │
               ▼
   ┌────────────────────────────────────────┐
   │ Salva post no Supabase (DB)            │
   │ Atualiza pontos do usuário             │
   │ Cria badge se aplicável                │
   └───────────┬────────────────────────────┘
               │
3️⃣ BOT RESPONDE
               ▼
   ┌────────────────────────────────────────┐
   │ Backend chama OpenAI com contexto      │
   │ (ou usa template se premium false)     │
   └───────────┬────────────────────────────┘
               │
               ▼
   ┌────────────────────────────────────────┐
   │ Recebe resposta de apoio               │
   │ "Você é forte! Respire fundo..."       │
   └───────────┬────────────────────────────┘
               │
4️⃣ NOTIFICAÇÃO
               ▼
   ┌────────────────────────────────────────┐
   │ Bot envia no Telegram/Discord          │
   │ "Você recebeu uma resposta!"           │
   └───────────┬────────────────────────────┘
               │
5️⃣ USUÁRIO VÊ RESPOSTA
               ▼
   ┌────────────────────────────────────────┐
   │ Frontend busca /api/posts/:id          │
   │ Mostra post + resposta + pontos        │
   │ Usuário vê badge desbloqueada          │
   └────────────────────────────────────────┘
```

### Componentes Detalhados

#### Frontend (3000)
```
┌─ index.html
│  ├─ Feed (lista de posts)
│  ├─ Criar Post (formulário)
│  ├─ Perfil (pontos, badges)
│  ├─ Ranking (leaderboard)
│  └─ Autenticação (magic link)
│
└─ API calls
   ├─ GET /api/health (verificar servidor)
   ├─ GET /api/posts (listar)
   ├─ POST /api/posts (criar)
   ├─ GET /api/users/:id (perfil)
   └─ GET /api/rankings (top 10)
```

#### Backend (3001)
```
┌─ src/index.js (servidor principal)
│
├─ src/routes/
│  ├─ health.js (status do servidor)
│  ├─ posts.js (criar/listar/editar posts)
│  ├─ users.js (perfil, pontos, badges)
│  ├─ rankings.js (leaderboard)
│  └─ auth.js (login via magic link)
│
├─ src/controllers/
│  ├─ postController.js (lógica de posts)
│  ├─ userController.js (lógica de usuários)
│  └─ pointController.js (cálculo de pontos)
│
├─ src/services/
│  ├─ supabase.js (banco de dados)
│  ├─ openai.js (respostas com IA)
│  ├─ stripe.js (pagamentos)
│  └─ telegram.js (notificações)
│
└─ src/middleware/
   ├─ auth.js (validação JWT)
   └─ errorHandler.js (tratamento de erros)
```

#### Banco de Dados (Supabase)
```
┌─ users
│  ├─ id (UUID)
│  ├─ email
│  ├─ username
│  ├─ avatar_url
│  ├─ points (int)
│  ├─ created_at
│  └─ premium (bool)
│
├─ posts
│  ├─ id (UUID)
│  ├─ user_id (FK)
│  ├─ content (text)
│  ├─ bot_response (text)
│  ├─ likes (int)
│  └─ created_at
│
├─ badges
│  ├─ id (UUID)
│  ├─ user_id (FK)
│  ├─ name
│  ├─ description
│  ├─ icon_url
│  └─ unlocked_at
│
├─ comments
│  ├─ id (UUID)
│  ├─ post_id (FK)
│  ├─ user_id (FK)
│  ├─ content
│  └─ created_at
│
└─ payments
   ├─ id (UUID)
   ├─ user_id (FK)
   ├─ stripe_id
   ├─ status
   ├─ amount
   └─ created_at
```

### Fluxo de Autenticação

```
NOVO USUÁRIO:
1. Clica em "Entrar"
2. Digita email
3. Backend envia magic link
4. Usuário clica no link
5. Frontend recebe JWT token
6. Salva no localStorage
7. Faz requisições com Authorization: Bearer <token>

LOGIN POSTERIOR:
1. Clica em "Entrar"
2. Digita email
3. Recebe link
4. Clica
5. Volta com novo JWT
```

### Fluxo de Gamificação

```
POST CRIADO:
├─ +10 pontos (ato de desabafar)
└─ Badge: "Primeira voz" (se primeiro post)

BOT RESPONDE:
├─ +5 pontos (recebeu apoio)
└─ Badge: "Apoiado" (se receber resposta)

REAÇÕES (Sprint 5):
├─ +1 ponto por like (ato de reagir)
├─ +2 pontos por reação positiva
└─ Badge: "Inspiração" (50+ likes)

STREAKS (Sprint 5):
├─ +1 ponto por dia consecutivo
├─ 7 dias: Badge "Uma Semana"
└─ 30 dias: Badge "Um Mês"
```

### Serviços Externos

```
┌─ SUPABASE (Database)
│  └─ PostgreSQL hostado
│     • Realtime updates
│     • Auth integration
│     • Backups automáticos
│
├─ STRIPE (Pagamentos)
│  └─ Test mode (começar)
│     • Assinaturas mensais/anuais
│     • Webhooks de status
│     • Dashboard de analytics
│
├─ OPENAI (IA - Sprint 8)
│  └─ API GPT-3.5 / GPT-4
│     • Gera respostas personalizadas
│     • Análise de sentimento
│     • Relatórios de humor
│
├─ TELEGRAM (Bot - Sprint 3)
│  └─ Notificações em tempo real
│     • Aviso de respostas
│     • Ranking diário
│     • Lembretes motivacionais
│
└─ RAILWAY (Hosting - Sprint 2)
   └─ Deployment automático via Git
      • Auto-rebuild em push
      • Logs em tempo real
      • Variáveis de ambiente
```

### Segurança

```
┌─ Frontend
│  ├─ HTTPS apenas
│  ├─ JWT no localStorage
│  └─ CORS configurado
│
├─ Backend
│  ├─ JWT validation em todos endpoints
│  ├─ Rate limiting
│  ├─ Validação de inputs
│  ├─ Helmet.js (headers seguros)
│  └─ Morgan (logs)
│
└─ Banco de Dados
   ├─ Row Level Security (RLS)
   ├─ Backups automáticos
   ├─ Encryption at rest
   └─ LGPD compliance (Sprint 9)
```
    │            │            │
┌───▼──┐  ┌─────▼──┐  ┌────▼──┐
│ DB   │  │ Auth   │  │ Bot   │
│Postgres│ Supabase│  │Telegram│
└──────┘  └────────┘  └───────┘
```

---

## 🛠️ Como Começar (Desenvolvedor)

### 1. Clonar repositório
```bash
git clone https://github.com/sergiomelodesenvolvedor/micro-therapy-social.git
cd micro-therapy-social
```

### 2. Instalar dependências
```bash
# Backend
cd backend
npm install

# Frontend (HTML/CSS/JS puro, sem dependências)
# Apenas abra index.html no navegador ou use Live Server
```

### 3. Configurar variáveis de ambiente
```bash
# .env.local
VITE_API_URL=http://localhost:3001
VITE_SUPABASE_URL=xxx
VITE_SUPABASE_KEY=xxx
VITE_STRIPE_KEY=xxx
```

### 4. Rodar localmente
```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend (abra com Live Server ou simplesmente abra index.html)
cd frontend
# Clique direito em index.html > Open with Live Server
# OU abra diretamente no navegador: file:///C:/path/to/frontend/index.html
```

Acesse: http://localhost:5500 (Live Server) ou file:///...

---

## 📁 Estrutura do Projeto

```
micro-therapy-social/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── posts.js
│   │   │   ├── users.js
│   │   │   └── ranking.js
│   │   ├── middleware/
│   │   ├── db/
│   │   └── bot/
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── index.html
│   ├── pages/
│   │   ├── feed.html
│   │   ├── perfil.html
│   │   └── ranking.html
│   ├── css/
│   │   ├── main.css
│   │   └── components.css
│   └── js/
│       ├── app.js
│       ├── api.js
│       └── utils.js
├── docs/
│   ├── USER_STORIES.md
│   ├── ARCHITECTURE.md
│   └── API.md
├── .gitignore
├── README.md
└── CONTRIBUTING.md
```

---

## 🔐 Variáveis de Ambiente

Criar arquivo `.env.local`:

```env
# Supabase (backend)
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_ANON_KEY=xxxx
SUPABASE_SERVICE_KEY=xxxx

# Stripe
STRIPE_PUBLIC_KEY=pk_test_xxxx
STRIPE_SECRET_KEY=sk_test_xxxx

# OpenAI (Sprint 8+)
OPENAI_API_KEY=sk-xxxx

# Telegram Bot (Sprint 3+)
TELEGRAM_BOT_TOKEN=xxx:xxx
```

**⚠️ NUNCA commit `.env` no Git!**

---

## 📝 Documentação

- [User Stories](./docs/USER_STORIES.md) - O que cada tipo de usuário quer fazer
- [Arquitetura](./docs/ARCHITECTURE.md) - Como o sistema funciona
- [API](./docs/API.md) - Endpoints disponíveis
- [Sprint Tracker](./SPRINT_TRACKER.html) - Progresso do desenvolvimento

---

## 🤝 Contribuindo

1. Fork este repositório
2. Crie uma branch: `git checkout -b feature/sua-feature`
3. Commit: `git commit -am 'Add feature'`
4. Push: `git push origin feature/sua-feature`
5. Abra um Pull Request

Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para detalhes.

---

## 📅 Sprints

| Sprint | Período | Foco | Status |
|--------|---------|------|--------|
| 1 | Dec 8-21 | Setup + User Stories | 🟡 In Progress |
| 2 | Dec 22 - Jan 4 | Backend + Auth | ⏳ Waiting |
| 3 | Jan 5-18 | Bots | ⏳ Waiting |
| 4 | Jan 19 - Feb 1 | Frontend | ⏳ Waiting |
| 5 | Feb 2-15 | Gamificação | ⏳ Waiting |
| 6 | Feb 16-29 | QA + Piloto | ⏳ Waiting |
| 7 | Mar 1-14 | Premium | ⏳ Waiting |
| 8 | Mar 15-28 | IA | ⏳ Waiting |
| 9 | Mar 29 - Apr 11 | Segurança | ⏳ Waiting |
| 10 | Apr 12-25 | Growth | ⏳ Waiting |
| 11 | Apr 26 - May 9 | Performance | ⏳ Waiting |
| 12 | May 10-25 | Lançamento | ⏳ Waiting |

---

## 📊 Métricas (Sprint 6+)

Vamos rastrear:
- **DAU** (Daily Active Users)
- **Retention** (D1, D7, D30)
- **Engagement** (posts/usuário)
- **Premium conversion**
- **NPS** (satisfação)

---

## 📝 Licença

MIT License - Veja [LICENSE](./LICENSE) para detalhes

---

## 📧 Contato

- **Desenvolvedor:** Sergio Melo
- **GitHub:** [@sergiomelodesenvolvedor](https://github.com/sergiomelodesenvolvedor)
- **Email:** seu-email@example.com

---

## 🙏 Agradecimentos

- Inspiração: Duolingo (gamificação), BeReal (comunidade)
- Tech: Supabase, Railway, OpenAI
- Comunidade open source

---

**Versão:** 1.0  
**Última atualização:** 4 Dec 2025  
**Status:** 🚀 Em desenvolvimento
