<template>
  <div class="advantage__card">
    <img
      class="advantage__image"
      v-bind:src="require(`@/assets/images/${skill.image}`)"
      alt="icon"
    />
    <div class="advantage__text">
      <div class="advantage__title title">{{ skill.title }}</div>
      <div class="advantage__subtitle subtitle">{{ skill.subtitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.advantage__card {
  width: 39%;
  display: flex;
  align-items: center;
  margin-bottom: 65px;
}
.advantage__image {
  object-fit: cover;
  width: 80px;
  height: 80px;
}
.advantage__text {
  margin-left: 40px;
}
.advantage__title {
  color: #000;
}
.advantage__subtitle {
  margin: 20px 0 0 0;
}
</style>