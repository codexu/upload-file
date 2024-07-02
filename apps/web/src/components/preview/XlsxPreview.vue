<template>
  <a-button @click="handleUpload">选择文件</a-button>
  <input type="file" ref="fileInput" style="display: none;"
    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
  <div ref="container" v-html="html"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { read, utils } from "xlsx";

const fileInput = ref<HTMLInputElement>();
const html = ref<string>();

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
    const workbook = read(await file.arrayBuffer());
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    html.value = utils.sheet_to_html(worksheet);
  });
})

</script>