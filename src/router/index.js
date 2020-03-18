import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/EventList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/event/create',
    name: 'Create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EventCreate.vue')
  },
  {
    path: '/event/:id',
    name: 'Show',
    props: true,
    component: () => import('../views/EventShow.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
