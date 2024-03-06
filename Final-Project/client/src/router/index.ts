import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MyActivity from '../views/MyActivity.vue'
import FriendActivity from '../views/FriendActivity.vue'
import AdminPage from '../views/AdminPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/my-activity',
    name: 'MyActivity',
    
    // lazy loaded
    component: () => import(/* webpackChunkName: "about" */ '../views/MyActivity.vue')
  },
  {
    path: '/friend-activity',
    name: 'FriendActivity',
    
    // lazy loaded
    component: () => import(/* webpackChunkName: "about" */ '../views/FriendActivity.vue')
  },
  {
    path: '/admin',
    name: 'AdminPage',
    
    // lazy loaded
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
