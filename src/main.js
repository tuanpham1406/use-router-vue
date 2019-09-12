import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from "@/router";
import Header from "@/components/layout/Header";

Vue.use(VueRouter);
Vue.component('pageHeader', Header);
const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
