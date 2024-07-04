<template>
  <a-tabs style="width: 800px;">
    <a-tab-pane key="preview" tab="预览场景">
      <a-collapse accordion>
        <a-collapse-panel header="图片预览">
          <ImagePreview />
        </a-collapse-panel>
        <a-collapse-panel header="视频指定帧">
          <VideoCover />
        </a-collapse-panel>
        <a-collapse-panel header="PDF 预览">
          <PdfPreview />
        </a-collapse-panel>
        <a-collapse-panel header="DOCX 预览">
          <DocxPreview />
        </a-collapse-panel>
        <a-collapse-panel header="XLSX 预览">
          <XlsxPreview />
        </a-collapse-panel>
      </a-collapse>
    </a-tab-pane>
    <a-tab-pane key="action" tab="操作场景">
      <a-collapse accordion>
        <a-collapse-panel header="拖拽">
          <DropArea />
        </a-collapse-panel>
        <a-collapse-panel header="文件夹">
          <DirectoryUpload />
        </a-collapse-panel>
        <a-collapse-panel header="文件过滤">
          <FileAccept />
        </a-collapse-panel>
        <a-collapse-panel header="剪贴板">
        </a-collapse-panel>
        <a-collapse-panel header="压缩">
        </a-collapse-panel>
      </a-collapse>
    </a-tab-pane>
    <a-tab-pane key="upload" tab="上传场景">
      <a-collapse accordion>
        <a-collapse-panel header="上传进度">
          <SingleFile />
        </a-collapse-panel>
        <a-collapse-panel header="单文件上传">
          <SingleFile />
        </a-collapse-panel>
        <a-collapse-panel header="多文件上传">
          <MultipleFile />
        </a-collapse-panel>
      </a-collapse>
    </a-tab-pane>
    <a-tab-pane key="bigupload" tab="大文件场景">
      <a-collapse accordion>
        <a-collapse-panel header="分片上传">
        </a-collapse-panel>
        <a-collapse-panel header="断点续传">
        </a-collapse-panel>
      </a-collapse>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import SingleFile from './components/SingleFile.vue'
import MultipleFile from './components/MultipleFile.vue'
import ImagePreview from './components/preview/ImagePreview.vue'
import VideoCover from './components/preview/VideoCover.vue'
import PdfPreview from './components/preview/PdfPreview.vue'
import DocxPreview from './components/preview/DocxPreview.vue'
import XlsxPreview from './components/preview/XlsxPreview.vue'
import DropArea from './components/action/DropArea.vue'
import DirectoryUpload from './components/action/DirectoryUpload.vue'
import FileAccept from './components/action/FileAccept.vue'
</script>