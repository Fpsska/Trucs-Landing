<template>
  <button class="btn">{{ text }}</button>
</template>

<script>
export default {
  data() {
    return {
      text: "Узнать больше",
    };
  },
};
</script>

<style lang="scss">
    .btn {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        color: #363738;
        border-bottom: 2px solid #FFCE50;
        background-color: transparent;
        padding: 0 !important;
    }
</style>