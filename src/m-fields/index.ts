
import type { App } from 'vue';

import FieldDemo from './FieldDemo.vue';

const install = (app: App) => {
    app.component('m-fields-field-demo', FieldDemo);
    //   app.component('m-fields-field-demo', FieldDemo);
}

export default {
    install,
  };
  