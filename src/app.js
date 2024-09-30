import Vue from 'vue'
import App from './App.vue'
import router from "./routes/index";
import VueRouter from 'vue-router';
import { createPinia, PiniaVuePlugin } from 'pinia'

const pinia = createPinia();

Vue.use(VueRouter).use(PiniaVuePlugin)

new Vue({
	el: '#app',
	pinia,
	render: h => h(App),
	router: router
});