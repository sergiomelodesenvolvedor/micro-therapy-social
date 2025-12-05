/**
 * SCRIPT DE SEED - Dados iniciais para testes
 * Cria usuários de teste, posts de exemplo, badges
 */

require('dotenv').config();
const { supabase } = require('./supabase');

// Usuários de teste
const testUsers = [
  {
    email: 'user1@test.com',
    username: 'Ana Silva',
    points: 150,
    premium: false,
    streak_days: 7,
  },
  {
    email: 'user2@test.com',
    username: 'Carlos Santos',
    points: 300,
    premium: true,
    streak_days: 14,
  },
  {
    email: 'bot@therapy.com',
    username: 'TherapyBot',
    points: 0,
    premium: false,
    streak_days: 0,
  },
];

// Posts de exemplo
const testPosts = [
  {
    content: 'Hoje me senti melhor depois de fazer uma caminhada.',
    is_anonymous: false,
  },
  {
    content: 'Às vezes sinto que ninguém me entende...',
    is_anonymous: true,
  },
];

async function seedDatabase() {
  console.log('🌱 Iniciando seed do banco de dados...\n');

  try {
    // 1. Criar usuários
    console.log('📝 Criando usuários de teste...');
    const { data: users, error: usersError } = await supabase
      .from('users')
      .upsert(testUsers, { onConflict: 'email' })
      .select();

    if (usersError) {
      throw usersError;
    }
    console.log(`✅ ${users.length} usuários criados\n`);

    // 2. Criar posts
    console.log('📝 Criando posts de exemplo...');
    const postsWithUsers = testPosts.map((post, idx) => ({
      ...post,
      user_id: users[idx % users.length].id,
    }));

    const { data: posts, error: postsError } = await supabase
      .from('posts')
      .insert(postsWithUsers)
      .select();

    if (postsError) {
      throw postsError;
    }
    console.log(`✅ ${posts.length} posts criados\n`);

    // 3. Criar badges
    console.log('📝 Criando badges de exemplo...');
    const badges = [
      {
        user_id: users[0].id,
        name: 'Primeira Jornada',
        description: 'Completou o primeiro post',
        category: 'milestone',
      },
      {
        user_id: users[1].id,
        name: 'Guerreiro 7 Dias',
        description: '7 dias consecutivos de login',
        category: 'streak',
      },
    ];

    const { data: badgesData, error: badgesError } = await supabase
      .from('badges')
      .insert(badges)
      .select();

    if (badgesError) {
      throw badgesError;
    }
    console.log(`✅ ${badgesData.length} badges criados\n`);

    console.log('🎉 Seed concluído com sucesso!\n');
    console.log('Dados criados:');
    console.log(`  - ${users.length} usuários`);
    console.log(`  - ${posts.length} posts`);
    console.log(`  - ${badgesData.length} badges`);
  } catch (error) {
    console.error('❌ Erro no seed:', error.message);
    process.exit(1);
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

module.exports = { seedDatabase };
