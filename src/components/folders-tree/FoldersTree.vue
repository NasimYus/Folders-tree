<template>
  <folders-tree-section
    :parentIndexes="[...parentIndexes]"
    :treeGroup="treeGroup"
  >
    <div v-if="treeGroup.subGroup.length">
      <div
        v-for="(subGroup, subIndex) in treeGroup.subGroup"
        :key="subGroup.id"
        class="folders-tree-container"
      >
        <folders-tree-section
          :parentIndexes="[...parentIndexes, subIndex]"
          :treeGroup="subGroup"
        >
          <div v-if="subGroup.thirdGroup.length">
            <div
              v-for="(thirdGroup, thirdIndex) in subGroup.thirdGroup"
              :key="thirdGroup.id"
              class="folders-tree-container"
            >
              <folders-tree-section
                :parentIndexes="[...parentIndexes, subIndex, thirdIndex]"
                :treeGroup="thirdGroup"
              />
            </div>
          </div>
        </folders-tree-section>
      </div>
    </div>
  </folders-tree-section>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, defineProps } from "vue";
import { TMainGroup } from "@/types";

const props = defineProps<{
  treeGroup: TMainGroup;
  parentIndexes: number[];
}>();

const FoldersTreeSection = defineAsyncComponent(
  () => import("../folders-tree/FoldersTreeSection.vue")
);
</script>
