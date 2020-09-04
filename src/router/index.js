import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LineMessage from '../views/LineMessage.vue'
import Cv from '../views/Cv.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/doscg",
    name: "Doscg",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Doscg.vue")
  },
  {
    path: "/linemessage",
    name: "LineMessage",
    component: LineMessage
  },
  {
    path: "/cv",
    name: "Cv",
    component: Cv
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
