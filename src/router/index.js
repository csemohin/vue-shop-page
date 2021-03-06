import Vue from "vue";
import VueRouter from "vue-router";
import Product from "@/components/Product";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Product",
    component: Product
  },
  {
    path: "/details/:id",
    name: "Details",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/Details.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
