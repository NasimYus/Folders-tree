<template>
  <folders-tree-index>,</folders-tree-index>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const foldersTreeIndex = defineAsyncComponent(
  () => import("../src/pages/FoldersTreeIndex.vue")
);
</script>
