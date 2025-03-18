<template>
  <div>
    <select v-model="city">
      <option value="01">서울</option>
      <option value="02">부산</option>
      <option value="064">제주</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "064",
    };
  },
};
</script>

<style></style>
