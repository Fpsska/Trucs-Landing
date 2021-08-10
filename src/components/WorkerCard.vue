<template>
  <div class="worker__card">
    <img
      class="worker__image"
      v-bind:src="require(`@/assets/images/${worker.image}`)"
      alt="worker"
    />
    <div class="worker__content">
      <ul class="worker__text">
        <li class="worker__title title">
          <a class="worker__link" href="#">{{ worker.title }}</a>
        </li>
        <li class="worker__subtitle subtitle btn">
          <a class="worker__link" href="#">{{ worker.subtitle }}</a>
        </li>
      </ul>
      <ul class="worker__social social">
        <li class="social__item">
          <a
            class="social__link"
            href="https://www.instagram.com/"
            target="_black"
          >
            <svg class="social__icon">
              <use xlink:href="#instagram"></use>
            </svg>
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="https://vk.com/" target="_black">
            <svg class="social__icon social__icon_vk">
              <use xlink:href="#vk"></use>
            </svg>
          </a>
        </li>
        <li class="social__item">
          <a
            class="social__link"
            href="https://ru.linkedin.com/"
            target="_black"
          >
            <svg class="social__icon">
              <use xlink:href="#linkedin"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    worker: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.subtitle {
  margin: 16px 0 32px 0;
}
.worker__card {
  display: flex;
  width: 590px;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 32px 83px;
  margin-right: 30px;
  position: relative;
  margin-bottom: 24px;
  &:nth-child(2n) {
    margin-right: 0;
  }
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 51px;
    top: 0;
    bottom: auto;
    left: 0;
    right: auto;
    background-color: #0b7572;
    border-radius: 10px 0 0 10px;
  }
}
.worker__image {
  margin-right: 40px;
}
.social {
  display: flex;
  align-items: center;
}
.social__item {
  margin-right: 20px;
}
.social__icon {
  width: 22px;
  height: 22px;
  transition: .25s linear;
  transform: scale(1);
  &:hover {
      transform: scale(1.2);
  }
}
.social__icon_vk {
  width: 33px;
}
</style>