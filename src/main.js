import { createApp } from "vue";
import { createPinia } from "pinia";
import { lazyPlugin } from "@/directives";
import { componentPlugin } from "@/components";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from "./App.vue";
import router from "./router";

import "@/styles/common.scss";

const app = createApp(App);

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia);
app.use(router);



// directive
app.use(lazyPlugin);
// components
app.use(componentPlugin);
app.mount("#app");