<template>
  <swiper
    @slideChange="onSlideChange"
    :slides-per-view="1"
    :pagination="{ clickable: true }"
  >
    <swiper-slide>
      <slider-item
        v-for="item in items"
        v-bind:key="item.id"
        v-bind:item="item"
      ></slider-item>
    </swiper-slide>
    <swiper-slide>
      <slider-item
        v-for="item in items"
        v-bind:key="item.id"
        v-bind:item="item"
      ></slider-item>
    </swiper-slide>
    <swiper-slide>
      <slider-item
        v-for="item in items"
        v-bind:key="item.id"
        v-bind:item="item"
      ></slider-item>
    </swiper-slide>
  </swiper>
</template>

<script>
// import Swiper core and required modules
import SwiperCore, { Pagination, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import SliderItem from "@/components/SliderItem";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper modules
SwiperCore.use([Pagination, A11y]);

// Import Swiper styles
export default {
  components: {
    swiper: Swiper,
    "swiper-slide": SwiperSlide,
    "slider-item": SliderItem,
  },
  props: {
    items: {
      type: Array,
    },
  },
  methods: {
    onSlideChange(swiper) {
      console.log(swiper);
    },
  },
};
</script>


<style lang="scss">
.swiper-slide {
  display: flex;
}
.swiper-container {
  padding-bottom: 100px;
}
.swiper-pagination-bullets {
  :nth-child(2) {
    margin: 0 10px !important;
  }
}
.swiper-pagination-bullet {
  color: #e9e9ec;
  width: 16px;
  height: 16px;
  background: #929294;
}
.swiper-pagination-bullet-active {
  background: #0b7572;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    border: 1px solid #0b7572;
    border-radius: 100%;
    width: 28px;
    height: 28px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>