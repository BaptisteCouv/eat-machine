// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/listFood",
        name: "listFood",
        component: () => import("@/views/ListFood.vue"),
      },
      {
        path: "/listMeal",
        name: "listMeal",
        component: () => import("@/views/ListMeal.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: () => import("@/components/login/PresentationPage.vue"),
    children: [
      {
        path: "",
        name: "Presentation",
        component: () => import("@/components/login/FirstPageConnection.vue"),
      },
      {
        path: "login",
        name: "Login",
        component: () => import("@/components/login/Login.vue"),
      },
      {
        path: "signin",
        name: "Signin",
        component: () => import("@/components/login/SignIn.vue"),
      },
      {
        path: "presentation",
        name: "Presentation",
        component: () => import("@/components/login/SignInPresentation.vue"),
      },
      {
        path: "anthropometric",
        name: "Anthropometric",
        component: () =>
          import(
            "@/components/login/SignInPageAnthropometricClassification.vue"
          ),
      },
      {
        path: "eatingGoal",
        name: "EatingGoal",
        component: () => import("@/components/login/SignInEatingGoal.vue"),
      },
      {
        path: "physicalGoal",
        name: "PhysicalGoal",
        component: () => import("@/components/login/SignInPhysicalGoal.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
