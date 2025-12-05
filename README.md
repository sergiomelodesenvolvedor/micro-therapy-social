# Micro Therapy Social

🧠 **Plataforma gamificada de micro-intervenções para saúde mental**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2018.0.0-brightgreen)](https://nodejs.org)
[![Status](https://img.shields.io/badge/Status-Alpha%20v0.1.0-blue)](CHANGELOG.md)
[![Sprint](https://img.shields.io/badge/Sprint-1%2F12%20✅-success)](plano_detalhado_micro_therapy_social%20\(1\).md)

Uma rede social que ajuda pessoas com ansiedade e depressão através de:
- ✍️ Posts de desabafos
- 🤖 Respostas automáticas com dicas
- 🏆 Gamificação (pontos, badges, ranking)
- 💎 Plano premium com IA avançada

---

## 🎯 Visão Geral Rápida

| Aspecto | Detalhes |
|--------|----------|
| **O quê?** | App web para suporte mental com gamificação |
| **Por quê?** | Terapia cara/demora. App: rápido (<60s), acessível, comunitário |
| **Para quem?** | Pessoas com ansiedade, depressão, isolamento emocional |
| **MVP quando?** | 25 de maio de 2026 (Sprint 12) |
| **Modelo de negócio** | Freemium + Stripe Premium |

---

## 📊 Progresso Atual

**Sprint 1 - CONCLUÍDO ✅**

```
[████████████████████] 100% Complete

✅ Backend setup (Express + Supabase)
✅ Database schema (6 tabelas)
✅ CI/CD (ESLint + Prettier + Husky)
✅ Landing page (HTML/CSS responsivo)
✅ Formulário de cadastro (validações)
✅ Documentação completa
```

**Próximo:** Sprint 2 - Autenticação & Backend API (22 Dec 2025)

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+ ou 20+
- npm ou yarn
- Conta Supabase (gratuita)
- Git

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/sergiomelodesenvolvedor/micro-therapy-social.git
   cd micro-therapy-social
   ```

2. **Instale dependências:**
   ```bash
   # Backend
   cd backend && npm install && cd ..
   
   # Frontend (if needed)
   cd frontend && npm install && cd ..
   ```

3. **Configure variáveis de ambiente:**
   ```bash
   # Copiar exemplo
   cp backend/.env.example backend/.env
   
   # Editar com suas credenciais Supabase
   nano backend/.env
   ```

4. **Execute testes:**
   ```bash
   cd backend
   npm run db:test    # Testa conexão
   npm run db:seed    # Popula dados de teste
   npm run lint       # Verifica código
   ```

5. **Inicie o desenvolvimento:**
   ```bash
   # Terminal 1: Backend
   cd backend && npm run dev
   
   # Terminal 2: Frontend
   cd frontend && node server.js
   ```

6. **Acesse:**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:3001/api/health

---

## 📁 Estrutura do Projeto

```
therapy/
├── 🎯 marketing/               # Landing Page (Divulgação)
│   ├── landing/
│   │   └── index.html         # Site para atrair usuários
│   └── server.js              # Dev server (porta 3000)
│
├── 🧠 app/                     # App Real (Frontend)
│   └── src/
│       ├── login.html         # Página de login (magic link)
│       ├── dashboard.html     # Dashboard principal
│       └── styles/            # CSS compartilhado (TODO)
│
├── ⚙️  backend/                 # API Express.js
│   ├── src/
│   │   ├── index.js           # Servidor principal
│   │   ├── routes/            # Endpoints HTTP
│   │   ├── controllers/       # Lógica de negócio
│   │   ├── services/          # Integrações (Supabase, IA, etc)
│   │   ├── middleware/        # Auth, validação
│   │   └── database/
│   │       ├── migrations/    # SQL migrations (6 tabelas)
│   │       ├── seed.js        # Dados de teste
│   │       └── supabase.js    # Cliente DB
│   ├── .env.example           # Variáveis de exemplo
│   └── package.json           # Dependências
│
├── frontend/                   # UI Landing page
│   ├── index.html             # Landing page
│   ├── server.js              # Dev server
│   ├── css/                   # Estilos
│   ├── js/                    # Scripts
│   └── assets/                # Imagens
│
├── .github/
│   └── workflows/             # GitHub Actions (CI/CD)
│
├── ARCHITECTURE.md            # Design do sistema
├── CHANGELOG.md               # Histórico de mudanças
├── SECURITY.md                # Guia de segurança
├── user_stories.md            # Requisitos funcionais
└── plano_detalhado_*.md       # Plano 12 sprints

---

## 🛠️ Tech Stack

| Componente | Tecnologia | Versão | Propósito |
|-----------|-----------|--------|----------|
| **Backend** | Node.js + Express | 18+, 20+ | API REST |
| **Database** | PostgreSQL (Supabase) | 15+ | Dados persistentes |
| **Frontend** | HTML5 + CSS3 + JS Vanilla | ES6+ | UI landing page |
| **Auth** | JWT + Magic Link | - | Autenticação |
| **IA** (futuro) | OpenAI API | GPT-3.5/4 | Respostas automáticas |
| **Pagamentos** (futuro) | Stripe | - | Plano premium |
| **Bot** (futuro) | Telegram/Discord API | - | Notificações |
| **Linting** | ESLint 8 + Prettier | - | Qualidade código |
| **CI/CD** | GitHub Actions | - | Automação |
| **Deploy** | Railway (backend) | - | Hospedagem |

---

## 📚 Documentação

### Essencial
- 📘 [ARCHITECTURE.md](ARCHITECTURE.md) - Design completo do sistema
- 📋 [CHANGELOG.md](CHANGELOG.md) - Histórico de mudanças
- 🔒 [SECURITY.md](SECURITY.md) - Guia de segurança
- 📅 [Plano 12 Sprints](plano_detalhado_micro_therapy_social%20\(1\).md) - Timeline completa

### Desenvolvimento
- 🎯 [User Stories](user_stories.md) - Requisitos funcionais
- 🤝 [CONTRIBUTING.md](CONTRIBUTING.md) - Como contribuir
- 🐳 [GitHub Setup](GITHUB_SETUP.md) - Setup inicial GitHub

---

## ✨ Features (Por Sprint)

### Sprint 1 ✅ Completo
- [x] Prototipagem (Notion + Discord)
- [x] Repositório Git + CI/CD
- [x] Landing page estática
- [x] Formulário HTML com validações
- [x] Database schema (6 tabelas)
- [x] Seed data para testes

### Sprint 2 🚀 Próximo
- [ ] Autenticação (Magic Link)
- [ ] Endpoints CRUD de posts
- [ ] Sistema de pontos
- [ ] Swagger/OpenAPI docs
- [ ] Testes unitários

### Sprint 3-4
- [ ] Bot Telegram/Discord
- [ ] Frontend dinâmico (feed, perfil, ranking)
- [ ] Real-time updates

### Sprint 5-8
- [ ] Stripe integration (pagamentos)
- [ ] OpenAI (respostas inteligentes)
- [ ] Badges e gamificação avançada
- [ ] Analytics

### Sprint 9-12
- [ ] LGPD/GDPR compliance
- [ ] Otimizações de performance
- [ ] Public beta launch
- [ ] Marketing e crescimento

---

## 🔐 Segurança

**Atenção:** Antes de usar em produção:

- ✅ Configure HTTPS/SSL
- ✅ Ative rate limiting
- ✅ Implemente validação de inputs
- ✅ Use variáveis de ambiente para secrets
- ✅ Configure row-level security no Supabase
- ✅ Implemente audit logs
- ✅ Faça backups regulares

Ver [SECURITY.md](SECURITY.md) para mais detalhes.

---

## 💡 Contribuindo

Quer ajudar? Veja [CONTRIBUTING.md](CONTRIBUTING.md).

### Padrões de código
- ESLint + Prettier (automático com pre-commit)
- Commits semânticos (`feat:`, `fix:`, `docs:`, etc)
- PRs requerem review
- Testes para novos features

---

## 📞 Contato & Suporte

- 👤 **Desenvolvedor:** [@sergiomelodesenvolvedor](https://github.com/sergiomelodesenvolvedor)
- 📧 **Email:** [seu-email@example.com]
- 🐙 **GitHub Issues:** [Reportar bug ou sugerir feature](../../issues)
- 💬 **Comunidade:** [Discord Server] (futuro)

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja [LICENSE](LICENSE) para detalhes.

---

## 🙏 Agradecimentos

- Inspiração: apps como Replika, Woebot, Youper
- Tech: Supabase, OpenAI, Stripe
- Comunidade: Open source maintainers

---

## 📊 Status do Projeto

```
Sprint 1  [████████████████] 100% ✅ Complete (04 Dec 2025)
Sprint 2  [              ] 0%   🚀 Up Next (22 Dec 2025)
Sprint 3  [              ] 0%
Sprint 4  [              ] 0%
...
Sprint 12 [              ] 0%   Target: 25 May 2026
```

---

**Versão Atual:** 0.1.0-alpha  
**Última Atualização:** 04 December 2025  
**Mantenedor:** @sergiomelodesenvolvedor

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
