import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Yan Site Home'
        }
    }
    // {
    //     path: '/blog',
    //     name: 'blog',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     // component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue'),
    //     component: Blog,
    //     meta: {
    //         title: "Yan's Blog"
    //     }
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
// router.onError((error) => {
//     const pattern = /Loading chunk (\d)+ failed/g;
//     const isChunkLoadFailed = error.message.match(pattern);
//     const targetPath = router.history.pending.fullPath;
//     if (isChunkLoadFailed) {
//         router.replace(targetPath);
//     }
// })

router.onError(error => {
    const pattern = /Loading chunk (\d)+ failed/g
    const isChunkLoadFailed = error.message.match(pattern)
    const targetPath = router.history.pending.fullPath
    if (isChunkLoadFailed) {
        router.replace(targetPath)
    }
})

export default router
