<template>
  <div class="file-list">
    <span v-for="(file, index) in props.files" :key="index" class="file-item">
      {{ index + 1 }}. {{ file.name }} ({{ file.size }})
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  files: File[]
}>()
</script>

<style>
.file-item{
  display: block;
  margin-bottom: 10px;
}
</style>