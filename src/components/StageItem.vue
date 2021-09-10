<template>
  <div class="stage__item">
    <img
      class="stage__image"
      v-bind:src="require(`@/assets/images/${stage.image}`)"
      alt="stage"
    />
    <ul class="stage__text">
      <li class="stage__title title">
        <a class="stage__link btn" href="#">{{ stage.title }}</a>
      </li>
      <li class="stage__subtitle subtitle">
        <span class="stage__link">{{ stage.subtitle }}</span>
      </li>
    </ul>
    <div class="stage">
      <div class="stage__circle">
        <span class="stage__number">{{ stage.number }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stage: {
      type: Object,
    },
  },
};
</script>
<style  lang="scss" scoped>
.stage__item {
  position: relative;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  margin-bottom: 24px;
  padding: 32px 96px;
  &:last-child {
    margin-bottom: 0;
  }
}
.stage__image {
  margin-right: 56px;
  width: 330px;
  min-height: 180px;
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
  box-shadow: -10px 0px 5px 0px rgba(34, 60, 80, 0.2) inset;
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