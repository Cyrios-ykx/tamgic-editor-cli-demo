import { defineConfig } from '@tmagic/cli';

import test from './widget/test.vue';

export default defineConfig({
  packages: [
    {
      page: '@tmagic/vue-page',
      container: '@tmagic/vue-container',
      'iterator-container': '@tmagic/vue-iterator-container',
      'page-fragment': '@tmagic/vue-page-fragment',
      'page-fragment-container': '@tmagic/vue-page-fragment-container',
      test: './widget/test.vue',
    },
  ],
  componentFileAffix: '.vue',
  dynamicImport: true,
  npmConfig: {
    client: 'pnpm',
    keepPackageJsonClean: true,
  },
});
