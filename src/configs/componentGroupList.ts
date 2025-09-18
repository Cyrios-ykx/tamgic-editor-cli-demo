// https://element-plus.org/zh-CN/component/icon.html
import {
  Files,
  FolderOpened,
  Grid,
  PictureFilled,
  SwitchButton,
  Ticket,
  Tickets,
  Coffee,
} from '@element-plus/icons-vue';

import type { ComponentGroup } from '@tmagic/editor';

export default [
  {
    title: '示例容器',
    items: [
      {
        icon: FolderOpened,
        text: '组',
        type: 'container',
      },
      {
        icon: Ticket,
        text: '页面片容器',
        type: 'page-fragment-container',
      },
      {
        icon: Files,
        text: '迭代器容器',
        type: 'iterator-container',
      },
    ],
  },
  {
    title: '示例组件',
    items: [
      {
        icon: Files,
        text: 'component',
        type: 'component',
      },
      {
        icon: Coffee,
        text: 'head',
        type: 'head',
      },
    ],
  },
] as ComponentGroup[];
