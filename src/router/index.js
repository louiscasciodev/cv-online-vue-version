import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AllProjects from '@/components/AllProjects'
import Project1 from '@/components/Project1'
import Project2 from '@/components/Project2'
import Project3 from '@/components/Project3'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/project/:id', component: Home,
    children: [
      { path: 'all', component: AllProjects },
      { path: '1', component: Project1 },
      { path: '2', component: Project2 },
      { path: '3', component: Project3 }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router