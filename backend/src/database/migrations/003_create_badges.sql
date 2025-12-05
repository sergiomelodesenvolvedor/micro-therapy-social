-- ============================================
-- TABELA: badges
-- Descrição: Badges/conquistas dos usuários
-- ============================================

CREATE TABLE IF NOT EXISTS badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  icon_url VARCHAR(500),
  category VARCHAR(50), -- 'streak', 'engagement', 'milestone', 'special'
  unlocked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  data_criacao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  data_atualizacao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ativo BOOLEAN DEFAULT true
);

-- Atualiza automaticamente data_atualizacao em updates
CREATE OR REPLACE FUNCTION set_data_atualizacao_badges()
RETURNS TRIGGER AS $$
BEGIN
  NEW.data_atualizacao = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_badges_data_atualizacao ON badges;
CREATE TRIGGER trg_badges_data_atualizacao
BEFORE UPDATE ON badges
FOR EACH ROW
EXECUTE FUNCTION set_data_atualizacao_badges();

-- Índices
CREATE INDEX IF NOT EXISTS idx_badges_user_id ON badges(user_id);
CREATE INDEX IF NOT EXISTS idx_badges_category ON badges(category);
CREATE INDEX IF NOT EXISTS idx_badges_unlocked_at ON badges(unlocked_at DESC);
CREATE INDEX IF NOT EXISTS idx_badges_ativo ON badges(ativo);

-- Unique constraint: usuário não pode ter badge duplicado
CREATE UNIQUE INDEX IF NOT EXISTS idx_badges_user_name ON badges(user_id, name);

-- Comentários
COMMENT ON TABLE badges IS 'Badges/conquistas desbloqueadas pelos usuários';
COMMENT ON COLUMN badges.category IS 'Categoria do badge: streak, engagement, milestone, special';
COMMENT ON COLUMN badges.ativo IS 'Soft delete: true = ativo, false = removido logicamente';
