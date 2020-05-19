import Vue from 'vue';
import Router from 'vue-router';
import BaseLayout from '@/layout/base';
import Home from '@/views/Home';

export const route = [
  {
    path: '/',
    // name: 'home',
    // redirect: { name: 'index' }, // 如果不做重定向控制台会警告
    component: BaseLayout, // 公共页头页尾
    children: [
      {
        path: '/',
        name: 'index',
        component: Home,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
  },
];
Vue.use(Router);

// 路由url

const router = new Router({
  mode: 'history',
  routes: route,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      x: 0,
      y: 0,
    };
  },
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else if (localStorage.getItem('token') === null) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router;
