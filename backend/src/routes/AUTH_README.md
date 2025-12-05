# 🔐 Autenticação - Magic Link + JWT

## 📋 Visão Geral

Sistema de autenticação **sem senha** usando magic links (como Slack, Notion, Medium).

**Fluxo:**
1. Usuário digita email
2. Recebe link por email (válido por 10 min)
3. Clica no link → JWT criado (válido por 7 dias)
4. Mantém logado por 7 dias
5. Após expirar: novo magic link

## 🚀 Endpoints

### 1. Enviar Magic Link
```bash
POST /api/auth/magic-link
Content-Type: application/json

{
  "email": "usuario@example.com"
}
```

**Resposta:**
```json
{
  "success": true,
  "message": "Link enviado para o email"
}
```

### 2. Validar Magic Link & Obter JWT
```bash
POST /api/auth/verify
Content-Type: application/json

{
  "token": "abc123xyz..."
}
```

**Resposta:**
```json
{
  "success": true,
  "accessToken": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "uuid-123",
    "email": "usuario@example.com",
    "username": "usuario"
  }
}
```

### 3. Dados do Usuário Autenticado
```bash
GET /api/auth/me
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

**Resposta:**
```json
{
  "user": {
    "sub": "uuid-123",
    "email": "usuario@example.com",
    "username": "usuario"
  }
}
```

### 4. Logout
```bash
POST /api/auth/logout
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

**Resposta:**
```json
{
  "success": true,
  "message": "Logout realizado"
}
```

## 🔒 Segurança

✅ **Magic link expira em 10 minutos**
✅ **Pode ser usado apenas 1 vez**
✅ **JWT expira em 7 dias**
✅ **Sem senha = sem vazamento de senha**
✅ **Token único por email**
✅ **Rate limit recomendado: 3 emails/hora por usuário**

## 📧 Email (Futuro)

Atualmente, o magic link é logado no console. Para enviar por email:

1. **SendGrid (gratuito):**
   ```bash
   npm install @sendgrid/mail
   ```

2. **Nodemailer (alternativa):**
   ```bash
   npm install nodemailer
   ```

3. Atualizar `authService.js`:
   ```javascript
   // Após gerar token...
   await sendGridMail.send({
     to: email,
     from: process.env.SENDGRID_EMAIL,
     subject: 'Seu link de acesso - Micro Therapy',
     html: `<a href="${magicLink}">Clique aqui para entrar</a>`
   });
   ```

## 🗄️ Banco de Dados

### Tabela: magic_tokens
- `id` (UUID): ID único
- `email` (VARCHAR): Email do usuário
- `token` (VARCHAR): Token único
- `used` (BOOLEAN): Se foi usado
- `expires_at` (TIMESTAMP): Expiração (10 min)
- `data_criacao` (TIMESTAMP): Criação

**Índices:**
- `token` (para busca rápida)
- `email` (para listar tokens por email)
- `expires_at` (para limpeza periódica)

## 🧪 Teste Rápido

```bash
# 1. Solicitar magic link
curl -X POST http://localhost:3001/api/auth/magic-link \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# 2. Pegar token do console
# 🔗 Magic link enviado para test@example.com: http://localhost:3000/auth/magic?token=abc123...

# 3. Validar token
curl -X POST http://localhost:3001/api/auth/verify \
  -H "Content-Type: application/json" \
  -d '{"token":"abc123..."}'

# 4. Usar JWT
curl -X GET http://localhost:3001/api/auth/me \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."
```

## 📋 TODO Próximas Etapas

- [ ] Integrar SendGrid/Email real
- [ ] Rate limiting (3 emails/hora)
- [ ] Cleanup de tokens expirados (job periódico)
- [ ] 2FA opcional (TOTP)
- [ ] Remember me (refresh token)
- [ ] Audit logs de login/logout
