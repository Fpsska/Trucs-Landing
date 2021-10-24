<template>
  <a class="btn" href="#" v-bind:class="color">{{ button.text }}</a>
</template>

<script>
export default {
  props: {
    button: {
      type: Object,
    },
    color: {
      type: String,
      default: "",
      validator(value) {
        return ["", "white"].includes(value);
      },
    },
  },
};
</script>

<style lang="scss">
.btn.btn {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #363738;
  background-color: transparent;
  padding: 0 !important;
}
.white {
  color: #fff;
}
</style>