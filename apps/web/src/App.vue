<script setup lang="ts">
import SingleFile from './components/SingleFile.vue'
import MultipleFile from './components/MultipleFile.vue'
import ImagePreview from './components/ImagePreview.vue'
import VideoCover from './components/VideoCover.vue'
import PdfPreview from './components/PdfPreview.vue'
</script>

<template>
  <div class="scence-container">
    <SingleFile />
    <MultipleFile />
    <ImagePreview />
    <VideoCover />
    <PdfPreview />
  </div>
</template>
