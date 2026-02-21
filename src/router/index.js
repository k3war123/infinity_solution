import { createRouter, createWebHistory } from "vue-router"
import InfinitySolution from "../view/InfinitySolution.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: InfinitySolution
  },
  {
    path: "/solution",
    name: "solution",
    component: InfinitySolution
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router