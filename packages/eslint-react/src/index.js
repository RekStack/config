import { tanstackConfig } from '@tanstack/config/eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tanstackConfig,
  {
    // Custom rules go here
  },
];
