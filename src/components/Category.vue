<template>
  <div class="bg-white my-3.5">
    <div class="grid md:grid-cols-5 grid-cols-2">
      <div class="scroll overflow-scroll col-span-1 bg-primary/20 h-[400px]">
        <div class="w-full h-full py-1">
          <div
            v-for="(category, index) in categories"
            :key="index"
            class="flex flex-col gap-5 w-full"
          >
            <p
              class="py-[10px] px-4 text-black cursor-pointer text-sm"
              @click="selectCategory(index)"
              :class="{
                'text-primary w-full bg-white font-medium':
                  selectedCategory === index,
              }"
            >
              {{ category.name }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="md:col-span-4 scroll overflow-scroll bg-white md:grid grid-cols-4 gap-5 h-[400px] px-[33px] py-[15px]"
      >
        <div
          v-if="selectedCategory !== null"
          class="md:grid grid-cols-4 gap-5 col-span-4"
        >
          <div
            v-for="(type, typeIndex) in categories[selectedCategory].type"
            :key="typeIndex"
            class="flex flex-col gap-5"
          >
            <p class="font-medium max-md:text-sm">
              {{ type }}
            </p>
            <div>
              <p
                class="text-lg font-normal text-[#666] max-md:text-sm"
                v-for="(data, dataIndex) in categories[selectedCategory]
                  .typeOfData[typeIndex]"
                :key="dataIndex"
              >
                {{ data }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import categoriesData from "../JSON/data.json";

const categories = reactive(categoriesData.categories);
const selectedCategory = ref(0);

const selectCategory = (index) => {
  selectedCategory.value = index;
};
</script>

<style lang="scss" scoped>
/* ===== Scrollbar CSS ===== */
.scroll {
  scrollbar-width: auto;
}

.scroll::-webkit-scrollbar {
  width: 10px;
}

.scroll::-webkit-scrollbar-thumb {
  background-color: #f7931e;
  border-radius: 10px;
}
</style>
