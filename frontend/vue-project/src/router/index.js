import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue';
import Checkout from '../views/Checkout.vue';
import Login from '../views/Login.vue';
import Cart from '../components/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  
    { 
      path: '/product',
      name: 'product',
      component: Product },

    { path: '/checkout',
      name:'checkout' , 
      component: Checkout },

    { path: '/login', 
      name:'login' ,
      component: Login },

      { path: '/cart', 
        name:'cart' ,
        component: Cart },

  ],
})

export default router
