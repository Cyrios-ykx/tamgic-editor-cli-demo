## PS

要使用 pnpm install, 否则会报错找不到 pnpm-lock.yaml，如果报错了，需要 rm -rf node_modules，重新 pnpm install，然后再 npm run tmagic，就有了.tmagic 文件夹
就解决了 import('../.tmagic/comp-entry'),报错的问题

## 本地调试

首次使用或者 tmagic.config.ts 有修改，执行

```
npm run tmagic
npm run build:libs
```

然后启动 devserver

```
npm run dev
```

## 本地配置

再项目根目录下新建 tmagic.config.loacl.ts 文件，与 tmagic.config.ts 是一样的结构，local 文件会与 tmagic.config.ts 合并并覆盖它

使用场景举例：当 tmagic.config.ts 中的 packages 配置的是 npm 包时，再开发时想使用本地代码，则可以在 local 文件中配置成本地路径

例如：

```
// tmagic.config.ts

import { defineConfig } from '@tmagic/cli';

export default defineConfig({
  packages: [
    { container: '@tmagic/vue-container' },
    // 其他组件配置
  ],
  // 其他配置
});
```

```
// tmagic.config.local.ts

import { defineConfig } from '@tmagic/cli';

export default defineConfig({
  packages: [
    { container: '/data/user/components/vue-container' },
    // 其他组件配置
  ],
  // 其他配置
});
```
