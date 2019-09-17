import Vue from 'vue'
import Router from 'vue-router'
import cosmetics from '@/views/cosmetics'
import crossborder from './views/crossborder'
import home from './views/Home'
import kids from './views/kids'
import man from './views/man'
import upcoming from './views/upcoming'
import lifestyle from './views/lifestyle'
import women from './views/women'
import shoppingcart from './views/shoppingcart'
import Edit from './views/shoppingcart/edit'
import login from './views/login'
import loginone from './views/loginone'
Vue.use(Router)


//export default new Router({
const router =new Router({
  mode: 'hash',
  routes: [
   // {
   //   path: '/',
   //   name: 'home',
   //   component: Home
   // },
   {
    path:'/shoppingcart',
    component:shoppingcart

  },
  {
    path:'/shoppingcart/edit',
    component:Edit
  },
  {
    path:'/login',
    component: login

  },
  {
    path:'/cosmetics',
    component: cosmetics

  },
  {
    path:'/crossborder',
    component:crossborder

  },
  {
    path:'/home',
    component: home

  },
  {
    path:'/kids',
    component: kids

  },
  {
    path:'/man',
    component: man

  },
  {
    path:'/upcoming',
    component: upcoming

  },
  {
    path:'/lifestyle',
    component: lifestyle

  },
  {
    path:'/women',
    component: women
  },
  {
    path:'/loginone',
    component: loginone
  },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'*',
    redirect:'/home'
  }


  ]
})

export default router;
