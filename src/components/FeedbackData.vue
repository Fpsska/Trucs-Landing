<template>
  <div v-if="isFormVisible">
    <div class="data__section">
      <h2 class="data__title title">Описание задачи</h2>
      <p class="data__description subtitle">{{ FormTemplate.text }}</p>
    </div>
    <!-- /.field 1 -->
    <div class="data__task task">
      <h2 class="task__title title">Техническое задание</h2>
      <div class="task__wrapper">
        <img
          class="task__icon"
          v-bind:src="require(`@/assets/images/document.svg`)"
          alt="document"
        />
        <a class="task__description" href="#">{{ FormTemplate.filename }}</a>
      </div>
    </div>
    <!-- /.field 2 -->
    <div class="data__gallery gallary">
      <h2 class="gallary__title title">Фотографии товара</h2>
      <div class="gallary__images">
        <gallery-card
          v-for="card in galleryCards"
          v-bind:key="card.id"
          v-bind:card="card"
        ></gallery-card>
      </div>
      <!-- /.field 3 -->
      <button class="data__button" @click.prevent="ValidateForm">
        Подтвердить информацию
      </button>
    </div>
  </div>
  <h2 v-else class="data__text">Здесь могла бы быть ваша информация! Заполните форму выше ;)</h2>
</template>

<script>
import GalleryCard from "@/components/GalleryCard";
import { mapState } from "vuex";

export default {
  components: {
    "gallery-card": GalleryCard,
  },
  // /.COMPONENTS
  methods: {
    ValidateForm() {
      alert("Данные были успешно отправлены на сервер!");
    },
  },
  // /.METHODS
  computed: {
    ...mapState({
      galleryCards: "GalleryItems",
      FormTemplate: "FormTemplate",
      isFormVisible: "isFormVisible"
    }),
  },
  // /.COMPUTED
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
.task__icon {
  width: 15px;
  height: 20px;
  object-fit: cover;
}
</style>