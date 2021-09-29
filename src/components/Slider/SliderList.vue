<template>
  <swiper
    @slideChange="onSlideChange"
    :pagination="{ clickable: true }"
    :breakpoints="breakpoints"
    :spaceBetween="30"
  >
    <swiper-slide>
      <slider-item
        v-for="item in items.slice(0, 1)"
        v-bind:key="item.id"
        v-bind:item="item"
      ></slider-item>
    </swiper-slide>
    <!-- /.slide 1 -->
    <swiper-slide>
      <slider-item
        v-for="item in items.slice(1, 2)"
        v-bind:key="item.id"
        v-bind:item="item"
      ></slider-item>
    </swiper-slide>
    <!-- /.slide 2 -->
    <swiper-slide>
      <slider-item
        v-for="item in items.slice(2, 3)"
        v-bind:key="item.id"
        v-bind:item="item"
      ></slider-item>
    </swiper-slide>
    <!-- /.slide 3 -->
    <swiper-slide>
      <slider-item
        v-for="item in items.slice(0, 1)"
        v-bind:key="item.id"
        v-bind:item="item"
      ></slider-item>
    </swiper-slide>
    <!-- /.slide 4 -->
    <swiper-slide>
      <slider-item
        v-for="item in items.slice(1, 2)"
        v-bind:key="item.id"
        v-bind:item="item"
      ></slider-item>
    </swiper-slide>
    <!-- /.slide 5 -->
    <swiper-slide>
      <slider-item
        v-for="item in items.slice(2, 3)"
        v-bind:key="item.id"
        v-bind:item="item"
      ></slider-item>
    </swiper-slide>
    <!-- /.slide 6 -->
  </swiper>
</template>



<script>
// import Swiper core and required modules
import SwiperCore, { Pagination, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import SliderItem from "@/components/Slider/SliderItem";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper modules
SwiperCore.use([Pagination, A11y]);

// Import Swiper styles
export default {
  data() {
    return {
      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      },
    };
  },
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
  height: auto;
}
.swiper-container {
  padding-bottom: 100px;
}
.swiper-pagination-bullets {
  :not(:last-child){
    margin: 0 6px !important;
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