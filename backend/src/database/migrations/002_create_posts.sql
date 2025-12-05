-- ============================================
-- TABELA: posts
-- Descrição: Posts dos usuários (diário/reflexões)
-- ============================================

CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL CHECK (char_length(content) > 0),
  bot_response TEXT,
  likes INT DEFAULT 0 CHECK (likes >= 0),
  is_anonymous BOOLEAN DEFAULT false,
  data_criacao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  data_atualizacao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ativo BOOLEAN DEFAULT true
);

-- Atualiza automaticamente data_atualizacao em updates
CREATE OR REPLACE FUNCTION set_data_atualizacao_posts()
RETURNS TRIGGER AS $$
BEGIN
  NEW.data_atualizacao = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_posts_data_atualizacao ON posts;
CREATE TRIGGER trg_posts_data_atualizacao
BEFORE UPDATE ON posts
FOR EACH ROW
EXECUTE FUNCTION set_data_atualizacao_posts();

-- Índices
CREATE INDEX IF NOT EXISTS idx_posts_user_id ON posts(user_id);
CREATE INDEX IF NOT EXISTS idx_posts_data_criacao ON posts(data_criacao DESC);
CREATE INDEX IF NOT EXISTS idx_posts_likes ON posts(likes DESC);
CREATE INDEX IF NOT EXISTS idx_posts_ativo ON posts(ativo);

-- Comentários
COMMENT ON TABLE posts IS 'Posts/reflexões dos usuários';
COMMENT ON COLUMN posts.bot_response IS 'Resposta automática do bot';
COMMENT ON COLUMN posts.likes IS 'Número de reações positivas';
COMMENT ON COLUMN posts.is_anonymous IS 'Se o post foi criado anonimamente';
COMMENT ON COLUMN posts.ativo IS 'Soft delete: true = ativo, false = removido logicamente';
