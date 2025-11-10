# 环境准备

pnpm 版本:
node 版本:
npm 版本:

# 项目启动

```sh
pnpm install

cd \component
pnpm install
cd ..

cd \runtime
pnpm install
pnpm run tmagic
pnpm run build:libs
cd ..

# 在都安装完依赖之后也可以在根目录下运行以下命令，在2个新开的终端窗口中来运行不同的服务
pnpm run dev:all

# 在浏览器中访问 http://localhost:8098/
```

# 开发

更新组件中的 form-config 时，需要在终端中执行 npm run runtime:update，右侧面板（表单配置）才会显示对应 UI 的更新

# 规划

- [x] editor 多个组件示例
- [x] editor 复杂组件示例
- [x] editor 组件联动示例
- [x] editor 组件校验
- [x] editor 保存配置
- [x] editor 组件可排序

# 减小打包体积

```sh
pnpm why vue
```
