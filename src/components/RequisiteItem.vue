<template>
  <li class="requisites__item">
    <span class="requisites__title subtitle">{{ requisites.title }}</span>
    <p class="requisites__text title">{{ requisites.text }}</p>
  </li>
</template>

<script>
export default {
  props: {
    requisites: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.subtitle {
  margin: 0;
}
.requisites__item {
  display: flex;
  text-align: justify;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e9eaf2;
  padding-bottom: 16px;
  margin-bottom: 32px;
}
.requisites__title {
  margin-right: 30px;
  flex: 0 1 27%;
  flex-shrink: 0;
}
.requisites__text {
  flex: 1 1 auto;
}
</style>
