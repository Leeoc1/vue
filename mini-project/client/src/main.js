import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);
app.use(router);
app.mixin(mixins);
app.use(store);
app.use(VueSweetalert2);
app.mount("#app");

window.Kakao.init("68581b044ed33e146fa029bab199c384");
