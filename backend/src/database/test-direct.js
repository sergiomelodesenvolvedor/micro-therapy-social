require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_KEY;

console.log('\n🔍 Teste direto de conexão Supabase\n');
console.log('URL:', url);
console.log('KEY (primeiros 50):', key?.substring(0, 50) + '...');

const supabase = createClient(url, key);

console.log('\n✅ Cliente criado com sucesso!');
console.log('Tentando query de teste...\n');

supabase
  .from('users')
  .select('count')
  .then(({ data, error }) => {
    if (error) {
      console.log('❌ Erro na query:', error.message);
      console.log('Código:', error.code);
      console.log('Detalhes:', error.details);
      console.log('Hint:', error.hint);
    } else {
      console.log('✅ Query bem-sucedida!');
      console.log('Dados:', data);
    }
    process.exit(error ? 1 : 0);
  });
