import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/reset.css";
import * as echarts from "echarts";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import "@/assets/css/public.scss";
const app = createApp(App);
app.use(ElementPlus, { size: "small", zIndex: 3000, locale: zhCn });
app.use(store).use(router).mount("#app");
app.config.globalProperties.$echarts = echarts;
// if (!localStorage.getItem('token')) {
//   router.push('/login')
// }
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
