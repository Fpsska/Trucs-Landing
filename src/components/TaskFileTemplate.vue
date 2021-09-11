<template>
  <icon-template v-bind:task="task.icon"></icon-template>
  <!-- the name must equal name uploaded file -->
  <a class="task__description" href="#">{{ task.title }}</a>
</template>

<script>
import IconTemplate from "@/components/IconTemplate";

export default {
  props: {
    task: {
      type: Object,
    },
  },
  data() {
    return {
      taskFile: "",
    };
  },
  components: {
    "icon-template": IconTemplate,
  },
};
</script>

<style>
</style>