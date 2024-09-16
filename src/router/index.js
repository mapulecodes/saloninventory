import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/DashboardView.vue')
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: () => import('@/views/InventoryView.vue')
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: () => import('@/views/AboutusView.vue')
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: () => import('@/views/ContactUsView.vue')
  },
  {
    path: '/shiftschedule',
    name: 'shiftschedule',
    component: () => import('@/views/ShiftScheduleView.vue')
  },
  {
    path: '/admin',
    name: 'sadmin',
    component: () => import('@/views/AdminView.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/AccountView.vue')
  },
  {
    path: '/product/:id',
    name: 'singleitemview',
    component: () => import('@/views/SingleItemView.vue'),
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
