<template>
  <div>
    <child-compo-2 @send-message="sendMessage" ref="child_component" />
  </div>
</template>

<script>
import ChildCompo2 from "./ChildCompo2.vue";
export default {
  components: { ChildCompo2 },
  mounted() {
    this.$refs.child_component.callFromParent();
  },
};
</script>

<style></style>
