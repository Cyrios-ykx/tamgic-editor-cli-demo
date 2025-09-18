import { defineConfig } from '@tmagic/cli';
import path from 'path'; // 引入 path 模块处理路径

import WIDGET from '../widget/index.ts';

export default defineConfig({
  packages: [
    {
      page: '@tmagic/vue-page',
      container: '@tmagic/vue-container',
      'iterator-container': '@tmagic/vue-iterator-container',
      'page-fragment': '@tmagic/vue-page-fragment',
      'page-fragment-container': '@tmagic/vue-page-fragment-container',
      component: path.resolve(__dirname, '../component'),
    },
    WIDGET,
  ],
  componentFileAffix: '.vue',
  dynamicImport: true,
  npmConfig: {
    client: 'pnpm',
    keepPackageJsonClean: true,
  },
});
