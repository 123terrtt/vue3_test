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
            component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue')
        },
        {
            path: '/users',
            name: 'AfterSales',
            component: () => import(/*webapckChunkName: 'AfterSales' */'../views/users/index.vue')
        }
    ]
})

export default router