import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/닭갈비',
    name: '닭갈비',
    component: () => import('../views/닭갈비.vue')
  }
]

const router = new VueRouter({
	mode : 'history',
	routes
})

export default router
	