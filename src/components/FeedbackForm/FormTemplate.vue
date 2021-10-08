<template>
  <text-area
    v-for="input in FormInputs.slice(0, 1)"
    v-bind:key="input.id"
    v-bind:input="input"
  ></text-area>
  <!-- /.field 1 -->
  <form-input
    v-for="input in FormInputs.slice(1, 2)"
    v-bind:key="input.id"
    v-bind:input="input"
  ></form-input>
  <!-- /.field 2 -->
  <form-input
    v-for="input in FormInputs.slice(2, 3)"
    v-bind:key="input.id"
    v-bind:input="input"
  ></form-input>
  <!-- /.field 3 -->
  <button class="form__button" @click.prevent="submitForm">
    Отправить заявку
  </button>
</template>

<script>
import InputFormTemplate from "@/components/FeedbackForm/InputFormTemplate";
import TextAreaTemplate from "@/components/FeedbackForm/TextAreaTemplate";
import { mapState } from "vuex";

export default {
  components: {
    "form-input": InputFormTemplate,
    "text-area": TextAreaTemplate,
  },
  // /.COMPONENTS
  props: {
    inputs: {
      type: Object,
    },
  },
  // /.PROPS
  computed: {
    ...mapState({
      FormInputs: "FormInputItems",
      isFormVisible: "isFormVisible",
      FormTemplate: "FormTemplate",
    }),
  },
  // /.COMPUTED
  methods: {
    submitForm() {
      if (
        this.FormTemplate.text === "" &&
        this.FormTemplate.filename === "" &&
        this.FormTemplate.imagename === ""
      ) {
        alert("Заполните хотя бы одно поле ввода!");
      } else {
        this.$store.commit("formVisibleMutatiaon", true);
      }
    },
  },
  // /.METHODS
};
</script>

<style lang="scss" scoped></style>
