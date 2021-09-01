<template>
  <div class="gallary__card">
    <img
      class="gallary__image"
      v-bind:src="require(`@/assets/images/${card.image}`)"
      alt="image"
    />
    <a class="gallary__description" href="#">{{ card.text }}</a>
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
.gallary__description {
  text-decoration: underline;
}
</style>