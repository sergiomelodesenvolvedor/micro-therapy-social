module.exports = {
  env: {
    node: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'script',
  },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
  overrides: [
    {
      files: [
        'src/database/seed.js',
        'src/database/check-tables.js',
        'src/database/debug-env.js',
        'src/database/supabase.js',
        'src/database/test-*.js',
      ],
      rules: {
        'no-console': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
};
