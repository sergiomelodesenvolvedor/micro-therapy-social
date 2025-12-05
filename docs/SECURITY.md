# 🔒 Guia de Segurança - Micro Therapy Social

**Última atualização:** 04/12/2025  
**Status:** ⚠️ PRÉ-PRODUÇÃO

---

## ⚠️ SEGREDOS E CREDENCIAIS

### O que NÃO deve estar no Git

❌ Nunca fazer commit:
- `.env` com valores reais
- `CREDENTIALS.md` (ou qualquer arquivo com API keys)
- Chaves privadas (`.key`, `.pem`)
- Tokens JWT
- Senhas

✅ Usar em vez disso:
- `.env.example` com valores placeholder
- GitHub Secrets (para CI/CD)
- `.gitignore` para excluir arquivos sensíveis

### Variáveis de Ambiente Necessárias

**Backend (`backend/.env`):**
```
NODE_ENV=development
SUPABASE_URL=https://datkzjryodifmeruuecb.supabase.co
SUPABASE_KEY=seu_key_publicável_aqui
SUPABASE_SERVICE_ROLE_KEY=sua_chave_privada_aqui
JWT_SECRET=sua_senha_jwt_super_secreta_aqui
```

**Produção:**
- Use GitHub Secrets para CI/CD
- Use variáveis de ambiente do Railway/Vercel

---

## 🔐 Proteção de Dados

### Autenticação
- [x] JWT tokens com expiração
- [x] Magic link (sem senha)
- [ ] 2FA (futura Sprint 9+)
- [ ] Rate limiting (futura)

### Banco de Dados
- [x] Supabase com autenticação
- [ ] Row-level security (RLS) - Sprint 6
- [ ] Backups automáticos - Supabase handles
- [ ] Criptografia em repouso - Supabase

### API
- [x] CORS configurado
- [x] Helmet.js (headers de segurança)
- [ ] Rate limiting - Sprint 2
- [ ] Input validation - Sprint 2
- [ ] SQL injection prevention - Supabase queries

### Frontend
- [ ] HTTPS only - Production
- [ ] CSP headers - Sprint 6
- [ ] XSS protection - Sanitize inputs
- [ ] CSRF tokens - Sprint 2+

---

## 🛡️ Checklist de Segurança

### Desenvolvimento
- [x] `.gitignore` configurado
- [x] `.env.example` criado
- [ ] Secrets rotation policy
- [ ] Code review checklist (Sprint 2)

### CI/CD
- [ ] GitHub branch protection
- [ ] Require pull request reviews
- [ ] Require status checks
- [ ] Signing commits (recomendado)

### Produção
- [ ] HTTPS/SSL certificado
- [ ] Rate limiting ativo
- [ ] Monitoring/Alerting
- [ ] Audit logs
- [ ] Backups tested
- [ ] Disaster recovery plan

---

## 🔄 Rotação de Chaves

### Se comprometer uma chave (FAZER IMEDIATAMENTE):

1. **Supabase API Key:**
   ```
   - Supabase Dashboard → Settings → API Keys
   - Regenerar a chave comprometida
   - Atualizar .env em todos os ambientes
   ```

2. **JWT Secret:**
   ```
   - Gerar nova chave (openssl rand -hex 32)
   - Atualizar variável de ambiente
   - Todos os tokens antigos ficarão inválidos
   - Usuários precisarão fazer login novamente
   ```

3. **GitHub Secrets:**
   ```
   - Ir para Settings → Secrets and variables
   - Deletar secret comprometido
   - Criar novo com valor rotacionado
   ```

---

## 🚨 Incident Response

Se notar atividade suspeita:

1. **Acesso não autorizado:**
   - [ ] Verificar logs do Supabase
   - [ ] Verificar logs do GitHub Actions
   - [ ] Verificar IPs suspeitos
   - [ ] Limpar sessões ativas

2. **Exposição de dados:**
   - [ ] Notificar usuários afetados
   - [ ] Rotacionar credenciais
   - [ ] Registrar incident no README
   - [ ] Implementar correção

3. **Ataque DDoS:**
   - [ ] Ativar rate limiting
   - [ ] Contactar suporte do host (Railway)
   - [ ] Aumentar recursos se necessário

---

## 📋 Conformidade

### LGPD (Lei Geral de Proteção de Dados)
- [ ] Política de privacidade (Sprint 9)
- [ ] Consentimento explícito para dados
- [ ] Direito ao esquecimento implementado
- [ ] Data controller documentado

### GDPR (Se usuários da EU)
- [ ] Política de privacidade
- [ ] Consentimento (opt-in)
- [ ] Direito de acesso aos dados
- [ ] Direito ao esquecimento

---

## 🔍 Monitoramento

### Logs a registrar:
- Login attempts (sucesso/falha)
- API requests (com user_id)
- Database changes (auditar)
- Errors e exceptions
- Rate limit violations

### Alertas para monitorar:
- Múltiplas tentativas de login falhadas
- Acesso a múltiplos endpoints em curto tempo
- Modificações em usuários premium
- Database connection failures

---

## 📚 Referências de Segurança

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8725)
- [Supabase Security](https://supabase.com/docs/guides/auth)

---

## ✅ Próximos Passos

### Sprint 2:
- [ ] Implementar input validation
- [ ] Adicionar rate limiting
- [ ] Setup monitoring
- [ ] Documentar audit logs

### Sprint 6:
- [ ] Row-level security (RLS)
- [ ] CSP headers
- [ ] Rate limiting avançado

### Sprint 9:
- [ ] Compliance (LGPD/GDPR)
- [ ] Política de privacidade
- [ ] Terms of service

---

**Documento revisado:** 04/12/2025  
**Próxima revisão:** Sprint 2 (04/01/2026)  
**Mantenedor:** @sergiomelodesenvolvedor
