<template>
  <div class="partners__card">
    <ul class="partners__content">
      <li class="partners__item">
        <img
          class="partners__image"
          v-bind:src="require(`@/assets/images/${partner.image}`)"
          alt="trademark"
        />
      </li>
      <li class="partners__item">
        <a class="partner__title title" href="#">{{ partner.title }}</a>
      </li>
      <li class="partners__item">
        <a class="partners__title subtitle" href="#">{{ partner.subtitle }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    partner: {
      type: Object,
    },
  },
};
</script>


<style lang="scss" scoped>
.partners__card {
  border-right: 1px solid #d7d7dd;
  width: 25%;
  margin-bottom: 95px;
  :nth-child(4) {
    border-right: none;
  }
  :nth-child(8) {
    border-right: none;
  }
  &:nth-child(n+5) {
    margin-bottom: 0;
  }
}
.partners__image {
  transition: .25s linear;
  transform: scale(1);
  &:hover {
    transform: scale(1.2);
  }
}
.partners__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 10px;
}
.partners__content > * {
  flex: 1 1 100%;
}
.partners__item {
  &:nth-child(1) {
    min-height: 96px;
  }
  &:nth-child(2) {
    margin: 32px 0 14px 0;
  }
}
</style>