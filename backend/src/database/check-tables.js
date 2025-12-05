require('dotenv').config();
const { supabase } = require('./supabase');

async function listTables() {
  console.log('\n📊 Listando tabelas no banco de dados...\n');

  try {
    // Tentar listar todas as tabelas do schema public
    const { data, error } = await supabase.rpc('get_tables'); // Isso pode não funcionar

    if (error) {
      console.log('⚠️  RPC não disponível, tentando query direta...\n');

      // Tentar uma query simples
      const { data: testData, error: testError } = await supabase.from('users').select('count');

      if (testError) {
        if (
          testError.message.includes('relation') &&
          testError.message.includes('does not exist')
        ) {
          console.log('❌ A tabela "users" NÃO existe!');
          console.log('\n📝 Você precisa executar as migrations no Supabase:');
          console.log('   1. Acesse: https://app.supabase.com/project/datkzjryodifmeruuecb/editor');
          console.log('   2. Vá em SQL Editor');
          console.log('   3. Execute os arquivos em src/database/migrations/ em ordem\n');
        } else {
          console.log('❌ Erro:', testError.message);
        }
      } else {
        console.log('✅ Tabela "users" existe!');
        console.log('✅ Conexão funcionando!');
      }
    }
  } catch (err) {
    console.error('❌ Erro:', err.message);
  }
}

listTables()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
