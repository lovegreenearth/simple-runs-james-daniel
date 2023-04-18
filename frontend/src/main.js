import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toaster from "@meforma/vue-toaster";
import axios from "axios";
import store from "./store";
import VueAxios from "vue-axios";
import "@braks/vue-flow/dist/style.css";
import "@braks/vue-flow/dist/theme-default.css";
import VTooltip from 'v-tooltip'

createApp(App)
  .use(store)
  .use(router)
  .use(Toaster)
  .use(VTooltip)
  .use(VueAxios, axios)
  .mount("#app");