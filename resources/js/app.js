/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


// import vue, vue-roter, createRouter and createWebHasHistory

require('./bootstrap');
window.Vue = require('vue');
import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import { createRouter, createWebHashHistory,createWebHistory  } from 'vue-router'

import { routes } from './routes'

// import helper user class
import User from './helpers/User';
window.User = User




const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
   history: VueRouter.createWebHistory(),
  // mode:history,
  routes, // short for `routes: routes`
})

// // 5. Create and mount the root instance.
const app = Vue.createApp({})
app.use(router)
app.mount('#app')
