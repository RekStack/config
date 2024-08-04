import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

/**
 * List your npm packages here. The first package will be used as the versioner.
 * @type {import('@tanstack/config/typedoc').Package[]}
 */
export const packages = [
  {
    name: '@rekstack/eslint-react',
    packageDir: 'packages/eslint-react',
  },
  {
    name: '@rekstack/prettier',
    packageDir: 'packages/prettier',
  },
];

/**
 * Contains config for publishable branches.
 * @type {Record<string, import('@tanstack/config/publish').BranchConfig>}
 */
export const branchConfigs = {
  alpha: {
    prerelease: true,
  },
  beta: {
    prerelease: true,
  },
  main: {
    prerelease: false,
  },
  next: {
    prerelease: true,
  },
};

// eslint-disable-next-line no-underscore-dangle
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const rootDir = resolve(__dirname, '..');
