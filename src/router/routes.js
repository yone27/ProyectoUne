
const routes = [
    {
        path: '/',
        component: () => import('layouts/LayoutLanding.vue'),
        children: [
            { path: '', component: () => import('src/pages/Landing/Home.vue') },
            { path: 'contact', component: () => import('src/pages/Landing/Contact.vue') },
            { path: 'about', component: () => import('src/pages/Landing/About.vue') },
            { path: 'orders', component: () => import('src/pages/Landing/Orders.vue') },
            { path: 'products', component: () => import('src/pages/Landing/Products.vue') },
            { path: 'products/:id', component: () => import('src/pages/Landing/Product.vue') },
        ]
    },
    {
        path: '/',
        component: () => import('layouts/LayoutAuth.vue'),
        children: [
            { path: 'signin', component: () => import('src/pages/Landing/Signin.vue') },
            { path: 'signup', component: () => import('src/pages/Landing/Signup.vue') },
        ]
    },
    {
        path: '/admin',
        component: () => import('src/layouts/LayoutAdmin.vue'),
        children: [
            { path: '', component: () => import('src/pages/Admin/Dashboard.vue') },
            { path: 'profile', component: () => import('src/pages/Admin/Profile.vue') },
            { path: 'webconfig', component: () => import('src/pages/Admin/WebConfig.vue') },
            { path: 'users', component: () => import('src/pages/Admin/Users.vue') },
            { path: 'products', component: () => import('src/pages/Admin/Products.vue') },
            { path: 'orders', component: () => import('src/pages/Admin/Ordes.vue') },
            { path: 'taxes', component: () => import('src/pages/Admin/Taxes.vue') },
            { path: 'categories', component: () => import('src/pages/Admin/Categories.vue') },
        ]
    },
    {
        path: '/admin',
        component: () => import('layouts/LayoutAuth.vue'),
        children: [
            { path: 'signin', component: () => import('src/pages/Admin/Signin.vue') },
        ]
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/Error404.vue')
    }
]

export default routes
