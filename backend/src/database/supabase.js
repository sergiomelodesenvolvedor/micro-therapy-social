/**
 * SUPABASE CLIENT CONFIGURATION
 * Conexão com o banco de dados Supabase (PostgreSQL)
 */

import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

// Validação das variáveis de ambiente
if (!process.env.SUPABASE_URL) {
  throw new Error('❌ SUPABASE_URL não está definida no .env');
}

if (!process.env.SUPABASE_KEY) {
  throw new Error('❌ SUPABASE_KEY não está definida no .env');
}

// Criar cliente Supabase
export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

/**
 * Testa a conexão com o banco de dados
 */
export async function testConnection() {
  try {
    const { error } = await supabase.from('users').select('count').limit(1);

    if (error) {
      console.error('❌ Erro ao conectar com Supabase:', error.message);
      return false;
    }

    console.log('✅ Conexão com Supabase estabelecida com sucesso!');
    return true;
  } catch (err) {
    console.error('❌ Erro na conexão:', err.message);
    return false;
  }
}

/**
 * Helper para queries paginadas
 */
export async function paginatedQuery(
  table,
  { page = 1, limit = 10, orderBy = 'data_criacao', ascending = false }
) {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, error, count } = await supabase
    .from(table)
    .select('*', { count: 'exact' })
    .order(orderBy, { ascending })
    .range(from, to);

  if (error) {
    throw error;
  }

  return {
    data,
    pagination: {
      page,
      limit,
      total: count,
      totalPages: Math.ceil(count / limit),
    },
  };
}
