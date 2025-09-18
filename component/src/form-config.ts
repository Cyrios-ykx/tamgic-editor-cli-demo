// @tmagic/form: https://tencent.github.io/tmagic-editor/docs/guide/advanced/tmagic-form.html#tmagic-form
// Form组件属性 props: https://tencent.github.io/tmagic-editor/docs/api/form/form-props.html#config
// FormConfig: https://github.com/Tencent/tmagic-editor/blob/c143a5f7670ae61d80c1a2cfcc780cfb5259849d/packages/form/src/schema.ts#L706

export default [
  {
    name: 'text',
    text: '配置文案',
    rules: [{ required: true, message: '请输入配置文案', trigger: 'blur' }],
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
    onChange: (vm: any, value: any, { model }: any) => {
      model.text = value;
    },
  },
];
