<template>
  <div class="slider__card">
    <div class="slider__section_top">
      <a href="#">
        <img
          class="slider__image"
          v-bind:src="require(`@/assets/images/${item.image}`)"
          alt="image"
        />
      </a>
    </div>
    <div class="slider__section_btm">
      <ul class="slider__description">
        <li class="slider__title title">
          <a href="#"> {{ item.title }}</a>
        </li>
        <li class="slider__subtitle subtitle">
          <a class="slider__link" href="#">{{ item.subtitle }}</a>
        </li>
        <li class="slider__price">
          <a class="slider__link btn" href="#">{{ item.price }} руб</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.subtitle {
  margin: 16px 0 32px 0;
}
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
  padding: 24px 32px;
}
.slider__image {
  object-fit: cover;
  width: 100%;
  height: 247px;
}
</style>