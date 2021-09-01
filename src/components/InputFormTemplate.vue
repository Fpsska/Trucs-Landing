<template>
  <div class="form__input input">
    <label class="input__label">
      <input
        class="input__element"
        v-bind:type="input.type"
        v-bind="input.options"
      />
      <span class="input__icon">
        <icon-template v-bind:form="input.inputImage"></icon-template>
      </span>
      <span class="input__title">{{ input.title }}</span>
    </label>
  </div>
</template>

<script>
import IconTemplate from "@/components/IconTemplate";

export default {
  props: {
    input: {
      type: Object,
    },
  },
  components: {
    "icon-template": IconTemplate,
  },
};
</script>

<style lang="scss" scoped>
.form__input {
  position: relative;
}
.input {
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  &:nth-child(1) {
    margin-bottom: 25px;
  }
}
.input__element {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}
.input__label {
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
.input__icon {
  margin-right: 16px;
}
</style>