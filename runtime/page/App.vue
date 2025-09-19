<template>
  <!-- 这里是预览时展示的效果页面 -->
  <component :is="pageComponent" :config="(pageConfig as MPage)"></component>
</template>

<script lang="ts" setup>
import type { MPage } from '@tmagic/core';
import { useComponent, useDsl } from '@tmagic/vue-runtime-help';

const { pageConfig } = useDsl();
const pageComponent = useComponent('page');
</script>
