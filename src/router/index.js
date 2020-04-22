import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Beers from '../views/Beers.vue'
import Login from '../views/Login.vue'
import Recipes from '../views/Recipes.vue'
import UserSettings from '../views/UserSettings.vue'
import store from '../store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/beers',
    name: 'Beers',
    component: Beers
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: Recipes
  },
  {
    path: '/user_settings',
    name: 'User Settings',
    component: UserSettings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.getters.is_authenticated) next({ name: 'Login' })
  else next()
})

export default router
