import Vue from 'vue'
//import Vue from "vue/dist/vue.common.js";
import router from './router/router'
import store from './store/'
import './config/rem'
import FastClick from 'fastclick'

if('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
/**
 * 路由过滤器，title切换
 */
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
	  document.title = to.meta.title;
	}
	next();
});
new Vue({
	router,
	store,
}).$mount('#app')

