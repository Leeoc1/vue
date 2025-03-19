<template>
  <div>
    <child-compo-5 ref="child_component" />
    <button @click="checkChild">자식 컴포넌트 데이터 조회</button>
  </div>
</template>

<script>
import ChildCompo5 from "./ChildCompo5.vue";
export default {
  components: { ChildCompo5 },
  computed: {
    msg() {
      return this.$refs.child_component.msg;
    },
  },
  methods: {
    checkChild() {
      alert(this.msg);
    },
  },
};
</script>

<style></style>
