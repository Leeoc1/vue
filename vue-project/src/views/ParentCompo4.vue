<template>
  <child-compo-4 @send-message="sendMessage" />
</template>

<script>
import ChildCompo4 from "./ChildCompo4.vue";
export default {
  components: { ChildCompo4 },
  methods: {
    sendMessage(data) {
      console.log(data);
    },
  },
};
</script>

<style></style>
