/**
 * Script para testar conexão com Supabase
 */

require('dotenv').config();
const { testConnection } = require('./supabase');

testConnection()
  .then((success) => {
    if (success) {
      console.log('\n✅ Teste de conexão passou!\n');
      process.exit(0);
    } else {
      console.error('\n❌ Teste de conexão falhou!\n');
      process.exit(1);
    }
  })
  .catch((err) => {
    console.error('\n❌ Erro no teste:', err.message, '\n');
    process.exit(1);
  });
