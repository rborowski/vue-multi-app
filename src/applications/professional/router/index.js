// src/applications/professional/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ProfessionalHome from '../pages/Home.vue';

const routes = [
  { path: '/', component: ProfessionalHome },
  { path: '/services', component: () => import("../pages/Services.vue") }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
