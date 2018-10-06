import App from '../App'
import {routerMode} from '../config/env'
import VueRouter from 'vue-router'
import Vue from 'vue';
Vue.use(VueRouter);
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');
const setmealdetail = r => require.ensure([], () => r(require('../page/setmealdetail/setmealdetail.vue')), 'setmealdetail');
const test = r => require.ensure([], () => r(require('../page/test/test.vue')), 'test');
const routes=[{
    path: '/',
    component: App,
    children: [ 
        {
            path: '',
            redirect: '/setmealdetail'
        },
        {
            path: '/setmealdetail',
            component: setmealdetail,
            meta: {
                title: '套餐详情'
            }
        },
        {
            path: '/home',
            component: home,
            meta: {
                title: '首页'
            }
        },
        {
            path: '/test',
            component: test,
            meta: {
                title: '测试页'
            }
        },
    ]
}];

export default new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition || 0 }
		}
    }
})