import { createApp } from 'vue';
import * as monaco from 'monaco-editor';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

import editorPlugin from '@tmagic/editor';
import MagicElementPlusAdapter from '@tmagic/element-plus-adapter';

import App from './App.vue';
import router from './route';
import MFields from './m-fields';

import 'element-plus/dist/index.css';
import '@tmagic/editor/dist/style.css';
import ElementPlus from 'element-plus';
import { showPerformance } from './performance';

// @ts-ignore
globalThis.MonacoEnvironment = {
  getWorker(_: any, label: string) {
    if (label === 'json') {
      return new JsonWorker();
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new CssWorker();
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new HtmlWorker();
    }
    if (label === 'typescript' || label === 'javascript') {
      return new TsWorker();
    }
    return new EditorWorker();
  },
};

monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

showPerformance();

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(editorPlugin, MagicElementPlusAdapter);
app.use(MFields);
app.mount('#app');
