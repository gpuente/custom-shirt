import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    root: true,
    extends: [
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jest'],
    env: {
      'jest/globals': true,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      'no-plusplus': 'off',
      'import/extensions': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      'non-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-await-in-loop': 'off',
    },
  },
  eslintConfigPrettier,
];
