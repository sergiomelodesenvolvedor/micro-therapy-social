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
- **React** ou **Svelte** (SPA)
- **TailwindCSS** (estilos)
- **Zustand** (estado)

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

```
┌─────────────────────────────────────────┐
│        Frontend (React/Svelte)          │
│  localhost:3000                         │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│      API Backend (Node/FastAPI)         │
│  localhost:3001 / railway.app           │
└────────────────┬────────────────────────┘
                 │
    ┌────────────┼────────────┐
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

# Frontend
cd ../frontend
npm install
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

# Terminal 2: Frontend
cd frontend
npm run dev
```

Acesse: http://localhost:3000

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
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── styles/
│   ├── package.json
│   └── vite.config.js
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
# Supabase
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxxx

# Backend
SUPABASE_SERVICE_KEY=xxxx

# Stripe
VITE_STRIPE_PUBLIC_KEY=pk_test_xxxx
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
