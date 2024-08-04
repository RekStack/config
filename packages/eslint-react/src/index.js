import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import unusedImports from 'eslint-plugin-unused-imports';
import jsxA11y from 'eslint-plugin-jsx-a11y';
// import { tanstackConfig } from '@tanstack/config/eslint';

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
      'unused-imports': unusedImports,
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
  // ...tanstackConfig,
  // Custom rules go here
];
