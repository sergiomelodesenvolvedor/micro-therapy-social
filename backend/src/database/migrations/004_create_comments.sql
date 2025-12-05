-- ============================================
-- TABELA: comments
-- Descrição: Comentários em posts
-- ============================================

CREATE TABLE IF NOT EXISTS comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL CHECK (char_length(content) > 0),
  is_bot BOOLEAN DEFAULT false,
  data_criacao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  data_atualizacao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ativo BOOLEAN DEFAULT true
);

-- Atualiza automaticamente data_atualizacao em updates
CREATE OR REPLACE FUNCTION set_data_atualizacao_comments()
RETURNS TRIGGER AS $$
BEGIN
  NEW.data_atualizacao = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_comments_data_atualizacao ON comments;
CREATE TRIGGER trg_comments_data_atualizacao
BEFORE UPDATE ON comments
FOR EACH ROW
EXECUTE FUNCTION set_data_atualizacao_comments();

-- Índices
CREATE INDEX IF NOT EXISTS idx_comments_post_id ON comments(post_id);
CREATE INDEX IF NOT EXISTS idx_comments_user_id ON comments(user_id);
CREATE INDEX IF NOT EXISTS idx_comments_data_criacao ON comments(data_criacao DESC);
CREATE INDEX IF NOT EXISTS idx_comments_is_bot ON comments(is_bot);
CREATE INDEX IF NOT EXISTS idx_comments_ativo ON comments(ativo);

-- Comentários
COMMENT ON TABLE comments IS 'Comentários nos posts dos usuários';
COMMENT ON COLUMN comments.is_bot IS 'Indica se o comentário foi feito por um bot';
COMMENT ON COLUMN comments.ativo IS 'Soft delete: true = ativo, false = removido logicamente';
