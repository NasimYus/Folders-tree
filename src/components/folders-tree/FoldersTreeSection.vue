<template>
  <div>
    <div class="main-section">
      <p class="main-paragraph">
        <FolderIcon v-if="treeGroup.type === 'folder'" class="icons-style-40" />
        <DocumentIcon v-else class="icons-style-40" />
        <span class="cursor-pointer">
          {{ treeGroup.name }}
        </span>
      </p>
      <div class="main-events">
        <button><PencilIcon class="icons-style-20" /></button>
        <button @click="deleteElement(treeGroup)">
          <TrashIcon class="icons-style-20" />
        </button>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { FolderIcon } from "@heroicons/vue/solid";
import { DocumentIcon } from "@heroicons/vue/solid";
import { PencilIcon } from "@heroicons/vue/solid";
import { TrashIcon } from "@heroicons/vue/solid";

import { computed, defineAsyncComponent, defineProps } from "vue";
import { useStore } from "vuex";

const props = defineProps<{
  treeGroup: any;
}>();
const store = useStore();

const mainGroup = computed(() => store.state.mainGroup);

function deleteElement(element: any) {
  let newTreeData = mainGroup.value.filter((item: any) => {
    if (item.name === element.name) {
      let index = mainGroup.value.indexOf(item);
      console.log(index);
      const st = mainGroup.value.splice(index, 1);
      console.log(st);
    }
  });
  console.log(newTreeData);
  store.commit("DELETE_ELEMENT", newTreeData);

  /*
  * else {
      item.subGroup.filter((subItem: any) => {
        if (subItem.name === element.name) {
          let index = item.subGroup.indexOf(subItem);
          item.subGroup.splice(index, 1);
        } else {
          subItem.thirdGroup.filter((thirdItem: any) => {
            if (thirdItem.name === element.name) {
              let index = subItem.thirdGroup.indexOf(thirdItem);
              subItem.thirdGroup.splice(index, 1);
            }
          });
        }
      });
    }
  * */
}

const FoldersTreeSection = defineAsyncComponent(
  () => import("../components/folders-tree/FoldersTreeSection.vue")
);
</script>

<style scoped lang="scss">
.main-section {
  display: flex;
  justify-content: space-between;
  .main-paragraph {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .main-events {
    button {
      cursor: pointer;
      border: 0;
      background: #fff;
    }
    display: flex;
    justify-content: space-between;
  }
}

.icons-style-40 {
  width: 40px;
  height: 40px;
  color: #ccc;
}

.icons-style-20 {
  width: 20px;
  height: 20px;
  color: black;
  &:hover {
    color: blue;
  }
}
</style>
