import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =()=> import ('../views/home/Home.vue')
const Sort =() => import('../views/sort/Sort.vue')
const Proflie =() =>import ('../views/proflie/Proflie.vue')
const Shopping =() =>import ('../views/shopping/Shopping.vue')

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter)

const routes = [{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/sort',
		component: Sort
	},

	{
		path: '/proflie',
		component: Proflie
	},

	{
		path: '/shopping',
		component: Shopping
	}
]
const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router
