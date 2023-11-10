import { createApp } from "vue";
import { createPinia } from "pinia";
import { lazyPlugin } from "@/directives";
import { componentPlugin } from "@/components";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import App from "./App.vue";
import router from "./router";

import "@/styles/common.scss";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
// directive
app.use(lazyPlugin);
// components
app.use(componentPlugin);
app.mount("#app");
