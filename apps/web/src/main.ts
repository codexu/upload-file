import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import antd from "ant-design-vue";

import "ant-design-vue/dist/reset.css";

createApp(App).use(antd).mount("#app");
