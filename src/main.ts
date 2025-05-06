import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

//repositories
import PostRepository from "./repositories/post/index.repositories";

//components
import post from "./components/atomes/post/index.vue";
import search from "./components/molecules/search/index.vue";
import toogleTheme from "./components/atomes/toogleTheme/index.vue";
import appheader from "./components/molecules/app-header/index.vue";
import postlist from "./components/molecules/postlist/index.vue";

//primevue
import { definePreset } from "@primeuix/themes";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import Card from "primevue/card";
import IftaLabel from "primevue/iftalabel";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

const pinia = createPinia();

pinia.use(({ store }) => {
  const baseURL: string = import.meta.env.VITE_PUBLIC_API;
  const api = {
    post: new PostRepository(`${baseURL}/`, {}),
  };
  store.$api = api;
});

const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        surface: {
          0: "#ffffff",
          50: "{zinc.50}",
          100: "{zinc.100}",
          200: "{zinc.200}",
          300: "{zinc.300}",
          400: "{zinc.400}",
          500: "{zinc.500}",
          600: "{zinc.600}",
          700: "{zinc.700}",
          800: "{zinc.800}",
          900: "{zinc.900}",
          950: "{zinc.950}",
        },
      },
      dark: {
        surface: {
          0: "#ffffff",
          50: "{slate.50}",
          100: "{slate.100}",
          200: "{slate.200}",
          300: "{slate.300}",
          400: "{slate.400}",
          500: "{slate.500}",
          600: "{slate.600}",
          700: "{slate.700}",
          800: "{slate.800}",
          900: "{slate.900}",
          950: "{slate.950}",
        },
      },
    },
  },
});

const app = createApp(App);
app.use(PrimeVue, {
  // Default theme configuration
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: ".my-app-dark",
    },
  },
});

app.component("search", search);
app.component("post", post);
app.component("toogle-theme", toogleTheme);
app.component("app-header", appheader);
app.component("post-list", postlist);

//prime-vue components
app.component("Card", Card);
app.component("IftaLabel", IftaLabel);
app.component("InputText", InputText);
app.component("prime-button", Button);

app.use(router);
app.use(pinia);

app.mount("#app");
