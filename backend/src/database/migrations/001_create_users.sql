-- ============================================
-- TABELA: users
-- Descrição: Armazena informações dos usuários
-- ============================================

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  avatar_url VARCHAR(500),
  points INT DEFAULT 0 CHECK (points >= 0),
  premium BOOLEAN DEFAULT false,
  streak_days INT DEFAULT 0,
  last_login TIMESTAMP,
  data_criacao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  data_atualizacao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ativo BOOLEAN DEFAULT true
);

-- Atualiza automaticamente data_atualizacao em updates
CREATE OR REPLACE FUNCTION set_data_atualizacao_users()
RETURNS TRIGGER AS $$
BEGIN
  NEW.data_atualizacao = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_users_data_atualizacao ON users;
CREATE TRIGGER trg_users_data_atualizacao
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION set_data_atualizacao_users();

-- Índices para otimização
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
CREATE INDEX IF NOT EXISTS idx_users_points ON users(points DESC);
CREATE INDEX IF NOT EXISTS idx_users_premium ON users(premium);
CREATE INDEX IF NOT EXISTS idx_users_ativo ON users(ativo);

-- Comentários
COMMENT ON TABLE users IS 'Tabela principal de usuários da plataforma';
COMMENT ON COLUMN users.points IS 'Pontos acumulados pela gamificação';
COMMENT ON COLUMN users.premium IS 'Indica se usuário é assinante premium';
COMMENT ON COLUMN users.streak_days IS 'Dias consecutivos de login';
COMMENT ON COLUMN users.ativo IS 'Soft delete: true = ativo, false = removido logicamente';
