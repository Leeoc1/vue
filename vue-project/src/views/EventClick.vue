<template>
  <div>
    <button type="button" @click="setCount(100)">set</button>
    <br />
    <span>100 씩 증가 {{ counter }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    setCount(counter) {
      this.counter += counter;
    },
  },
};
</script>

<style></style>
