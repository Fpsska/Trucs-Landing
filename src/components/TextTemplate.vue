<template>
  <article class="text">
    <h1 class="title title-big">{{ element.title }}</h1>
    <p class="subtitle">{{ element.subtitle }}</p>
  </article>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.text {
  max-width: 520px;
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
</style>