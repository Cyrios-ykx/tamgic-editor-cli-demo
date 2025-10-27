// interface FormItem {
//   /** vnode的key值，默认是遍历数组时的index */
//   __key?: string | number;
//   /** 表单域标签的的宽度，例如 '50px'。支持 auto。 */
//   labelWidth?: string;
//   className?: string;
//   /** 表单组件类型 */
//   type?: string | TypeFunction;
//   /** 字段名 */
//   name?: string | number;
//   /** 额外的提示信息，和 help 类似，当提示文案同时出现时，可以使用这个。 */
//   extra?: string | FilterFunction;
//   /** 配置提示信息 */
//   tooltip?: string | FilterFunction;
//   /** 是否置灰 */
//   disabled?: boolean | FilterFunction;
//   /** 使用表单中的值作为key，例如配置了text，则使用model.text作为key */
//   key?: string;
//   /** 是否显示 */
//   display?: boolean | 'expand' | FilterFunction;
//   /** 值发生改变时调用的方法 */
//   onChange?: OnChangeHandler;
//   /** label 标签的文本 */
//   text?: string;
//   /** 右侧感叹号 */
//   tip?: string;

//   filter?: 'number' | OnChangeHandler;
//   /** 是否去除首尾空格 */
//   trim?: boolean;
//   /** 默认值 */
//   defaultValue?: any | DefaultValueFunction;
//   /** 表单验证规则 */
//   rules?: Rule[];
//   extensible?: boolean;
//   dynamicKey?: string;
//   /** 是否需要显示`展开更多配置` */
//   expand?: boolean;
// }

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
    defaultValue: 'test',
  },
];
