<script setup lang="ts">
import SingleFile from './components/SingleFile.vue'
import MultipleFile from './components/MultipleFile.vue'
import ImagePreview from './components/ImagePreview.vue'
import VideoCover from './components/VideoCover.vue'
</script>

<template>
  <div class="scence-container">
    <SingleFile />
    <MultipleFile />
    <ImagePreview />
    <VideoCover />
  </div>
</template>

<style>
.scence-container{
  display: grid;
  gap: 24px;
}

h2 {
  font-size: 14px;
  margin-bottom: 0;
}

button{
  max-width: 180px;
  height: 28px;
}

img {
  width: 400px;
}
</style>