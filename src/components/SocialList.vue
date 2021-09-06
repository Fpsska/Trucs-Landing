<template>
  <ul class="social__list">
    <li class="social__item">
      <icon-template v-bind:name="social.name"></icon-template>
      <div class="social__information">
        <span class="social__text subtitle">{{ social.title }}</span>
        <a class="social__text title" v-bind:href="social.href">
          {{ social.subtitle }}
        </a>
      </div>
    </li>
  </ul>
</template>

<script>
import IconTemplate from "@/components/IconTemplate";

export default {
  props: {
    social: {
      type: Object,
    },
  },
  components: {
    "icon-template": IconTemplate,
  },
};
</script>

<style lang="scss" scoped>
.social__list {
  margin-bottom: 44px;
}
.social__item {
  display: flex;
  align-items: center;
}
.social__icon {
  width: 32px;
  height: 32px;
  transition: 0.25s linear;
  transform: scale(1);
  &:hover {
    transform: scale(1.2);
  }
}
.social__information {
  display: flex;
  flex-direction: column;
  margin-left: 36px;
}
.subtitle {
  margin: 0;
}
</style>