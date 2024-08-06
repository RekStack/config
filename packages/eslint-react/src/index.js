import globals from 'globals';
import pluginJs from '@eslint/js';
import { fixupPluginRules } from '@eslint/compat';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import unusedImports from 'eslint-plugin-unused-imports';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { name: 'Files', files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    name: 'Options',
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    settings: { react: { version: 'detect' } },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
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
            props: false,
          },
        },
      ],
    },
  },
  // Needs to be at the end
  eslintConfigPrettier,
];
