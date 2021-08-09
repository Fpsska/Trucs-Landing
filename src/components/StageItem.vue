<template>
  <div class="supply__item">
    <img
      class="supply__image"
      v-bind:src="require(`@/assets/images/${supply.image}`)"
      alt="stage"
    />
    <ul class="supply__text">
      <li class="supply__title title">
        <a class="supply__link btn" href="#">{{ supply.title }}</a>
      </li>
      <li class="supply__subtitle subtitle">
        <a class="supply__link" href="#">{{ supply.subtitle }}</a>
      </li>
    </ul>

    <div class="stage">
      <div class="stage__cicle">
        <span class="stage__number">{{ supply.number }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    supply: {
      type: Object,
    },
  },
};
</script>
<style  lang="scss" scoped>
.supply__item {
  position: relative;
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  margin-bottom: 24px;
  padding: 32px 96px;
  &:last-child {
    margin-bottom: 0;
  }
}
.supply__image {
  margin-right: 56px;
}
.stage {
  position: absolute;
  left: -4%;
}
.stage__cicle {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 108px;
  background: #fff;
  border-radius: 100%;
  box-shadow: 0px 0px 15px -10px rgba(34, 60, 80, 0.2) inset;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100em;
    width: 68px;
    height: 68px;
    z-index: 1;
    background: #0b7572;
  }
}

.stage__number {
  color: #fff;
  font-size: 38px;
  z-index: 1;
}
</style>