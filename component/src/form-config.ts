export default [
  {
    name: 'text',
    text: '配置文案',
  },
  {
    type: 'select',
    text: '颜色',
    name: 'color',
    options: [
      {
        text: '红色',
        value: 'red',
      },
      {
        text: '蓝色',
        value: 'blue',
      },
    ],
    // 表单联动
    // https://tencent.github.io/tmagic-editor/docs/guide/advanced/coupling.html#%E8%A1%A8%E5%8D%95%E8%81%94%E5%8A%A8
    onChange: (vm, value, { model }) => {
      model.text = value;
    },
  },
];
