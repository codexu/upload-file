<template>
  <h2>视频指定帧</h2>
  <div class="flex">
    <div>
      <button @click="handleUpload">选择视频</button>
      <input type="file" ref="fileInput" style="display: none;" accept="video/*" />
      <video ref="video" controls :src="videoUrl" width="400" v-show="videoUrl" />
    </div>
    <div>
      <button @click="handleExtract" v-if="videoUrl">提取帧</button>
      <img ref="cover"></img>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const fileInput = ref<HTMLInputElement>();
const video = ref<HTMLVideoElement>();
const cover = ref<HTMLImageElement>();
const videoUrl = ref('');

function handleUpload() {
  if (fileInput.value) {
    fileInput.value.click();
  }
}

function handleExtract() {
  if (!video.value || !cover.value) {
    return;
  }
  const canvas = document.createElement('canvas');
  canvas.width = video.value.videoWidth;
  canvas.height = video.value.videoHeight;
  canvas.getContext('2d')?.drawImage(video.value, 0, 0);
  cover.value.src = canvas.toDataURL();
}

onMounted(() => {
  if (!fileInput.value) {
    return;
  }
  fileInput.value.addEventListener('change', async (event) => {
    const file = (event.target as HTMLInputElement).files![0];
    videoUrl.value = URL.createObjectURL(file);
  });
  video.value?.addEventListener('loadeddata', () => {
    video.value?.play();
  })
})
</script>
