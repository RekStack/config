import globals from 'globals';
import pluginJs from '@eslint/js';
import { fixupPluginRules } from '@eslint/compat';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginQuery from '@tanstack/eslint-plugin-query';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { name: 'Files', files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    name: 'Options',
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    settings: { react: { version: 'detect' } },
  },
  ...pluginQuery.configs['flat/recommended'],
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    ...pluginReact.configs.flat['jsx-runtime'],
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReact.configs.flat['jsx-runtime'].rules,
      'arrow-body-style': ['error', 'as-needed'],
      'react/require-default-props': 'off',
      'react/display-name': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
        },
      ],
      'react/jsx-key': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-sort-props': 'warn',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'react/no-danger': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-string-refs': 'error',
      'react/no-unknown-property': 'error',
      'react/prefer-es6-class': 'error',
      'react/prefer-stateless-function': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'error',
      'react/sort-prop-types': 'warn',
    },
  },
  {
    plugins: {
      'react-hooks': fixupPluginRules(pluginReactHooks),
    },
    rules: {
      // React
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    plugins: {
      'unused-imports': fixupPluginRules(unusedImports),
    },
    rules: {
      // 'no-unused-vars': 'off',
      // or
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  jsxA11y.flatConfigs.recommended,
  {
    ...eslintPluginUnicorn.configs['flat/recommended'],
    rules: {
      ...eslintPluginUnicorn.configs['flat/recommended'].rules,
      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            args: false,
            prop: false,
            props: false,
            ref: false,
          },
        },
      ],
      'unicorn/no-useless-undefined': ['off'],
      'unicorn/no-null': ['off'],
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
          },
          ignore: [/routes\/.*\.(js|jsx|ts|tsx)$/],
        },
      ],
    },
  },
  {
    name: 'Custom rules',
    rules: {
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'object-shorthand': ['error', 'always'],
      'no-useless-computed-key': 'error',
      '@typescript-eslint/no-use-before-define': ['error'],
      'prefer-template': 'error',
      'sort-keys': ['warn', 'asc', { natural: true }],
    },
  },
  // Needs to be at the end of all rules
  eslintConfigPrettier,
  {
    name: 'Files/folders to ignore',
    ignores: ['node_modules/**', 'dist/**', 'build/**', '**/generated/**', '**/routeTree.gen.ts', 'cypress/**'],
  },
];
