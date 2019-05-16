import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CountryCodes from './views/CountryCodes.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/country-codes',
      name: 'country-codes',
      component: CountryCodes,
    },
  ],
});
