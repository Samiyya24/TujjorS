<script setup>
import { ref } from "vue";
import Category from "./Category.vue";

const isCategoryVisible = ref(false);
const toggleCategory = () => {
  isCategoryVisible.value = !isCategoryVisible.value;
};
</script>

<template>
  <div>
    <div class="shadow-[0px_-10px_20px_10px_#e2e8f0]">
      <!-- First Section -->
      <div class="bg-primary text-white py-3 w-full">
        <div class="container flex justify-between items-center">
          <div class="hidden sm:flex max-w-[207px] items-center gap-x-3">
            <img src="/icons/location.svg" alt="location icon" />
            <span class="text-lg leading-5"
              >г Ташкент, р Чиланзар, Гавхар 52</span
            >
          </div>
          <div
            class="flex max-md:flex-row-reverse items-center gap-x-6 max-md:gap-x-3"
          >
            <img
              class="max-md:block hidden w-7"
              src="/icons/rus.svg"
              alt="rus flag"
            />
            <div class="flex items-center gap-3">
              <img src="/icons/mail.svg" alt="mail icon" />
              <span class="text-lg font-medium max-md:text-base"
                >info@tujjor.uz</span
              >
            </div>
            <div>
              <a
                class="text-lg max-md:text-base font-medium flex items-center gap-3"
                href="tel:+998 (90) 123 45 67"
              >
                <img src="/icons/phone.svg" alt="phone icon" />+998 (90) 123 45
                67
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Second Section -->
      <div class="bg-[#FCF6F6] py-3">
        <div class="container relative">
          <div class="">
            <nav class="flex justify-between items-center">
              <img class="max-md:w-20" src="/icons/Logo.svg" alt="Logo icon" />
              <div class="flex items-center gap-x-2 lg:gap-x-8">
                <button
                  @click="toggleCategory"
                  class="border-primary border flex py-2 px-3 items-center gap-x-2 text-primary"
                >
                  <img src="/icons/category.svg" alt="category icon" />Категории
                  <img
                    :class="{ 'rotate-180': isCategoryVisible }"
                    src="/icons/down.svg"
                    alt="down icon"
                    class="transition-transform duration-300"
                  />
                </button>
                <div class="flex relative max-md:hidden">
                  <input
                    class="border-primary lg:w-[450px] w-[210px] rounded-l-lg pr-10 focus:border-primary focus:ring-0"
                    type="text"
                    placeholder="Поиск..."
                  />
                  <img
                    class="absolute lg:right-12 right-7 top-3"
                    src="/icons/photo.svg"
                    alt="photo icon"
                  />
                  <img
                    class="bg-primary p-2 rounded-r-lg"
                    src="/icons/search.svg"
                    alt="search icon"
                  />
                </div>
                <img src="/icons/star.svg" alt="star icon" />
                <img src="/icons/cart.svg" alt="cart icon" />
                <img
                  class="hidden lg:block"
                  src="/icons/QR.svg"
                  alt="Tujjor QR icon"
                />
                <img src="/icons/user.svg" alt="user icon" />
                <div
                  class="max-md:hidden flex gap-x-1  items-center text-lg font-medium"
                >
                  <img src="/icons/rus.svg" alt="rus flag" />
                  <p class="max-md:hidden">py</p>
                </div>
              </div>
            </nav>
            <div class="hidden max-sm:flex justify-between items-center mt-4">
              <div class="flex relative">
                <input
                  class="border-primary lg:w-[450px] w-[288px] rounded-l-lg pr-14 focus:border-primary focus:ring-0"
                  type="text"
                  placeholder="Поиск..."
                />
                <img
                  class="absolute lg:right-12 right-14 top-3"
                  src="/icons/photo.svg"
                  alt="photo icon"
                />
                <img
                  class="bg-primary p-2 rounded-r-lg"
                  src="/icons/search.svg"
                  alt="search icon"
                />
              </div>
              <img src="/icons/burger.svg" alt="burger icon" />
            </div>
          </div>
          <!-- Transition for Category Component -->
          <transition name="slide-fade" mode="out-in">
            <Category
              v-if="isCategoryVisible"
              class="absolute z-10 left-0 w-full"
            />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Add any additional styling if necessary */
.rotate-180 {
  transform: rotate(180deg);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10%);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}
</style>
