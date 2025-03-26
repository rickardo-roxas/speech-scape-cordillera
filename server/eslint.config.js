import js from '@eslint/js';
import node from 'eslint-plugin-node';

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      node,
    },
    rules: {
      ...js.configs.recommended.rules,
      'node/no-unsupported-features/es-syntax': 'off', 
      'node/no-unpublished-require': 'off', 
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }], 
      'no-console': 'off', 
    },
  },
];
