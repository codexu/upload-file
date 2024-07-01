<script setup lang="ts">
import SingleFile from './components/SingleFile.vue'
import MultipleFile from './components/MultipleFile.vue'
import ImagePreview from './components/ImagePreview.vue'
</script>

<template>
  <div class="scence-container">
    <SingleFile />
    <MultipleFile />
    <ImagePreview />
  </div>
</template>

<style>
.scence-container{
  display: grid;
  /* 纵向排列，每行一个 */
  grid-template-rows: repeat(1fr, 1fr);
  gap: 24px;
}

button{
  max-width: 240px;
}
</style>