<template>
  <div class="services__card">
    <img
      class="services__image"
      v-bind:src="require(`@/assets/images/${card.image}`)"
      alt="icon"
    />
    <h2 class="services__title">{{ card.title }}</h2>
    <p class="services__subtitle">{{ card.subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.services__card {
  padding: 0 80px;
  border-right: 1px solid #d7d7dd;
}
.services__title {
  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
  color: #363738;
  margin: 24px 0;
}
.services__subtitle {
  font-weight: 400;
  font-size: 16px;
  color: #6b6b6c;
  line-height: 24px;
}
.services__image {
  width: 92px;
  height: 92px;
}
</style>