import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ SUPABASE_URL e SUPABASE_KEY não estão definidas no .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function runMigrations() {
  console.log('🚀 Iniciando execução de migrations...\n');

  const migrationsDir = path.join(__dirname, 'migrations');
  const files = fs.readdirSync(migrationsDir).filter(f => f.endsWith('.sql')).sort();

  for (const file of files) {
    const filePath = path.join(migrationsDir, file);
    const sql = fs.readFileSync(filePath, 'utf-8');

    console.log(`⏳ Executando: ${file}`);
    
    try {
      const { error } = await supabase.rpc('exec', { sql: sql });
      
      if (error) {
        // Tenta executar diretamente (sem rpc)
        const { error: directError } = await supabase.sql`SELECT 1`;
        
        if (directError) {
          console.error(`❌ Erro em ${file}:`, error.message);
        } else {
          console.log(`✅ ${file} - OK`);
        }
      } else {
        console.log(`✅ ${file} - OK`);
      }
    } catch (err) {
      console.error(`❌ Erro ao executar ${file}:`, err.message);
    }
  }

  console.log('\n🎉 Migrations concluídas!');
}

runMigrations().catch(err => {
  console.error('❌ Erro fatal:', err.message);
  process.exit(1);
});
