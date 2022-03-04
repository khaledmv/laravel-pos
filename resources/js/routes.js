
let login = require('./components/auth/LogIn.vue').default;
let register = require('./components/auth/Register.vue').default;
let logout = require('./components/auth/Logout.vue').default;
let home = require('./components/Home.vue').default;



export const routes = [
    { path: '/', component: login, name:'login' },
    { path: '/register', component: register, name:'register' },
    { path: '/logout', component: logout, name:'logout' },

    { path: '/home', component: home, name:'home' },
  ]

  export default routes;