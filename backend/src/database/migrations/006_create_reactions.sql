-- ============================================
-- TABELA: reactions
-- Descrição: Reações dos usuários aos posts
-- ============================================

CREATE TABLE IF NOT EXISTS reactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(20) NOT NULL, -- 'like', 'support', 'hug', 'celebrate'
  data_criacao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  data_atualizacao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ativo BOOLEAN DEFAULT true
);

-- Atualiza automaticamente data_atualizacao em updates
CREATE OR REPLACE FUNCTION set_data_atualizacao_reactions()
RETURNS TRIGGER AS $$
BEGIN
  NEW.data_atualizacao = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_reactions_data_atualizacao ON reactions;
CREATE TRIGGER trg_reactions_data_atualizacao
BEFORE UPDATE ON reactions
FOR EACH ROW
EXECUTE FUNCTION set_data_atualizacao_reactions();

-- Índices
CREATE INDEX IF NOT EXISTS idx_reactions_post_id ON reactions(post_id);
CREATE INDEX IF NOT EXISTS idx_reactions_user_id ON reactions(user_id);
CREATE INDEX IF NOT EXISTS idx_reactions_type ON reactions(type);
CREATE INDEX IF NOT EXISTS idx_reactions_ativo ON reactions(ativo);

-- Constraint: 1 usuário só pode reagir 1x por post
CREATE UNIQUE INDEX IF NOT EXISTS idx_reactions_user_post ON reactions(user_id, post_id);

-- Comentários
COMMENT ON TABLE reactions IS 'Reações dos usuários aos posts';
COMMENT ON COLUMN reactions.type IS 'Tipo de reação: like, support, hug, celebrate';
COMMENT ON COLUMN reactions.ativo IS 'Soft delete: true = ativo, false = removido logicamente';
