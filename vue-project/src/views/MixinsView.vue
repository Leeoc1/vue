<template>
  <h3>콘솔에 리스트 값 표시됨</h3>
</template>
<script>
import ApiMixin from "../api";
export default {
  mixins: [ApiMixin],
  data() {
    return {
      productList: [],
    };
  },
  async mounted() {
    this.productList = await this.$callAPI(
      " https://37dccbad-6045-48e7-a50d-3a300bb6039e.mock.pstmn.io/list",
      "get"
    );
    console.log(this.productList);
  },
};
</script>
