# 🏗️ Documentação de Arquitetura - Micro Therapy Social

## Índice
1. [Visão Geral](#visão-geral)
2. [Arquitetura High-Level](#arquitetura-high-level)
3. [Componentes](#componentes)
4. [Fluxos de Dados](#fluxos-de-dados)
5. [Banco de Dados](#banco-de-dados)
6. [APIs Externas](#apis-externas)
7. [Segurança](#segurança)
8. [Deploy](#deploy)

---

## Visão Geral

**Micro Therapy Social** é uma aplicação web que conecta usuários ansiosos/deprimidos com um bot que fornece micro-intervenções de apoio psicológico em tempo real.

### Princípios de Design

```
┌─────────────────────────────────────────────────┐
│              PRINCÍPIOS CORE                     │
├─────────────────────────────────────────────────┤
│                                                  │
│  ✅ Simplicidade: Features mínimas, bem feitas  │
│  ✅ Velocidade: Respostas em < 60s              │
│  ✅ Escalabilidade: Começa pequeno, cresce     │
│  ✅ Segurança: Dados sensíveis protegidos       │
│  ✅ Acessibilidade: Funciona no navegador       │
│  ✅ Gamificação: Engajamento contínuo           │
│                                                  │
└─────────────────────────────────────────────────┘
```

---

## Arquitetura High-Level

### Diagrama de Componentes

```
INTERNET (USUÁRIOS)
        │
        ▼
   ┌─────────────────────────────────────────┐
   │     🌐 FRONTEND (Client-Side)           │
   │                                         │
   │  • HTML5 + CSS3 + JavaScript Vanilla    │
   │  • Roda no navegador do usuário         │
   │  • Conecta ao Backend via HTTPS REST    │
   │  • Autenticação com JWT Token           │
   └────────────────┬────────────────────────┘
                    │
              HTTPS API
              (REST + JSON)
                    │
        ┌───────────┼───────────┐
        │           │           │
        ▼           ▼           ▼
   ┌─────────────────────────────────────────┐
   │     🔐 BACKEND (Server-Side)            │
   │                                         │
   │  • Node.js + Express.js                 │
   │  • Roda em Railway (Linux Container)    │
   │  • Porta 3001                           │
   │  • Processa lógica de negócio           │
   └────────────────┬────────────────────────┘
        │           │           │
        ▼           ▼           ▼
   ┌──────────┐ ┌──────────┐ ┌──────────┐
   │Supabase  │ │ Stripe   │ │ OpenAI   │
   │(DB+Auth) │ │(Payments)│ │(IA)      │
   └──────────┘ └──────────┘ └──────────┘

   ┌────────────────────────────────────────┐
   │     🤖 BOT LAYER (Telegram/Discord)    │
   │                                        │
   │  • Webhooks recebem eventos           │
   │  • Envia notificações push            │
   │  • Comunidade simulada                │
   └────────────────────────────────────────┘
```

### Stack Tecnológico

| Camada | Tecnologia | Versão | Propósito |
|--------|-----------|--------|----------|
| **Frontend** | HTML5 + CSS3 + JS Vanilla | ES6+ | UI no navegador |
| **Backend** | Node.js + Express | 18+ | API REST |
| **Banco** | Supabase (PostgreSQL) | 15+ | Dados persistentes |
| **Auth** | JWT + Magic Link | - | Autenticação simples |
| **IA** | OpenAI API | GPT-3.5/4 | Respostas automáticas (Sprint 8) |
| **Pagamentos** | Stripe | API v1 | Assinaturas premium |
| **Bot** | Telegram/Discord | API Bot | Notificações (Sprint 3) |
| **Deploy** | Railway | - | Hospedagem Backend |
| **CDN** | Vercel (futuro) | - | Frontend estático |

---

## Componentes

### 1. Frontend (Port 3000)

**Localização:** `/frontend`

```
frontend/
├── index.html           # SPA principal
├── css/
│   └── style.css       # Estilos gerais
└── js/
    ├── app.js          # Inicialização + setup
    ├── api.js          # Chamadas HTTP (fetch)
    ├── auth.js         # Autenticação
    ├── ui.js           # Manipulação DOM
    └── utils.js        # Funções auxiliares
```

**Responsabilidades:**
- Renderizar interface (feed, perfil, ranking)
- Capturar interações do usuário
- Enviar dados ao backend
- Exibir respostas em tempo real
- Gerenciar JWT token localmente

**Endpoints Consumidos:**
```
GET  /api/health                # Verificar servidor
POST /api/auth/magic-link       # Solicitar link de login
POST /api/posts                 # Criar post
GET  /api/posts                 # Listar posts
GET  /api/posts/:id             # Detalhe do post
GET  /api/users/:id             # Perfil do usuário
GET  /api/rankings              # Leaderboard
```

---

### 2. Backend (Port 3001)

**Localização:** `/backend`

```
backend/
├── src/
│   ├── index.js              # Servidor Express
│   ├── routes/
│   │   ├── health.js         # Status checks
│   │   ├── auth.js           # Autenticação
│   │   ├── posts.js          # Posts CRUD
│   │   ├── users.js          # Usuários
│   │   └── rankings.js       # Leaderboards
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── postController.js
│   │   ├── userController.js
│   │   └── pointController.js
│   ├── services/
│   │   ├── supabase.js       # DB connection
│   │   ├── openai.js         # IA (Sprint 8)
│   │   ├── stripe.js         # Pagamentos (Sprint 7)
│   │   ├── telegram.js       # Bot (Sprint 3)
│   │   └── email.js          # Emails (futuro)
│   └── middleware/
│       ├── auth.js           # JWT validation
│       └── errorHandler.js   # Tratamento de erros
├── package.json
├── .env                       # Variáveis de ambiente
└── .env.example              # Exemplo de .env
```

**Stack:**
- Express.js (servidor HTTP)
- Dotenv (variáveis de ambiente)
- CORS (Cross-Origin)
- Helmet (segurança)
- Morgan (logs)

**Responsabilidades:**
- Validar autenticação (JWT)
- Processar requisições HTTP
- Executar lógica de negócio
- Comunicar com banco de dados
- Chamar APIs externas
- Retornar JSON

---

### 3. Banco de Dados (Supabase)

**Localização:** https://supabase.com

```sql
-- TABELA: users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT auth.uid(),
  email VARCHAR UNIQUE NOT NULL,
  username VARCHAR UNIQUE NOT NULL,
  avatar_url VARCHAR,
  points INT DEFAULT 0,
  premium BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- TABELA: posts
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  content TEXT NOT NULL,
  bot_response TEXT,
  likes INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- TABELA: badges
CREATE TABLE badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  name VARCHAR NOT NULL,
  description TEXT,
  icon_url VARCHAR,
  unlocked_at TIMESTAMP DEFAULT NOW()
);

-- TABELA: comments
CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES posts(id),
  user_id UUID NOT NULL REFERENCES users(id),
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- TABELA: payments
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  stripe_id VARCHAR UNIQUE,
  status VARCHAR,
  amount INT,
  currency VARCHAR,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Fluxos de Dados

### Fluxo 1: Usuário Cria Post

```
1. FRONTEND
   └─ Usuário digita post + clica "Compartilhar"
   └─ JS captura evento
   └─ Validação local (campo vazio?)
   └─ Envia POST /api/posts com JWT

2. BACKEND
   └─ Recebe request
   └─ Extrai JWT do header Authorization
   └─ Valida JWT
   └─ Identifica user_id
   └─ Validação de inputs
   └─ Calcula pontos (+10)
   └─ Salva post no Supabase
   └─ Atualiza pontos do usuário
   └─ Valida badges
   └─ Prepara resposta JSON
   └─ Retorna status 201 + post_id

3. BOT LAYER
   └─ Backend chama OpenAI (ou template simples)
   └─ Recebe resposta
   └─ Salva no campo post.bot_response
   └─ Envia notificação via Telegram/Discord

4. FRONTEND
   └─ Recebe resposta JSON
   └─ Atualiza UI (feed)
   └─ Mostra post + resposta
   └─ Mostra pontos aumentados
   └─ Verifica badges novas
```

### Fluxo 2: Usuário Faz Login

```
1. FRONTEND
   └─ Usuário digita email
   └─ Clica "Enviar Link"
   └─ Envia POST /api/auth/magic-link

2. BACKEND
   └─ Recebe email
   └─ Valida formato
   └─ Gera token JWT único
   └─ Envia email com link + token (ou via bot)
   └─ Retorna { success: true }

3. EMAIL (ou TELEGRAM BOT)
   └─ Usuário recebe link
   └─ Clica no link
   └─ URL: /?token=jwt_token

4. FRONTEND
   └─ Lê token da URL
   └─ Salva no localStorage
   └─ Redireciona para feed
   └─ Headers futuros incluem: Authorization: Bearer {token}
```

### Fluxo 3: Backend Valida JWT

```
TODOS OS ENDPOINTS PROTEGIDOS

GET /api/posts
  ↓
Backend recebe:
  Header: Authorization: Bearer eyJhbGc...

  ↓
Backend faz:
  1. Extrai token do header
  2. Decodifica JWT
  3. Verifica assinatura
  4. Verifica expiração
  5. Extrai user_id
  ↓
Se válido → Processa request
Se inválido → Retorna 401 Unauthorized
```

---

## Banco de Dados

### Entidades e Relacionamentos

```
USERS (1)──────→(N) POSTS
  │                   │
  │                   └──→(N) COMMENTS
  │
  ├──────→(N) BADGES
  │
  ├──────→(N) REACTIONS (futuro)
  │
  └──────→(N) PAYMENTS
```

### Tabela de Pontos

| Ação | Pontos | Trigger |
|------|--------|---------|
| Criar post | +10 | POST criado |
| Receber resposta do bot | +5 | Bot respondeu |
| Reação (like/apoio) | +1 | Usuário clica like |
| Reação positiva | +2 | Apoio/suporte |
| Login diário | +1 | Acessa app (1x/dia) |
| Streak 7 dias | +50 | 7 dias seguidos |
| Streak 30 dias | +200 | 30 dias seguidos |

### Badges (Sistema de Gamificação)

| Badge | Condição de Desbloqueio | Ícone |
|-------|------------------------|-------|
| 🎯 Primeira Voz | 1º post | 🎯 |
| 💬 Apoiado | Recebe 1ª resposta | 💬 |
| ⭐ Inspiração | 50+ likes em um post | ⭐ |
| 🔥 Uma Semana | 7 dias de streak | 🔥 |
| 🌟 Um Mês | 30 dias de streak | 🌟 |
| 👑 Top 3 | Entra no top 3 ranking | 👑 |
| 💎 Premium | Assina plano premium | 💎 |

---

## APIs Externas

### 1. Supabase

```javascript
// Conectar ao banco
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// Exemplos
await supabase.from('users').select()
await supabase.from('posts').insert({ user_id, content })
await supabase.from('users').update({ points: 20 }).eq('id', user_id)
```

**Features:**
- PostgreSQL gerenciado
- Auth integrada
- Realtime subscriptions
- Backups automáticos

---

### 2. OpenAI API (Sprint 8)

```javascript
// Gerar resposta automática
const response = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [
    { role: "system", content: "Você é um terapeuta compassivo..." },
    { role: "user", content: postContent }
  ]
})
```

**Custos:**
- GPT-3.5: ~$0.002 por 1k tokens
- Premium cover: $30/mês → $1,000 crédito/mês

---

### 3. Stripe (Sprint 7)

```javascript
// Criar assinatura
const subscription = await stripe.subscriptions.create({
  customer: customerId,
  items: [{ price: 'price_monthly' }]
})
```

**Planos:**
- Grátis: Features básicas
- Premium: $30/mês → IA avançada, relatórios

---

### 4. Telegram Bot (Sprint 3)

```javascript
// Enviar mensagem via bot
await telegram.sendMessage({
  chat_id: userId,
  text: "Você recebeu uma resposta! 🎉"
})
```

**Features:**
- Notificações em tempo real
- Comunidade simulada
- Lembretes motivacionais

---

## Segurança

### 1. Autenticação

```
┌─ Magic Link (Sem senha)
│  └─ Email → Link com token → JWT armazenado
│
└─ JWT Token
   ├─ Armazenado no localStorage
   ├─ Enviado em Authorization header
   ├─ Validado em cada requisição
   └─ Expira em 7 dias (renovável)
```

### 2. Headers de Segurança (Helmet.js)

```javascript
// Backend envia automaticamente
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### 3. CORS (Cross-Origin)

```javascript
// Backend permite apenas frontend
cors({
  origin: 'https://seudominio.com',
  credentials: true
})
```

### 4. Rate Limiting (futuro)

```javascript
// Limitar requisições por IP
100 requisições / 15 minutos
```

### 5. Validação de Inputs

```javascript
// Backend valida TUDO
POST /api/posts
├─ Validar que user existe
├─ Validar que content não é vazio
├─ Validar que content < 5000 caracteres
├─ Sanitizar HTML (previne XSS)
└─ Retornar erro 400 se inválido
```

---

## Deploy

### Frontend

```
Opção 1: Vercel (recomendado)
├─ Deploy automático via GitHub
├─ URL: therapysocial.vercel.app
├─ HTTPS grátis
└─ Próximo ao usuário (CDN)

Opção 2: Firebase Hosting
├─ Deploy via CLI
├─ HTTPS grátis
└─ Integrado com Google
```

### Backend

```
Railway.app (Atual)
├─ Conecta ao GitHub
├─ Deploy automático em push
├─ URL: micro-therapy-social-production.up.railway.app
├─ Suporta Node.js
├─ $5/mês grátis (suficiente para começar)
└─ Escala conforme necessário
```

### Variáveis de Ambiente

```
.env (NUNCA fazer commit)
├─ SUPABASE_URL
├─ SUPABASE_ANON_KEY
├─ SUPABASE_SERVICE_ROLE_KEY
├─ STRIPE_PUBLIC_KEY (test)
├─ STRIPE_SECRET_KEY (test)
├─ OPENAI_API_KEY (Sprint 8)
├─ JWT_SECRET
├─ TELEGRAM_BOT_TOKEN
└─ FRONTEND_URL
```

---

## Próximos Passos

### Sprint 2
- [ ] Autenticação magic link
- [ ] CRUD de posts
- [ ] Cálculo de pontos

### Sprint 3
- [ ] Bot Telegram
- [ ] Respostas automáticas (template)

### Sprint 4
- [ ] Frontend dinâmico (feed, perfil, ranking)

### Sprint 7-8
- [ ] Stripe integração
- [ ] OpenAI para respostas reais

### Sprint 9+
- [ ] Segurança LGPD
- [ ] Otimizações

---

**Última atualização:** 04/12/2025
