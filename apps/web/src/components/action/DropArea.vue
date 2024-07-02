<template>
  <div class="drop-area" ref="dropArea">
    <span>拖拽文件到这里</span>
  </div>
  <FileList :files="fileList" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import FileList from '../FileList.vue';

const dropArea = ref<HTMLDivElement>();
const fileList = ref<File[]>([]);

onMounted(() => {
  if (!dropArea.value) {
    return;
  }
  dropArea.value.addEventListener('dragenter', (event) => {
    event.preventDefault();
  })
  dropArea.value.addEventListener('dragover', (event) => {
    event.preventDefault();
  })
  dropArea.value.addEventListener('drop', (event) => {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      fileList.value = Array.from(files);
    }
  })
})
</script>

<style>
.drop-area{
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px dashed #ccc;
  border-radius: 5px;
  background-color: #efefef;
}
</style>