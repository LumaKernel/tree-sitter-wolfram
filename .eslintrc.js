const configureBase = require('@luma-dev/eslint-config-base/configure');

const config = { __dirname };

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@luma-dev/base'],
  overrides: [
    ...configureBase(config),
    {
      files: '*.js',

      globals: {
        grammar: 'readonly',
        repeat: 'readonly',
        repeat1: 'readonly',
        seq: 'readonly',
        prec: 'readonly',
        choice: 'readonly',
        optional: 'readonly',
        token: 'readonly',
        field: 'readonly',
        alias: 'readonly',
      },

      rules: {
        'no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_|^\\$$',
          },
        ],
        camelcase: 'off',
        quotes: 'off',
        'no-restricted-syntax': 'off',
        'no-param-reassign': 'off',
      },

      env: {
        commonjs: true,
      },
    },
    {
      files: '*.ts',

      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_|^\\$$',
          },
        ],
        'no-underscore-dangle': 'off',
        camelcase: 'off',
      },

      env: {
        commonjs: true,
      },
    },
  ],
};
