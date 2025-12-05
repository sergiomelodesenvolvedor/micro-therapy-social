require('dotenv').config();

console.log('\n🔍 Verificando variáveis de ambiente:\n');
console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? '✅ Definida' : '❌ Não definida');
console.log('SUPABASE_KEY:', process.env.SUPABASE_KEY ? '✅ Definida' : '❌ Não definida');
console.log('\nValores (primeiros 20 caracteres):');
console.log('URL:', process.env.SUPABASE_URL?.substring(0, 40) + '...');
console.log('KEY:', process.env.SUPABASE_KEY?.substring(0, 40) + '...');
