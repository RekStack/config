/** @type {import("prettier").Config} */
export default {
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-organize-imports'],
  arrowParens: 'always',
  jsxSingleQuote: true,
  printWidth: 120,
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  importOrder: [
    '^react$',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/(.*)$',
    '',
    '^[./]',
    '',
    '<TYPES>^(node:)',
    '<TYPES>',
    '<TYPES>^[.]',
  ],
  importOrderSeparation: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
};
