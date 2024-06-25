<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
<template>
  <div class="container flex justify-between items-center my-5">
    <div class="lg:w-[1185px] w-[370px] lg:h-[403px] h-[150px]">
      <swiper
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper object-cover"
      >
        <swiper-slide data-hash="slide1" class="">
          <img class="" src="/public/imgs/boy.png" alt="" />
        </swiper-slide>
        <swiper-slide data-hash="slide2" class="object-cover">
          <img src="/public/imgs/flower.jpg" alt="" />
        </swiper-slide>
        <swiper-slide data-hash="slide3" class="object-cover">
          <img src="/public/imgs/model_girl.jpg" alt=""
        /></swiper-slide>
      </swiper>
    </div>
    <div class="relative hidden lg:block">
      <div
        class="bg-primary w-full h-11 absolute flex justify-center items-center"
      >
        <span class="text-white tracking-widest text-2xl">SALE</span>
      </div>
      <img src="/public/imgs/sale.png" alt="" />
    </div>
  </div>
</template>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
