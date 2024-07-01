<template>
  <h2>图片预览</h2>
  <button @click="handleUpload">选择图片</button>
  <input type="file" ref="fileInput" style="display: none;" accept="image/*" />
  <img :src="imageData" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const fileInput = ref<HTMLInputElement>();
const imageData = ref('');

function handleUpload() {
  if (fileInput.value) {
    fileInput.value.click();
  }
}

// 将 File 转化为 base64
function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

onMounted(() => {
  if (!fileInput.value) {
    return;
  }
  fileInput.value.addEventListener('change', async (event) => {
    const file = (event.target as HTMLInputElement).files![0];
    const imageBase64Data = await getBase64(file);
    imageData.value = imageBase64Data as string;
  });
})

</script>