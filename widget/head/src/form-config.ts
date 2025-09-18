export default [
  {
    type: 'field-demo',
    name: 'title', // 要绑定的字段名
    // rules: [{ required: true, message: '请输入title', trigger: 'blur' }], // 这个会触发editor/form的校验
    baseConfig: {
      rules: [{ required: true, message: '请输入title', trigger: 'change' }],
    },
  },
  {
    type: 'field-demo',
    name: 'sub-title',
  },
];
