<script setup lang="ts">
import SingleFile from './components/SingleFile.vue'
</script>

<template>
  <a-flex wrap="wrap" gap="small">
    <a-card title="单文件上传" style="width: 300px">
      <template #extra>
        <SingleFile />
      </template>
    </a-card>
  </a-flex>
</template>