const reactPlugin = require('eslint-plugin-react')
const reactReduxPlugin = require('eslint-plugin-react-redux')
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin')
const reactHooksPlugin = require('eslint-plugin-react-hooks')
const prettierPlugin = require('eslint-plugin-prettier')
const noRelativeImportPathsPlugin = require('eslint-plugin-no-relative-import-paths')
const testingLibraryPlugin = require('eslint-plugin-testing-library')
const typescriptParser = require('@typescript-eslint/parser')

const config = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-redux': reactReduxPlugin,
      '@typescript-eslint': typescriptEslintPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
      'no-relative-import-paths': noRelativeImportPathsPlugin,
      'testing-library': testingLibraryPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-console': 'warn',
      'prettier/prettier': 'error',
      'testing-library/await-async-utils': 'error',
      'testing-library/no-debugging-utils': 'warn',
      'testing-library/no-dom-import': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: 'req|res|next|val' }],
      'no-relative-import-paths/no-relative-import-paths': ['error', { allowSameFolder: true }],
    },
  },
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    rules: {
      'testing-library/await-async-utils': 'error',
      'testing-library/no-debugging-utils': 'warn',
      'testing-library/no-dom-import': 'off',
    },
  },
]

module.exports = config
