import { createRouter, createWebHistory } from 'vue-router';
import Kaart from './pages/Kaart.vue';
import Databasis from './pages/Databasis.vue';
import Aankope from './pages/NuweAankope.vue';

const routes = [
  { path: '/', redirect: '/db' },
  { path: '/kaart', component: Kaart },
  { path: '/db', component: Databasis },
  { path: '/aankope', component: Aankope },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
