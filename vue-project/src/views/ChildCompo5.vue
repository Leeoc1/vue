<template>
  <div>
    <button @click="childFnc" ref="btn">자식 컴포넌트 데이터 변경</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "메세지",
    };
  },
  methods: {
    childFnc() {
      this.msg = "변경된 메세지";
    },
  },
};
</script>

<style></style>
