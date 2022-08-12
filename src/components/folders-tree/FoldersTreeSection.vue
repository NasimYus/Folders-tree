<template>
  <div>
    <div class="main-section">
      <div class="main-paragraph">
        <FolderIcon
          v-if="treeGroup.type === 'folder'"
          class="icons-style-40"
        ></FolderIcon>
        <DocumentIcon v-else class="icons-style-40"></DocumentIcon>
        <span v-if="!isUpdate" class="cursor-pointer">
          {{ treeGroup.name }}
        </span>
        <div class="input-group" v-else>
          <input :id="treeGroup.id" type="text" v-model="name" />
          <button @click="updateElement">
            <CheckIcon class="icons-style-10" />
          </button>
        </div>
      </div>
      <div class="main-events">
        <button @click="isUpdate = true">
          <PencilIcon class="icons-style-20" />
        </button>
        <button @click="deleteElement">
          <TrashIcon class="icons-style-20" />
        </button>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { FolderIcon } from "@heroicons/vue/solid";
import { CheckIcon } from "@heroicons/vue/solid";
import { DocumentIcon } from "@heroicons/vue/solid";
import { PencilIcon } from "@heroicons/vue/solid";
import { TrashIcon } from "@heroicons/vue/solid";

import { computed, defineProps, ref, watch } from "vue";
import { useStore } from "vuex";
import { TMainGroup, TSubGroup, TThirdGroup } from "@/types";

const props = defineProps<{
  treeGroup: TMainGroup | TSubGroup | TThirdGroup;
  parentIndexes: number[];
}>();

const isUpdate = ref<boolean>(false);
const name = ref<string>("");

const store = useStore();

const mainGroup = computed<TMainGroup[]>(() => store.state.mainGroup);
const treeGroupToString = computed<string>(() =>
  JSON.stringify(props.treeGroup)
);

watch(
  () => treeGroupToString,
  () => {
    name.value = props.treeGroup.name;
  },
  { immediate: true }
);

function deleteElement(): void {
  if (props.parentIndexes.length === 1) {
    mainGroup.value.splice(props.parentIndexes[0], 1);
  } else if (props.parentIndexes.length === 2) {
    mainGroup.value[props.parentIndexes[0]].subGroup.splice(
      props.parentIndexes[1],
      1
    );
  } else {
    mainGroup.value[props.parentIndexes[0]].subGroup[
      props.parentIndexes[1]
    ].thirdGroup.splice(props.parentIndexes[2], 1);
  }
  store.commit("UPDATE_MAIN_GROUP", mainGroup.value);
}

function updateElement(): void {
  if (props.parentIndexes.length === 1) {
    mainGroup.value[props.parentIndexes[0]].name = name.value;
  } else if (props.parentIndexes.length === 2) {
    mainGroup.value[props.parentIndexes[0]].subGroup[
      props.parentIndexes[1]
    ].name = name.value;
  } else {
    mainGroup.value[props.parentIndexes[0]].subGroup[
      props.parentIndexes[1]
    ].thirdGroup[props.parentIndexes[2]].name = name.value;
  }
  store.commit("UPDATE_MAIN_GROUP", mainGroup.value);
  isUpdate.value = false;
}
</script>
