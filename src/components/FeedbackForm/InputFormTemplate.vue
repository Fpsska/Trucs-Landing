<template>
  <div class="form__input input">
    <label class="input__label">
      <input
        class="input__element"
        v-bind:id="input.id"
        v-bind:accept="input.accept"
        v-bind="input.options"
        @change="inputHandler"
      />
      <span>
        <icon-template v-bind:form="input.inputImage"></icon-template>
      </span>
      <span class="input__title">{{ input.title }}</span>
    </label>
    <div class="form__preview preview">
      <strong class="preview__text">Выбранные файлы:</strong>
      <span class="preview__name">файл не выбран</span>
    </div>
  </div>
</template>

<script>
import IconTemplate from "@/components/IconTemplate";

export default {
  components: {
    "icon-template": IconTemplate,
  },
  // /.COMPONENTS
  props: {
    input: {
      type: Object,
    },
  },
  // /.PROPS
  methods: {
    inputHandler(event) {
      const uploadedFile = event.target.files[0];
      this.$store.dispatch("FormHandler", {
        file: uploadedFile,
        name: this.input.options.name,
      });
    },
  },
  // /.METHODS
};
</script>

<style lang="scss" scoped>
.form__input {
  position: relative;
}
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