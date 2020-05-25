import Vue from 'vue';
import Router from 'vue-router';
import BaseLayout from '@/layout/base/base';
import MessageList from '@/views/Message/List';
import MessageInfo from '@/views/Message/Info';

Vue.use(Router);

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    // name: '首页', 出现警告所以注释
    redirect: { name: 'index' }, // 如果不做重定向控制台会警告
    component: BaseLayout, // 公共页头页尾
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/Home/Home.vue'), // 工作台
      },
      {
        path: '/message/:id',
        name: '/message/id',
        component: MessageInfo,
      },
      {
        path: '/message',
        name: '/message',
        component: MessageList,
      },
      {
        path: '/myworks',
        name: '/myworks',
        component: () => import('@/views/WorkManage/MyWorks.vue'), // 作品列表
      },
      {
        path: '/myworks/setting:id',
        name: 'worksetting',
        component: () => import('@/views/WorkManage/Setting/WorkSetting.vue'), // 作品设置
      },
      {
        path: '/myworks/create',
        name: 'create',
        component: () => import('@/views/WorkManage/Create/WorkCreate.vue'), // 创建作品
      },
      {
        path: '/datacenter',
        name: '/datacenter',
        component: () => import('@/views/DataCenter/List.vue'),
      },
      {
        path: '/incomes',
        name: '/incomes',
        component: () => import('@/views/Incomes/Index.vue'),
      },
      {
        path: '/reward',
        name: '/reward',
        component: () => import('@/views/Incomes/Reward.vue'),
      },
      {
        path: '/user',
        name: '/user',
        redirect: { name: '/user/info' },
        component: () => import('@/views/User/BaseView.vue'),
        children: [
          {
            path: '/user/info',
            name: '/user/info',
            component: () => import('@/views/User/Info.vue'),
          },
          {
            path: '/user/detailed',
            name: '/user/detailed',
            component: () => import('@/views/User/Detailed.vue'),
          },
          {
            path: '/user/password',
            name: '/user/password',
            component: () => import('@/views/User/Password.vue'),
          },
          {
            path: '/user/bankcard',
            name: '/user/bankcard',
            component: () => import('@/views/User/BankCard.vue'),
          },
        ],
      },
      {
        path: '/help',
        name: '/help',
        component: () => import('@/views/Help/Index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/Login.vue'),
  },
  {
    path: '/welfare',
    name: 'welfare',
    component: () => import('@/views/Welfare/Welfare.vue'),
  },
  {
    path: '/writing/:bookname',
    name: 'writing',
    component: () => import('@/layout/Writing/Writing.vue'),
    redirect: { name: 'draft' },
    // props: (route) => ({ params: route.params.bookname }),
    children: [
      {
        path: '/writing/:bookname/draft',
        name: 'draft',
        component: () => import('@/views/Writing/Draft/Draft.vue'),
        children: [
          {
            path: '/writing/:bookname/draft/:id?',
            name: 'draftview',
            component: () => import('@/views/Writing/Draft/index.vue'),
          },
        ],
      },
      {
        path: '/writing/:bookname/recycle',
        name: 'recycle',
        component: () => import('@/views/Writing/Recycle/Recycle.vue'),
        children: [
          {
            path: '/writing/:bookname/recycle/:id?',
            name: 'recycleview',
            component: () => import('@/views/Writing/Recycle/index.vue'),
          },
        ],
      },
      {
        path: '/writing/:bookname/published',
        name: 'published',
        component: () => import('@/views/Writing/Published/Published.vue'),
        children: [
          {
            path: '/writing/:bookname/published/:id?',
            name: 'publishedview',
            component: () => import('@/views/Writing/Published/index.vue'),
          },
        ],
      },
    ],
  },
  // 重置密码
  {
    path: '/reset-password',
    name: '/reset-password',
    component: () => import('@/views/ResetPassword/Index'),
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
