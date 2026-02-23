import { createRouter, createWebHistory } from "vue-router";
import InfinitySolution from "@/view/InfinitySolution.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: InfinitySolution,
  },
  {
    path: "/solution",
    name: "Solution",
    component: InfinitySolution,
  },
  // Catch-all redirect
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;