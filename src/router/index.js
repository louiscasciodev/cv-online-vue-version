import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHome from '@/views/TheHome'
import HomeProjectAll from '@/views/HomeChildrens/HomeProjectAll'
import HomeProject1 from '@/views/HomeChildrens/HomeProject1'
import HomeProject2 from '@/views/HomeChildrens/HomeProject2'
import HomeProject3 from '@/views/HomeChildrens/HomeProject3'
import HomeCv from '@/views/HomeChildrens/HomeCv'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: TheHome,
    children: [
      { path: '', component: HomeProjectAll },
    ]
  },
  {
    path: '/cv',
    component: TheHome,
    children: [
      { path: '', component: HomeCv },
    ]
  },
  {
    path: '/project/', component: TheHome,
    children: [
      { path: 'all', component: HomeProjectAll },
      { path: '1', component: HomeProject1 },
      { path: '2', component: HomeProject2 },
      { path: '3', component: HomeProject3 }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router