import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Folder from '../views/Folder.vue'
import Template from '../views/Template.vue'
import New from '../views/New.vue'
import Profile from '../views/Profile.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
 
// This is where i imported my Dynamic layouts
import Dashboard from '../layouts/Dashboard'
import UserAuth from '../layouts/UserAuth'

// This is where i used the components imported
Vue.component('Dashboard-layout', Dashboard)
Vue.component('UserAuth-layout', UserAuth)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // The meta attribute is added as an extra info which will be picked up by the $route, used in identifying the particular layout the page has
    meta: { layout: 'Dashboard' },
    component: Home
  },
  {
    path: '/folder',
    name: 'folder', 
    meta: { layout: 'Dashboard' },
    component: Folder
  },
  {
    path: '/template',
    name: 'template',
    meta: { layout: 'Dashboard' },
    component: Template
  },
  {
    path: '/new',
    name: 'new',
    meta: { layout: 'Dashboard' },
    component: New
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'Dashboard' },
    component: Profile
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
