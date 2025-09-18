<template>
  <div>
    <div>Head</div>
    <div>
      {{ props.config.title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  config: {
    type: Object as any,
  },
});
</script>
