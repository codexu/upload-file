<template>
  <h2>PDF 预览</h2>
  <button @click="handleUpload">选择文件</button>
  <input type="file" ref="fileInput" style="display: none;" accept="application/pdf" />
  <object :data="dataURL" width="800" height="400"></object>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const fileInput = ref<HTMLInputElement>();
const dataURL = ref('');

function handleUpload() {
  if (fileInput.value) {
    fileInput.value.click();
  }
}

onMounted(() => {
  if (!fileInput.value) {
    return;
  }
  fileInput.value.addEventListener('change', async (event) => {
    const file = (event.target as HTMLInputElement).files![0];
    dataURL.value = URL.createObjectURL(file);
  });
})

</script>