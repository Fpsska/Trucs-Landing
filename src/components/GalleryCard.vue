<template>
  <div class="gallary__card">
    <img class="gallary__image" v-bind:src="FormTemplate.imageurl"/>
    <a class="gallary__description" href="#">{{ FormTemplate.imagename }}</a>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    card: {
      type: Object,
    },
  },
  // /. PROPS
  computed: {
    ...mapState({
      FormTemplate: "FormTemplate",
    }),
  },
   // /. COMPUTED
};
</script>

<style lang="scss" scoped>
.gallary__card {
  display: flex;
  flex-direction: column;
  margin: 0 16px 16px 0;
}
.gallary__description {
  text-decoration: underline;
}
.gallary__image {
  object-fit: cover;
  width: 175px;
  height: 135px;
  margin-bottom: 6px;
}
</style>