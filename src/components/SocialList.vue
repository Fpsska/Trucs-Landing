<template>
  <ul class="social__list">
    <li class="social__item">
      <icon-template v-bind:name="social.name"></icon-template>
      <div class="social__information">
        <span class="social__text subtitle">{{ social.title }}</span>
        <a class="social__text title" href="tel:+7 8422 99 666 5">
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
  margin-right: 36px;
}
.social__information {
  display: flex;
  flex-direction: column;
}
.subtitle {
  margin: 0;
}
</style>