<template>
  <a-button @click="handleUpload">选择文件</a-button>
  <input type="file" ref="fileInput" style="display: none;" accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
  <div ref="docxContainer"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { renderAsync } from 'docx-preview';

const fileInput = ref<HTMLInputElement>();
const docxContainer = ref<HTMLDivElement>();

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
    if (docxContainer.value) {
      renderAsync(file, docxContainer.value);
    }
  });
})

</script>