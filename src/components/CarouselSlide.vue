<template>
  <div class="slider__card">
    <div class="slider__section_top">
      <a href="#">
        <img
          class="slider__image"
          v-bind:src="require(`@/assets/images/${slide.image}`)"
          alt="image"
        />
      </a>
    </div>
    <div class="slider__section_btm">
      <ul class="slider__description">
        <li class="slider__title title">
          <a href="#"> {{ slide.title }}</a>
        </li>
        <li class="slider__subtitle subtitle">
          <a href="#">{{ slide.subtitle }}</a>
        </li>
        <li class="slider__price">
          <a href="#" v-bind:class="{ btn: !isActive }"
            >{{ slide.price }} руб</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    slide: {
      type: Object,
    },
    isActive: {
      type: Boolean
    }
  },
};
</script>

<style lang="scss" scoped>
.slider__card {
  width: 395px;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  margin-right: 30px;
}
.slider__section_top {
  min-height: 245px;
}
.slider__description {
  text-align: start;
  padding: 24px 0 24px 32px;
}
.subtitle {
  margin: 16px 0 32px 0;
}
</style>