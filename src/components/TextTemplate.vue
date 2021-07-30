<template>
  <article class="text">
    <h1 class="title">{{ title }}</h1>
    <p class="subtitle">{{ subtitle }}</p>
  </article>
</template>

<script>
export default {
  data() {
    return {
      title: "Поставщик Дальнего Востока",
      subtitle:
        "Наши клиенты получают полный спектр услуг по работе с Китаем. Начиная с подбора производителя заканчивая доставкой товара до двери. Настолько прозрачных сделок с Китаем вы еще не осуществляли.",
    };
  },
};
</script>

<style lang="scss">
.text {
  max-width: 520px;
}
.title {
  font-weight: 600;
  font-size: 48px;
  color: #363738;
  line-height: 60px;
}
.subtitle { 
  font-weight: 400;
  font-size: 16px;
  color: #6B6B6C;
  line-height: 24px;
  margin: 40px 0;
}
</style>