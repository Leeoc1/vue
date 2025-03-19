<template>
  <div>
    <h1>Item Length: {{ itemLength }}</h1>
  </div>
</template>

<script>
export default {
  inject: ["itemLength"],
  mounted() {
    console.log(this.itemLength);
  },
};
</script>

<style></style>
