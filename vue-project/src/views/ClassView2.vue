<template>
  <div class="container" v-bind:class="[activeClass, errorClass]">
    클래스 바인딩 둘다 css지정
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass: "active",
      errorClass: "text-red",
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
