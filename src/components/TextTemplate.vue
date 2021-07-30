<template>
  <article class="text">
    <h1 class="title title-big">{{ this.title }}</h1>
    <p class="subtitle">{{ this.subtitle }}</p>
  </article>
</template>

<script>
export default {
  data() {
    return {
      id: 1,
      title: "Поставщик Дальнего Востока",
      subtitle:
        "Наши клиенты получают полный спектр услуг по работе с Китаем. Начиная с подбора производителя заканчивая доставкой товара до двери. Настолько прозрачных сделок с Китаем вы еще не осуществляли.",
      // TextTemplate: [
      //   {
      //     id: 1,
      //     title: "Поставщик Дальнего Востока",
      //     subtitle:
      //       "Наши клиенты получают полный спектр услуг по работе с Китаем. Начиная с подбора производителя заканчивая доставкой товара до двери. Настолько прозрачных сделок с Китаем вы еще не осуществляли.",
      //   },
      // ],
    };
  },
};
</script>

<style lang="scss">
.text {
  max-width: 520px;
}
.title-big {
  font-weight: 600; 
  font-size: 48px !important;
  color: #363738;
  line-height: 60px !important;
}

</style>