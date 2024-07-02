import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { Button, Collapse, Tabs } from "ant-design-vue";

import "ant-design-vue/dist/reset.css";

createApp(App)
  .use(Button)
  .use(Collapse)
  .use(Tabs)
  .mount("#app");
