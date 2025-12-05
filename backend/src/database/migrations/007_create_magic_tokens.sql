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
