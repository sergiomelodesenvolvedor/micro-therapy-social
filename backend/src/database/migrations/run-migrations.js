require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

const migrationsDir = path.join(__dirname);
const connectionString =
  process.env.DATABASE_URL || process.env.SUPABASE_DB_URL || process.env.SUPABASE_CONNECTION_STRING;

if (!connectionString) {
  console.error('❌ Defina DATABASE_URL (ou SUPABASE_DB_URL/SUPABASE_CONNECTION_STRING) para rodar as migrations.');
  process.exit(1);
}

const pool = new Pool({ connectionString, ssl: { rejectUnauthorized: false } });

async function run() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const files = fs
      .readdirSync(migrationsDir)
      .filter((f) => f.endsWith('.sql'))
      .sort();

    console.log(`🔍 Encontradas ${files.length} migrations.`);

    for (const file of files) {
      const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
      console.log(`🚀 Executando ${file}...`);
      await client.query(sql);
      console.log(`✅ ${file} aplicada.`);
    }

    await client.query('COMMIT');
    console.log('🎉 Migrations concluídas.');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('❌ Erro ao aplicar migrations:', err.message);
    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
}

run();
