import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store"

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "users" */ '../views/Login.vue')
	},
	{
		path: '/users',
		name: 'Users',
		component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
	},
	{
		path: '/user/:id',
		name: 'User',
		component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
	},
	{
		path: '*',
		name: 'Error',
		component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})


router.beforeResolve((to, from, next) => {
	const LOGIN = '/login'
	if (!store.getters["auth/isAuth"] && to.path !== LOGIN) {
		next(LOGIN)
	}
	if (store.getters["auth/isAuth"] && to.path === LOGIN) {
		next('/users')
	}
	next()
})

export default router
