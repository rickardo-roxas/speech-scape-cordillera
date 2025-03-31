import js from '@eslint/js';
import node from 'eslint-plugin-node';
import jest from 'eslint-plugin-jest';  

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
      jest, 
    },
    env: {
      jest: true, 
    },
    rules: {
      ...js.configs.recommended.rules,
      ...jest.configs.recommended.rules, 
      'semi': ['error', 'always'], 
      'node/no-unsupported-features/es-syntax': 'off', 
      'node/no-unpublished-require': 'off', 
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }], 
      'no-console': 'off', 
    },
  }
];