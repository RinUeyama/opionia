import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Storivia from '@/pages/products/Storivia.vue'
import Gasyori100knockJS from '@/pages/products/Gasyori100knockJS/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/storivia',
      name: 'storivia',
      component: Storivia
    },
    {
      path: '/gasyori100knockJS/:id(\\d+)',
      name: 'gasyori100knockJS',
      component: Gasyori100knockJS,
      props: route => ({ id: Number(route.params.id) })
    },
    {
      path: '/gasyori100knockJS/*',
      redirect: '/gasyori100knockJS/1'
    }
  ]
})
