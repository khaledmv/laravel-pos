
let login = require('./components/LogIn.vue').default;
let register = require('./components/Register.vue').default;


export const routes = [
    { path: '/', component: login, name:'login' },
    { path: '/register', component: register, name:'register' },
  ]