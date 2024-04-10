// src/applications/personal/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import PersonalHome from '../pages/Home.vue';

const routes = [
  { path: '/', component: PersonalHome },
  { path: '/about', component: () => import("../pages/About.vue") }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
