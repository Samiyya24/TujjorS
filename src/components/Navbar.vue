<script setup></script>

<template>
  <div class="bg-primary text-white py-3 w-full">
    <div class="container flex justify-between items-center">
      <div class="hidden sm:flex max-w-[207px] items-center gap-x-3">
        <img src="/icons/location.svg" alt="location icon" />
        <span class="text-lg leading-5">г Ташкент, р Чиланзар, Гавхар 52 </span>
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
            <img src="/icons/phone.svg" alt="phone icon" />+998 (90) 123 45 67
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-[#FCF6F6] py-3">
    <nav class="container flex justify-between items-center">
      <img class="max-md:w-20" src="/icons/Logo.svg" alt="Logo icon" />
      <div class="flex items-center gap-x-2 lg:gap-x-8">
        <button
          class="border-primary border flex py-2 px-3 items-center gap-x-2 text-primary"
        >
          <img src="/icons/category.svg" alt="category icon" />Категории
          <img src="/icons/down.svg" alt="down icon" />
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
        <img class="hidden lg:block" src="/icons/QR.svg" alt="Tujjor QR icon" />
        <img src="/icons/user.svg" alt="user icon" />
        <div
          class="max-md:hidden flex gap-x-1 w-[100px] items-center text-lg font-medium"
        >
          <img src="/icons/rus.svg" alt="rus flag" />
          <p class="max-md:hidden">py</p>
        </div>
      </div>
    </nav>
    <div class="hidden max-sm:flex container justify-between items-center mt-4">
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
      <img src="/icons/burger.svg" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Add any additional styling if necessary */
</style>
