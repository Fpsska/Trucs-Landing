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
        <span class="supply__link">{{ supply.subtitle }}</span>
      </li>
    </ul>
    <div class="stage">
      <div class="stage__circle">
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
  background: #fff;
  // box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.12);
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
  width: 330px;
  object-fit: cover;
}
.stage {
  position: absolute;
  left: -4%;
  top: 50%;
  transform: translateY(-50%);
}
.stage__circle {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 108px;
  background: #fff;
  border-radius: 100%;
  // box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15) inset;
  transition: 0.2s linear;
  transform: scale(1);
  &:hover {
    transform: scale(1.1);
  }
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