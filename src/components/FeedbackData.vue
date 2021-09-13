<template>
  <div class="data__section">
    <h2 class="data__title title">Описание задачи</h2>
    <p class="data__description subtitle">{{ fields.description }}</p>
  </div>
  <!-- /.field 1 -->
  <div class="data__task task">
    <h2 class="task__title title">Техническое задание</h2>
    <div class="task__wrapper">
      <!-- <icon-template v-bind:task="task.icon"></icon-template> -->
      <a class="task__description" href="#"></a>
    </div>
  </div>
  <!-- /.field 2 -->
  <div class="data__gallery gallary">
    <h2 class="gallary__title title">Фотографии товара</h2>
    <div class="gallary__images">
      <!-- <gallery-card
        v-for="card in cards"
        v-bind:key="card.id"
        v-bind:card="card"
      ></gallery-card> -->
    </div>
  </div>
  <!-- /.field 3 -->
  <button class="data__button">Подтвердить информацию</button>
</template>

<script>
// import IconTemplate from "@/components/IconTemplate";
//import GalleryCard from "@/components/GalleryCard";

export default {
  props: {
    // cards: {
    //   type: Array,
    // },
    fields: {
      type: Object,
    },
  },
  components: {
    // "icon-template": IconTemplate,
    //"gallery-card": GalleryCard,
  },
};
</script>

<style lang="scss" scoped>
.task__description {
  text-decoration: underline;
  margin-left: 16px;
}
.task__wrapper {
  display: flex;
  align-items: center;
}
.task {
  margin: 40px 0 36px 0;
}
.task__title {
  margin-bottom: 16px;
}
</style>