<template>
  <h2>多文件上传</h2>
  <button @click="handleUpload">选择文件</button>
  <input type="file" multiple ref="fileInput" style="display: none;" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const fileInput = ref<HTMLInputElement>();

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
    const files = (event.target as HTMLInputElement).files;
    console.log(files);
    const formData = new FormData();
    for (const file of files!) {
      formData.append('files', file);
    }
    await fetch('http://localhost:5172/api/uploadMultipleFile', {
      method: 'POST',
      body: formData
    });
  });
})

</script>