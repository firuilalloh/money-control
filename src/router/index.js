import { createRouter, createWebHistory } from "vue-router";
import Sales from "../views/Sales.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import Purchase from "../views/Purchase.vue";
import Warehouse from "../views/Warehouse.vue";
import Manufacturing from "../views/Manufacturing.vue";
import Inventory from "../views/Inventory.vue";
import ShipingAndDistribution from "../views/ShipAndDist.vue";
import Finance from "../views/Finance.vue"

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/sales",
  },
  {
    path: "/sales",
    name: "Sales",
    component: Sales,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/purchase",
    name: "Purchase",
    component: Purchase,
  },
  {
    path: "/warehouse",
    name: "Warehouse",
    component: Warehouse,
  },
  {
    path: "/manufacturing",
    name: "Manufacture",
    component: Manufacturing,
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: Inventory,
  },
  {
    path: "/sad",
    name: "Sad",
    component: ShipingAndDistribution,
  },
  {
    path: "/finance",
    name: "Finance",
    component: Finance
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
