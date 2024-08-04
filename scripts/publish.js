import { branchConfigs, packages, rootDir } from './config.js';
import { publish } from '@tanstack/config/publish';

await publish({
  branch: process.env.BRANCH,
  branchConfigs,
  ghToken: process.env.GH_TOKEN,
  packages,
  rootDir,
  tag: 'v0.0.1',
})
  .then(() => {
    console.log('Successfully published packages!');
  })
  .catch(console.error);

process.exit(0);
