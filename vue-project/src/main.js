// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";
import i18nPlugin from "./plugins/i18n";
import store from "./store";

const app = createApp(App);
const i18nStrings = {
  en: { hi: "Hello!" },
  ko: { hi: "안녕하세요!", where_are_you_from: "어디사냐", im_upset: "ㅈ같노" },
};
app.use(store);
app.use(router);
app.mixin(mixins);
app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});
app.use(i18nPlugin, i18nStrings);

function initializeKakao() {
  if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init("68581b044ed33e146fa029bab199c384");
    console.log("Kakao SDK 초기화 완료:", window.Kakao.isInitialized());
  } else if (!window.Kakao) {
    console.error("Kakao SDK가 로드되지 않았습니다.");
  }
}

document.addEventListener("DOMContentLoaded", initializeKakao);
app.mount("#app");
