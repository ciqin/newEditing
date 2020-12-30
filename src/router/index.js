import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout';

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
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
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
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]

export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/hotSpots',
    name: 'hotSpots',
    children: [{
      path: 'hotSpots',
      name: 'hotSpots-index',
      component: 'hotSpots/index',
      meta: { title: '我的工作区', icon: 'iconxingzhuang15' }
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/wholeNetwork',
    name: 'wholeNetwork',
    children: [{
      path: 'wholeNetwork',
      name: 'wholeNetwork-index',
      component: 'wholeNetwork/index',
      meta: { title: '加工中心', icon: 'iconxingzhuang15' }
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/redFlagIndex',
    name: 'redFlagIndex',
    children: [{
      path: 'redFlagIndex',
      name: 'redFlagIndex-index',
      component: 'redFlagIndex/index',
      meta: { title: '发布库', icon: 'iconxingzhuang15' }
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/mySubscriptions',
    name: 'mySubscriptions',
    children: [{
      path: 'mySubscriptions',
      name: 'mySubscriptions-index',
      component: 'mySubscriptions/index',
      meta: { title: '云稿库', icon: 'iconxingzhuang15' }
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/myMaterialDepot',
    name: 'myMaterialDepot',
    children: [{
      path: 'myMaterialDepot',
      name: 'myMaterialDepot-index',
      component: 'myMaterialDepot/index',
      meta: { title: '素材库', icon: 'iconxingzhuang15' }
    }]
  },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
