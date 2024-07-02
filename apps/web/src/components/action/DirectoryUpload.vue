<template>
  <a-button @click="handleUpload">选择文件夹</a-button>
  <input type="file" ref="fileInput" webkitdirectory style="display: none;" />
  <FileList :files="fileList" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import FileList from '../FileList.vue';

const fileInput = ref<HTMLInputElement>();
const fileList = ref<File[]>([]);

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
    fileList.value = Array.from(files!);
  });
})

</script>