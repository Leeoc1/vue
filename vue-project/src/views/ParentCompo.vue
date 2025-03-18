<template>
  <div>
    <child-compo @send-message="sendMessage" ref="child_component" />
  </div>
</template>

<script>
import ChildCompo from "./ChildCompo.vue";
export default {
  components: { ChildCompo },
  mounted() {
    this.$refs.child_component.$refs.btn.click();
  },
};
</script>

<style></style>
