<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      msg: "자식 컴포넌트가 보낸 메세지",
    };
  },
  mounted() {
    this.$emit("send-message", this.msg);
  },
};
</script>

<style></style>
