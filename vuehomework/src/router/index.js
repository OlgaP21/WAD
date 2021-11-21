import { createRouter, createWebHistory } from "vue-router";
import Contacts from "../views/Contactus.vue";
import Posts from "../views/Posts.vue";
import Login from "../views/Login.vue"

const routes = [
  {
    path: "/contactus",
    name: "Contact us",
    component: Contacts,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
