import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import theme from "./plugins/theme";
import vuex from "./store/index.js"


const appInstance = createApp(App);
appInstance.use(vuex)
appInstance.use(createPinia())
appInstance.use(router);
appInstance.use(theme);

appInstance.mount("#app");
