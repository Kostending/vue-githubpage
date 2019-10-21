import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//@ts-ignore
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

//@ts-ignore
Vue.use(VueMaterial)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/wishes',
    name: 'wishes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Wishes.vue')
  },
  {
    path: '/house',
    name: 'house',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/House.vue')
  },
  {
    path: '/nurse',
    name: 'nurse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Nurse.vue')
  },
  {
    path: '/movielist',
    name: 'movielist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Movielist.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
