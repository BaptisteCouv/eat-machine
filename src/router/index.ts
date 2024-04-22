// Composables
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    meta: { requiresAuth: true },
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
        name: "Presentations",
        component: () => import("@/components/login/FirstPageConnection.vue"),
      },
      {
        path: "login",
        name: "Login",
        component: () => import("@/components/login/Login.vue"),
      },
      {
        path: "signup",
        name: "SignUp",
        component: () => import("@/components/login/SignUp.vue"),
      },
      {
        path: "presentation",
        name: "Presentation",
        component: () => import("@/components/login/SignUpPresentation.vue"),
      },
      {
        path: "anthropometric",
        name: "Anthropometric",
        component: () =>
          import(
            "@/components/login/SignUpPageAnthropometricClassification.vue"
          ),
      },
      {
        path: "eatingGoal",
        name: "EatingGoal",
        component: () => import("@/components/login/SignUpEatingGoal.vue"),
      },
      {
        path: "physicalGoal",
        name: "PhysicalGoal",
        component: () => import("@/components/login/SignUpPhysicalGoal.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (to.meta.requiresAuth && !token ) {
    next("/auth/login");
  } else {
    next();
  }
});

export default router;
