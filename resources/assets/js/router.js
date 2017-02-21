/**
 * This is lumtify router.
 */

import VueRouter from 'vue-router';

// const Home = resolve => require(['./components/Home.vue'], resolve);
// const Login = resolve => require(['./components/Login.vue'], resolve)
// const Register = resolve => require(['./components/Register.vue'], resolve)
// const About = resolve => require(['./components/About.vue'], resolve);

import Home from './components/Home.vue'

import About from './components/About.vue'

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { name: 'home', path: '/', component: Home },
        { name: 'about', path: '/about', component: About },
        // { path: '/login', component: Login },
        // { path: '/register', component: Register },
    ],
    linkActiveClass: 'active'
});