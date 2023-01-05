import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
            path: '/', 
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                isLogin: true,
                isAdmin: false,
            },
            component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue')
        },
        {
            path: '/usersList',
            name: 'AfterSales',
            meta: {
                isLogin: true,
                isAdmin: false,
            },
            component: () => import(/*webapckChunkName: 'AfterSales' */'../views/usersList/index.vue')
        }
    ]
})
router.beforeEach((to, from) => {
    
})
export default router