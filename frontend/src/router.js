/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import { getAuthUserData } from '@/utils/auth'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
              {
                path: '/',
                name: 'dashboard',
                component: () => import('./views/Dashboard.vue'),
                beforeEnter: (to, from, next) => {
                  const userInfo = getAuthUserData()
                  if(userInfo) {
                    next()
                  } else {
                    next({ name: 'page-login' })
                  }
                }, 
              },
              {
                path: '/drivers',
                name: 'drivers',
                component: () => import('./views/Driver.vue'),
                meta: {
                  breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Drivers', active: true }
                  ],
                  pageTitle: 'Drivers',
                  rule: 'editor'
                }
              },
              {
                path: '/customers',
                name: 'customers',
                component: () => import('./views/Customer.vue'),
                meta: {
                  breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Customers', active: true }
                  ],
                  pageTitle: 'Customers',
                  rule: 'editor'
                }
              },
              {
                path: '/costs',
                name: 'costs',
                component: () => import('./views/Cost.vue'),
                meta: {
                  breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Costs', active: true }
                  ],
                  pageTitle: 'Costs',
                  rule: 'editor'
                }
              },
              {
                path: '/vehicles',
                name: 'vehicles',
                component: () => import('./views/Vehicle.vue'),
                meta: {
                  breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Vehicles', active: true }
                  ],
                  pageTitle: 'Vehicles',
                  rule: 'editor'
                }
              },
              {
                path: '/tracking',
                name: 'tracking',
                component: () => import('./views/Tracking.vue'),
                meta: {
                  breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Tracking', active: true }
                  ],
                  pageTitle: 'Tracking',
                  rule: 'editor'
                }
              },
              {
                path: '/invoice',
                name: 'invoice',
                component: () => import('./views/Invoice.vue'),
                meta: {
                  breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Invoice', active: true }
                  ],
                  pageTitle: 'Invoice',
                  rule: 'editor'
                }
              },
            ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
              {
                path: '/pages/login',
                name: 'page-login',
                component: () => import('@/views/pages/Login.vue')
              },
              {
                path: '/pages/error-404',
                name: 'page-error-404',
                component: () => import('@/views/pages/Error404.vue')
              },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
      appLoading.style.display = "none";
    }
})

export default router
