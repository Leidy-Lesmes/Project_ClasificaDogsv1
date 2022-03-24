import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/createPet",
    name: "formPet",
    component: () => import("../views/formPet.vue"),
  },
  {
    path: "/findPet",
    name: "findPet",
    component: () => import("../views/findPet.vue"),
  },
  {
    path: "/showPets",
    name: "showPets",
    component: () => import("../views/CardPets.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
