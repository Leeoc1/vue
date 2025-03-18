<template>
  <div>
    <input type="text" v-model="textValue" />
    <button type="button" :disabled="textValue == ''">제출</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textValue: "",
    };
  },
};
</script>

<style></style>
