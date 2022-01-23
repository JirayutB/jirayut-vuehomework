import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import Profile from './views/profile.vue';
import Contact from './views/contact.vue';
const routes = [
  { path: '/', name: 'profile', component: Profile },
  { path: '/contact', name: 'contact', component: Contact },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
