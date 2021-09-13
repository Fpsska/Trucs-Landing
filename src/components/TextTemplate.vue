<template>
  <article class="text">
    <h1 class="title" v-bind:class="styles">{{ element.title }}</h1>
    <p class="subtitle">{{ element.subtitle }}</p>
  </article>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
    },
    styles: {
      type: String,
      default: "",
      validator(value) {
        return ["", "title-big", "title-num", "title-form"].includes(
          value
        );
      },
    },
  },
};
</script>

<style lang="scss">
.text {
  max-width: 520px;
  padding: 5px 0;
}
.title-big {
  font-weight: 600;
  font-size: 48px !important;
  color: #363738;
  line-height: 60px !important;
}
.title-num {
  line-height: 81px;
  letter-spacing: 30%;
  font-size: 54px;
}
.title-white {
  color: #fff;
}
</style>