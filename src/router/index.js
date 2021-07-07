import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Professionals from "../views/Professionals.vue";
import Contents from "../views/Contents.vue";
import Package from "../views/Package.vue";
import ProfessionalProfile from "../views/ProfessionalProfile.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "ProfessionalProfile",
    component: ProfessionalProfile,
  },
  {
    path: "/professionals",
    name: "Professionals",
    component: Professionals,
  },
  {
    path: "/contents",
    name: "Contents",
    component: Contents,
  },
  {
    path: "/package",
    name: "Package",
    component: Package,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
