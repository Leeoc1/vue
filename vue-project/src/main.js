import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";
import i18nPlugin from "./plugins/i18n";
import store from "./store";

const app = createApp(App);
const i18nStrings = {
  en: {
    hi: "Hello!",
  },
  ko: {
    hi: "안녕하세요!",
    where_are_you_from: "어디사냐",
    im_upset: "ㅈ같노",
  },
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
app.mount("#app");
