<template>
  <button @click="handleUpload">单文件上传</button>
  <input type="file" ref="fileInput" style="display: none;" />
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
    const formData = new FormData();
    formData.append('file', files![0]);
    await fetch('http://localhost:5172/api/uploadSingleFile', {
      method: 'POST',
      body: formData
    });
  });
})

</script>