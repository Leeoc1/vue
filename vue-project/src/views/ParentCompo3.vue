<template>
  <div>
    <child-compo-3 @send-message="sendMessage" ref="child_component" />
    <button @click="changeChildData">데이터 변경</button>
  </div>
</template>

<script>
import ChildCompo3 from "./ChildCompo3.vue";
export default {
  components: { ChildCompo3 },
  methods: {
    changeChildData() {
      this.$refs.child_component.msg = "부모 컴포넌트가 변경한 데이터";
    },
  },
};
</script>

<style></style>
