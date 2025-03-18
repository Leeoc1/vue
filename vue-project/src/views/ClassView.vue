<template>
  <div
    class="container"
    v-bind:class="{
      active: isActive,
      'text-red': hasError,
    }"
  >
    True False 클래스 바인딩
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 200px;
}
.active {
  background-color: yellow;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
