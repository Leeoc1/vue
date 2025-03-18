<template>
  <div v-bind:style="[bassStyle, addStyle]">스타일 바인딩2</div>
</template>

<script>
export default {
  data() {
    return {
      bassStyle: "background-color:yellow;width:100%;height:200px;",
      addStyle: "color:red;font-weight:bold;",
    };
  },
};
</script>

<style></style>
