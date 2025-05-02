import { createMemoryHistory, createRouter } from "vue-router";

import IndexPage from "../pages/index.vue";

const routes = [{ path: "/", component: IndexPage }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router;
