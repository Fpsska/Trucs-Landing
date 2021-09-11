<template>
  <div class="voting__card">
    <label class="title"
      >{{ vote.title }}
      <input class="voting__input" type="radio" name="activity" />
      <p class="voting__subtitle subtitle">{{ vote.subtitle }}</p>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    vote: {
      type: Object,
    },
  },
};
</script>



<style lang="scss" scoped>
.voting__card {
  flex: 0 1 54%;
  display: flex;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #ffffff;
  padding: 40px 125px 40px 95px;
  position: relative;
  transition: .2s linear;
  &::before {
    content: url(../assets/images/triangle.svg);
    position: absolute;
    top: auto;
    bottom: 0;
    left: auto;
    right: 0;
    height: 62px;
  }
  &:nth-child(2) {
    margin: 16px 0;
  }
  &:hover {
    border: 1px solid #0B7572;
  }
}
.voting__text {
  margin-left: 32px;
}
.voting__subtitle {
  margin: 20px 0 0 0 !important;
}
.voting__input {
  min-width: 24px;
  min-height: 24px;
  margin-right: 32px;
  position: absolute;
  left: 5%;
  top: 24%;
}
</style>