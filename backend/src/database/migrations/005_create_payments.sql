-- ============================================
-- TABELA: payments
-- Descrição: Histórico de pagamentos (Stripe)
-- ============================================

CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  stripe_payment_id VARCHAR(255) UNIQUE,
  stripe_customer_id VARCHAR(255),
  status VARCHAR(50) NOT NULL, -- 'pending', 'succeeded', 'failed', 'refunded'
  amount INT NOT NULL CHECK (amount > 0), -- centavos
  currency VARCHAR(3) DEFAULT 'BRL',
  subscription_id VARCHAR(255),
  data_criacao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  data_atualizacao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ativo BOOLEAN DEFAULT true
);

-- Atualiza automaticamente data_atualizacao em updates
CREATE OR REPLACE FUNCTION set_data_atualizacao_payments()
RETURNS TRIGGER AS $$
BEGIN
  NEW.data_atualizacao = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_payments_data_atualizacao ON payments;
CREATE TRIGGER trg_payments_data_atualizacao
BEFORE UPDATE ON payments
FOR EACH ROW
EXECUTE FUNCTION set_data_atualizacao_payments();

-- Índices
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON payments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_stripe_payment_id ON payments(stripe_payment_id);
CREATE INDEX IF NOT EXISTS idx_payments_stripe_customer_id ON payments(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
CREATE INDEX IF NOT EXISTS idx_payments_data_criacao ON payments(data_criacao DESC);
CREATE INDEX IF NOT EXISTS idx_payments_ativo ON payments(ativo);

-- Comentários
COMMENT ON TABLE payments IS 'Histórico de pagamentos e assinaturas';
COMMENT ON COLUMN payments.amount IS 'Valor em centavos (ex: 3000 = R$ 30,00)';
COMMENT ON COLUMN payments.status IS 'Status: pending, succeeded, failed, refunded';
COMMENT ON COLUMN payments.ativo IS 'Soft delete: true = ativo, false = removido logicamente';
