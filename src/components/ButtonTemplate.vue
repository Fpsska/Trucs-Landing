<template>
  <a class="btn" href="#">{{ button.text }}</a>
</template>

<script>
export default {
  props: {
    button: {
      type: Object
    }
  },
};
</script>

<style lang="scss">
.btn {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #363738;
  background-color: transparent;
  padding: 0 !important;
  border-bottom: 3px solid #ffce50;
}
</style>