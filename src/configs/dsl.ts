import { ActionType, type MApp, NodeType } from '@tmagic/core';

const dsl: MApp = {
  // --基础信息（应用根配置）--
  id: '1',
  name: 'test',
  type: NodeType.ROOT,
  // --基础信息（应用根配置）--

  codeBlocks: {
    //代码块唯一 ID
    code_5336: {
      name: 'getData',
      content: ({ app, params }) => {
        console.log('this is getData function', params, app);
      },
      // 函数参数定义
      params: [
        {
          name: 'age',
          type: 'number',
          tip: '年纪',
        },
        {
          name: 'studentName',
          type: 'text',
          tip: '学生姓名',
        },
      ],
    },
    code_5316: {
      name: 'getList',
      content: () => {
        console.log('this is getList function');
      },
      params: [],
    },
  },
  // items：页面配置（应用的页面集合）
  items: [
    {
      type: NodeType.PAGE,
      id: 'page_299',
      name: 'index',
      title: '',
      layout: 'absolute', // 这个改成flow就可以实现拖拽排序了
      style: {
        position: 'relative',
        left: 0,
        top: 0,
        right: '',
        bottom: '',
        width: '100%',
        height: '1728',
        backgroundImage: '',
        backgroundColor: 'skyblue',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        color: '',
        fontSize: '',
        fontWeight: '',
      },
      // 下面的events是页面的事件
      events: [
        {
          name: 'magic:common:events:click', // 事件名
          actions: [
            {
              actionType: ActionType.CODE, // 联动动作类型
              codeId: 'code_5336', // 代码块id
              params: {
                age: 12, // 参数
              },
            },
          ],
        },
        {
          name: 'magic:common:events:click', // 事件名
          actions: [
            {
              actionType: ActionType.CODE, // 联动动作类型
              codeId: 'code_5316', // 代码块id
              params: {},
            },
          ],
        },
      ],
      // 页面创建时自动调用codeBlocks中code_5336和code_5316
      created: {
        hookType: 'code',
        hookData: [
          {
            codeId: 'code_5336',
            params: {
              studentName: 'lisa',
              age: 14,
            },
          },
          {
            codeId: 'code_5316',
            params: {},
          },
        ],
      },
      items: [],
    },
  ],
  dataSources: [],
};

export default dsl;
