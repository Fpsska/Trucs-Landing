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
.gallary__card {
  display: flex;
  flex-direction: column;
}
.gallary__description {
  text-decoration: underline;
}
.gallary__image {
  object-fit: cover;
  width: 175px;
  height: 135px;
  margin-bottom: 16px;
}
</style>