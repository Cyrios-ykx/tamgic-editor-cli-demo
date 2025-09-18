# 项目启动

```sh
cd /runtime
pnpm install
pnpm run tmagic
pnpm run build:libs
pnpm run dev

pnpm install
pnpm run dev

# 在都安装完依赖之后也可以运行以下命令，在新开的终端窗口来运行不同的服务
pnpm run dev:all
```

## 开发

更新组件中的form-config时，需要在/runtime下执行npm run tmagic和 npm run build:libs，右侧面板（表单配置）才会显示对应UI的更新