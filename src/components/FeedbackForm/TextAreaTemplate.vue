<template>
  <textarea
    class="form__description"
    v-bind:placeholder="input.placeholder"
    v-bind:id="input.id"
    @change="textareaHandler"
  ></textarea>
</template>

<script>
export default {
  props: {
    input: {
      type: Object,
    }
  },
  // /.PROPS
  methods: {
    textareaHandler(event) {
      this.$store.dispatch("FormHandler", {
        value: event.target.value.trim(),
        name: this.input.name,
      });
    },
  },
  // /.METHODS
};
</script>

<style lang="scss" scoped>
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
</style>