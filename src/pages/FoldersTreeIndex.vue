<template>
  <section v-if="mainGroup.length">
    <div
      v-for="item in mainGroup"
      :key="item.id"
      class="folders-tree-container"
    >
      <folders-tree :treeGroup="item"></folders-tree>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed, defineAsyncComponent, watch } from "vue";
const store = useStore();
const mainGroup = computed(() => store.state.mainGroup);
const mainGroupToString = computed(() => JSON.stringify(mainGroup));
watch(
  () => mainGroupToString,
  () => {}
);

const FoldersTree = defineAsyncComponent(
  () => import("../components/folders-tree/FoldersTree.vue")
);
</script>

<style lang="scss" scoped>
.folders-tree-container {
  margin-left: 50px;
}
</style>
