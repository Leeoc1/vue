<template>
  <div>
    <h2>{{ $translate("ko.hi") }}</h2>
    <!--$translate 로 사용-->
    <h2>{{ i18n.ko.hi }}</h2>
    <!--$inject 로 사용-->
    <h2>{{ i18n.ko.where_are_you_from }}</h2>
    <h2>{{ i18n.ko.im_upset }}</h2>
  </div>
</template>

<script>
export default {
  inject: ["i18n"], //provide로 전달된 i18n을 inject로 사용
  mounted() {
    console.log(this.i18n);
  },
};
</script>

<style></style>
