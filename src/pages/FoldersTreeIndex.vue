<template>
  <div>
    {{ mainGroup }}
    <div>
      <div
        v-for="item in mainGroup"
        :key="item.id"
        class="folders-tree-container"
      >
        <section class="main-section">
          <p class="main-paragraph">
            <FolderAddIcon class="icons-style" />
            <span class="cursor-pointer" @click="getSecondCategories(item.id)">
              {{ item.name }}
            </span>
          </p>
          <div class="main-events">
            <button>delete</button>
            <button>update</button>
          </div>
        </section>

        <!--        <categories-list-item-->
        <!--          :item="{ name: item.name, id: item.id, categoryId: item.id }"-->
        <!--          :list="item.sub_categories"-->
        <!--          :group="'subCategories'"-->
        <!--        >-->
        <!--          <template #dragItem="{ categoryItem: subCategory }">-->
        <!--            <div>-->
        <!--              <p class="mt-1 flex items-center space-x-1.5">-->
        <!--                <menu-icon-->
        <!--                  class="inline-block w-4 h-4 text-gray-600 hover:text-purple-600 cursor-move handle"-->
        <!--                />-->
        <!--                <span-->
        <!--                  class="cursor-pointer pb-0.5"-->
        <!--                  @click.stop="getThirdCategories(item.id, subCategory.id)"-->
        <!--                >-->
        <!--                  {{ subCategory.name }}-->
        <!--                </span>-->
        <!--              </p>-->
        <!--              <categories-list-item-->
        <!--                :item="{-->
        <!--                  name: subCategory.name,-->
        <!--                  subCategoryId: subCategory.id,-->
        <!--                  categoryId: item.id,-->
        <!--                }"-->
        <!--                :list="subCategory.third_categories"-->
        <!--                :group="'thirdCategories'"-->
        <!--              >-->
        <!--                <template #dragItem="{ categoryItem: third_category }">-->
        <!--                  <li>-->
        <!--                    <p class="mb-0.5 flex items-center space-x-1.5">-->
        <!--                      <menu-icon-->
        <!--                        class="inline-block w-4 h-4 text-gray-600 hover:text-purple-600 cursor-move handle"-->
        <!--                      />-->
        <!--                      <span-->
        <!--                        class="cursor-pointer pb-0.5"-->
        <!--                        @click.stop="-->
        <!--                          getThirdCategories(item.id, subCategory.id)-->
        <!--                        "-->
        <!--                      >-->
        <!--                        {{ third_category.name }}-->
        <!--                      </span>-->
        <!--                    </p>-->
        <!--                  </li>-->
        <!--                </template>-->
        <!--              </categories-list-item>-->
        <!--            </div>-->
        <!--          </template>-->
        <!--        </categories-list-item>-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FolderAddIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();

function getSecondCategories(id: number): void {
  console.log(id);
}

const mainGroup = computed(() => store.state.mainGroup);
</script>

<style lang="scss" scoped>
.folders-tree-container {
  margin: 0 50px;
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
      }
      display: flex;
      justify-content: space-between;
    }
  }

  .icons-style {
    width: 40px;
    height: 40px;
    color: #ccc;
  }
}
</style>
