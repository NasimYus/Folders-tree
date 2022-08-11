<template>
  <folders-tree-section :treeGroup="treeGroup">
    <div v-if="treeGroup.subGroup.length">
      <div
        v-for="subGroup in treeGroup.subGroup"
        :key="subGroup.id"
        class="folders-tree-container"
      >
        <folders-tree-section :treeGroup="subGroup">
          <div v-if="subGroup.thirdGroup.length">
            <div
              v-for="thirdGroup in subGroup.thirdGroup"
              :key="thirdGroup.id"
              class="folders-tree-container"
            >
              <folders-tree-section
                :treeGroup="thirdGroup"
              ></folders-tree-section>
            </div>
          </div>
        </folders-tree-section>
      </div>
    </div>
  </folders-tree-section>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, defineProps } from "vue";

const props = defineProps<{
  treeGroup: any;
}>();

const FoldersTreeSection = defineAsyncComponent(
  () => import("../folders-tree/FoldersTreeSection.vue")
);
</script>
<style scoped lang="scss">
.folders-tree-container {
  margin-left: 50px;
}
</style>
