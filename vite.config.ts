import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    // 体积分析插件配置
    visualizer({
      filename: 'dist/volume-analysis.html',
      template: 'treemap', // 详见rollup-plugin-visualizer中PluginVisualizerOptions的TemplateType
      open: true, // 打包后自动打开报告
    }),
  ],

  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },

  server: {
    host: '0.0.0.0',
    port: 8098,
    strictPort: true,
    proxy: {
      '^/runtime': {
        target: 'http://127.0.0.1:8078',
        changeOrigin: true,
        prependPath: false,
      },
    },
  },

  preview: {
    proxy: {},
  },

  build: {
    sourcemap: true,
    rollupOptions: {
      // 外部依赖声明（排除 xxx 不打包）
      external: [],
    },
  },
});
