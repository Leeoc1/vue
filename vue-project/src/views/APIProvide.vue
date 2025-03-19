<template>
  <div>
    <APIInject />
  </div>
</template>

<script>
import { provide } from "vue";
import APIInject from "./APIInject.vue";
export default {
  components: { APIInject },
  setup() {
    provide("title", "VUE 프로젝트");
  },
};
</script>

<style></style>
