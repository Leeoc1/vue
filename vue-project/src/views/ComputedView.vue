<template>
  <div>
    <h1>풀네임: {{ fullName }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Seunwon",
      lastName: "go",
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
};
</script>

<style></style>
