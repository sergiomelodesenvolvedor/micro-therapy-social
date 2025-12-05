# 🚀 Como Testar o Sistema de Autenticação

## Prerequisitos
- Node.js instalado
- Backend e Frontend com dependências instaladas

## Passos para Testar

### 1️⃣ Terminal 1 - Iniciar Backend

```bash
cd backend
npm run dev
```

O backend iniciará em: **http://localhost:3001**

### 2️⃣ Terminal 2 - Iniciar Frontend

```bash
cd frontend
npm start
```

O frontend iniciará em: **http://localhost:3000**

### 3️⃣ Abrir no Navegador

Acesse: **http://localhost:3000**

## 🧪 Fluxo de Teste Completo

### Etapa 1: Solicitar Magic Link
1. Insira seu email (ex: `usuario@example.com`)
2. Clique em "Enviar Link Mágico"
3. **Verifique o console do backend** - o token será exibido lá (integração de email ainda não implementada)

**Console do Backend mostrará:**
```
Magic link enviado para: usuario@example.com
Token: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Etapa 2: Verificar Token
1. Copie o **token** do console do backend
2. Cole o token no campo "Token do Email"
3. Clique em "Verificar & Entrar"

### Etapa 3: Sucesso!
1. ✅ Você estará logado
2. 📦 JWT salvo em `localStorage`
3. 👤 Dados do usuário exibidos
4. 🎉 Será redirecionado para o dashboard

## 📊 Dashboard

No dashboard você pode:
- ✅ Ver seus dados (email, username, ID, data de criação)
- 🧪 Testar o endpoint `GET /api/auth/me`
- 🚪 Fazer logout

## 🔍 Verificar Dados no Browser

Abra o **Console do Navegador** (F12) e execute:

```javascript
// Ver JWT Token
localStorage.getItem('accessToken')

// Ver Dados do Usuário
JSON.parse(localStorage.getItem('user'))
```

## ❌ Se Houver Erros

### Erro: "CORS error"
- Certifique-se de que o backend está rodando em `http://localhost:3001`
- Verifique se a variável `FRONTEND_URL` no `.env` está correta

### Erro: "Token inválido"
- O token pode ter expirado (validade: 10 minutos)
- Solicite um novo magic link

### Erro: "Email não encontrado"
- Um novo usuário será criado automaticamente na primeira autenticação

## 🏗️ Arquivos Principais

```
backend/
├── src/
│   ├── index.js                     # Servidor Express
│   ├── middleware/
│   │   └── auth.js                  # Verificação de JWT
│   ├── services/
│   │   └── authService.js           # Lógica de autenticação
│   ├── routes/
│   │   ├── auth.js                  # Endpoints de auth
│   │   └── AUTH_README.md           # Documentação detalhada
│   └── database/
│       └── migrations/
│           └── 007_create_magic_tokens.sql

frontend/
├── index.html                       # Login page (http://localhost:3000)
├── dashboard.html                   # Dashboard page
└── package.json                     # http-server config
```

## 📝 Próximos Passos

- ✉️ Integrar serviço de email (Sendgrid, Resend, etc)
- 🔄 Implementar refresh token
- 👥 Adicionar rota para criar perfil de usuário
- 📱 Implementar UI para criação de posts/badges

---

**Versão:** 1.0
**Status:** ✅ Pronto para teste
