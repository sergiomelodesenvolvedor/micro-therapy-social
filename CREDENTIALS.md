# 🔐 CREDENCIAIS - MICRO THERAPY SOCIAL

⚠️ **IMPORTANTE**: Este arquivo contém informações sensíveis. **NUNCA** faça commit disso no GitHub!

---

## 📊 SUPABASE

**Data de criação**: 04/12/2025

```
Project URL: https://datkziryodifmerueecb.supabase.co
Publishable Key (anon): sb_publishable_fnGPYPmenhaG8MmOIsGIvQ_mZeIsRYM
Secret Key (service_role): sb_secret_vNiSg98dHdvmtVH8rdqwUg_Anlm0hyK
```

**Como obter:**
1. Acesse: https://supabase.com/dashboard
2. Vá em Settings → API → API Keys
3. Copie as chaves acima

---

## 🚀 RAILWAY (ou Render/Vercel)

**Serviço escolhido**: [ ] Railway [ ] Render [ ] Vercel

**Data de criação**: [PREENCHA]

```
Auth Token:
Project URL:
Deployment URL:
```

**Como obter:**
1. Acesse: https://railway.app (ou o serviço escolhido)
2. Vá em Settings
3. Copie o token

---

## 💳 STRIPE (TEST MODE)

**Data de criação**: [PREENCHA]

```
Publishable Key (test): pk_test_
Secret Key (test): sk_test_
Webhook Secret: whsec_
```

**Como obter:**
1. Acesse: https://stripe.com/dashboard
2. Vá em Developers → API Keys
3. Copie as chaves (em modo TESTE)

⚠️ **NÃO USE AS CHAVES DE PRODUÇÃO AGORA!**

---

## 🔑 JWT (Gerar aleatória)

```
JWT_SECRET: [GERE UMA SENHA ALEATÓRIA E FORTE AQUI]
```

**Como gerar:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## 📝 Environment Variables (.env)

Crie um arquivo `.env` no backend com:

```env
# SUPABASE
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# JWT
JWT_SECRET=

# STRIPE
STRIPE_PUBLIC_KEY=pk_test_
STRIPE_SECRET_KEY=sk_test_

# SERVER
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# DISCORD (opcional)
DISCORD_WEBHOOK_URL=

# SENDGRID (para emails - futuro)
SENDGRID_API_KEY=
```

---

## ✅ Checklist

- [ ] Supabase criado e chaves copiadas
- [ ] Railway/Render criado e token copiado
- [ ] Stripe criado e chaves copiadas (TEST MODE)
- [ ] JWT Secret gerado
- [ ] .env criado no backend
- [ ] .env.local criado no frontend (se necessário)
- [ ] Este arquivo guardado em local seguro (não fazer commit!)

---

## 🚨 SEGURANÇA

**NUNCA FAÇA ISSO:**
- ❌ Commitar este arquivo no GitHub
- ❌ Compartilhar as chaves com ninguém
- ❌ Usar chaves de produção no desenvolvimento
- ❌ Deixar aberto em computadores públicos

**FAÇA ISSO:**
- ✅ Adicionar `.env` ao `.gitignore`
- ✅ Usar chaves de teste enquanto desenvolvendo
- ✅ Guardar em lugar seguro (1Password, Bitwarden, etc)
- ✅ Rotacionar chaves periodicamente

---

## 📞 Próximos Passos

1. Preencha este formulário com suas credenciais
2. Crie o arquivo `.env` no backend
3. Teste a conexão: `npm run dev`
4. Se tudo funcionar, você está pronto para a Sprint 1!

