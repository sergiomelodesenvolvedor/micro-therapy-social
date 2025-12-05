# 🗄️ Como Executar as Migrations no Supabase

## ⚠️ Sua tabela `magic_tokens` NÃO existe ainda!

Para que o sistema de autenticação funcione, você precisa criar a tabela executando o SQL migration.

## Opção 1: Via Supabase Dashboard (RECOMENDADO) ✅

1. Acesse seu projeto Supabase: https://app.supabase.com
2. Vá para **SQL Editor** no menu esquerdo
3. Clique em **New query**
4. Cole o SQL abaixo:

```sql
-- ============================================
-- TABELA: magic_tokens
-- Descrição: Tokens de magic link para autenticação
-- ============================================

CREATE TABLE IF NOT EXISTS magic_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL,
  token VARCHAR(255) UNIQUE NOT NULL,
  used BOOLEAN DEFAULT false,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  data_criacao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ativo BOOLEAN DEFAULT true
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_magic_tokens_token ON magic_tokens(token);
CREATE INDEX IF NOT EXISTS idx_magic_tokens_email ON magic_tokens(email);
CREATE INDEX IF NOT EXISTS idx_magic_tokens_expires_at ON magic_tokens(expires_at DESC);
CREATE INDEX IF NOT EXISTS idx_magic_tokens_used ON magic_tokens(used);

-- Comentários
COMMENT ON TABLE magic_tokens IS 'Tokens de magic link para autenticação sem senha';
COMMENT ON COLUMN magic_tokens.token IS 'Token único gerado randomicamente';
COMMENT ON COLUMN magic_tokens.used IS 'Se o token já foi utilizado';
COMMENT ON COLUMN magic_tokens.expires_at IS 'Quando o token expira (10 minutos)';
```

5. Clique em **RUN** ou aperte `Ctrl+Enter`
6. ✅ Pronto! Tabela criada.

## Opção 2: Via Terminal (PowerShell)

```powershell
# Copie e cole o SQL acima diretamente no Supabase Dashboard
# Não há forma fácil de executar via CLI sem credenciais de admin
```

## Verificar se Funcionou

Após executar, volte à página de login e teste novamente. Você deve ver:

```
✅ Magic link solicitado para: seu@email.com
🔗 Token: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 🚨 Se Ainda Tiver Erro

1. Verifique se você está usando o projeto Supabase CORRETO
2. Confirme que `SUPABASE_URL` e `SUPABASE_KEY` no `.env` estão corretos
3. Teste a conexão: `npm run db:test` (na pasta backend)

---

**Status Atual:**
- ❌ Tabela `magic_tokens` não existe
- ✅ Código de autenticação pronto
- ⏳ Aguardando migration ser executada
