<!-- 复杂组件示例 -->
<template>
  <div>
    <el-form-item label="title" label-width="100px" label-position="left">
      <el-input placeholder="title" v-model="config" clearable></el-input>
    </el-form-item>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { IField } from './types';

const props = defineProps<IField>();
const emit = defineEmits(['change']);
const config = computed({
  get() {
    return props.model[props.name];
  },
  set(val) {
    onDataChange(val);
  },
});

console.log('props');
console.log(props);

console.log('props.model');
console.log(props.model);

console.log('props.name');
console.log(props.name);

const onDataChange = (val: any) => {
  emit('change', val);
};
</script>

<style scoped></style>
