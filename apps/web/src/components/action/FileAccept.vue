<template>
  <a-flex gap="middle" vertical>
    <a-radio-group v-model:value="accept">
      <a-radio value="image/*">所有图片</a-radio>
      <a-radio value="video/*">所有视频</a-radio>
      <a-radio value="audio/*">所有音频</a-radio>
      <a-radio value="text/csv">csv</a-radio>
      <a-radio value="application/msword">word</a-radio>
      <a-radio value="application/vnd.ms-powerpoint">ppt</a-radio>
      <a-radio value="application/vnd.ms-excel">excel</a-radio>
      <a-radio value="aplication/zip">zip</a-radio>
    </a-radio-group>
    <a-button @click="handleUpload">选择文件</a-button>
    <input type="file" ref="fileInput" :accept="accept" style="display: none;" />
  </a-flex>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fileInput = ref<HTMLInputElement>();
const accept = ref('image/*');

function handleUpload() {
  if (fileInput.value) {
    fileInput.value.click();
  }
}
</script>