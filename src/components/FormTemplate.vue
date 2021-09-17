<template>
  <textarea class="form__description" placeholder="Опишите задачу"></textarea>
  <!-- /.field 1 -->
  <div class="form__input input">
    <label class="input__label">
      <input
        class="input__element"
        type="file"
        name="fileUpload"
        multiple
        ref="fileInput"
      />
      <span>
        <icon-template v-bind:form="'add-file'"></icon-template>
      </span>
      <span class="input__title">Прикрепите ТЗ</span>
    </label>
    <div class="form__preview preview">
      <strong class="preview__text">Выбранные файлы:</strong>
      <span class="preview__name">файл не выбран</span>
    </div>
  </div>
  <!-- /.field 2 -->
  <div class="form__input input">
    <label class="input__label">
      <input
        class="input__element"
        type="file"
        name="imageUpload"
        accept="image/*"
      />
      <span>
        <icon-template v-bind:form="'add-image'"></icon-template>
      </span>
      <span class="input__title">Добавьте фото товара</span>
    </label>
    <div class="form__preview preview">
      <strong class="preview__text">Выбранные файлы:</strong>
      <span class="preview__name">файл не выбран</span>
    </div>
  </div>
  <!-- /.field 3 -->
  <button class="form__button">Отправить заявку</button>
</template>

<script>
//import InputFormTemplate from "@/components/InputFormTemplate";
import IconTemplate from "@/components/IconTemplate";

export default {
  components: {
    //"form-input": InputFormTemplate,
    "icon-template": IconTemplate,
  },
  data() {
    return {
      fields: {
        description: "",
        file: "",
        image: "",
      },
    };
  },
  methods: {
    // sumbitForm() {
    //   this.$emit("submit", this.fields);
    //   Object.keys(this.fields).forEach((key) => {
    //     this.fields[key] = "";
    //   });
    // },
  },
  props: {
    inputs: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.form__input {
  position: relative;
}
.form__description {
  color: #fff;
  padding: 10px 10px 15px 10px;
  margin-bottom: 15px;
  min-height: 223px;
  line-height: 45px;
  background-image: linear-gradient(
    transparent,
    transparent 44px,
    rgba(255, 255, 255, 0.2) 0
  );
  background-size: 100% 45px;
  background-color: transparent;
  resize: none;
  outline: none;
  border: none;
}
.form__description::placeholder {
  color: #fff;
}
// ./form
.input {
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 25px;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
}
.input__element {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}
.input__title {
  margin-left: 16px;
}
.input__label {
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
// ./input
.preview {
  margin-top: 20px;
}
.preview__text {
  margin-right: 5px;
  color: #fff;
  font-weight: 300;
}
.preview__name {
  color: #ccc;
  font-weight: 300;
}
</style>
