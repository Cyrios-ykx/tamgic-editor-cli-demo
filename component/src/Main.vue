<template>
  <div>
    <div>{{ props.config.color }}</div>
    <div>{{ props.config.text }}</div>
  </div>
</template>

<script lang="ts" setup>
import type { Id, MComponent } from '@tmagic/core';
import { type ComponentProps, useApp } from '@tmagic/vue-runtime-help';

export interface ComponentSchema extends Omit<MComponent, 'id'> {
  id?: Id;
  type?: string;
  text: string;
}

const props = defineProps<ComponentProps<ComponentSchema>>();

console.log('props.config');
console.log(props.config);

useApp(props);
</script>
