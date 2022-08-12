<template>
  <section>
    <div
      v-for="(item, index) in mainGroup"
      :key="item.id"
      class="folders-tree-container"
    >
      <folders-tree :parentIndexes="[index]" :treeGroup="item" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { TMainGroup } from "../types/index";
import { computed, defineAsyncComponent } from "vue";

const store = useStore();

const mainGroup = computed<TMainGroup[]>(() => store.state.mainGroup);

const FoldersTree = defineAsyncComponent(
  () => import("../components/folders-tree/FoldersTree.vue")
);
</script>
