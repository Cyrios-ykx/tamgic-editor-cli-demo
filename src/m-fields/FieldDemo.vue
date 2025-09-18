<!-- 复杂组件示例 -->
<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="formRules"
    label-width="100px"
  >
    <el-form-item :prop="props.name" :label="props.name">
      <el-input :placeholder="props.name" v-model="config" clearable></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import type { IField } from './types';
import type { FormInstance } from 'element-plus';

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

const onDataChange = (val: any) => {
  emit('change', val);
};

// form
const ruleFormRef = ref<FormInstance>();
const ruleForm = computed(() => {
  return {
    [props.name]: config.value,
  };
});
const formRules = {
  [props.name]: props.config?.baseConfig?.rules || [],
};
</script>

<style scoped></style>
