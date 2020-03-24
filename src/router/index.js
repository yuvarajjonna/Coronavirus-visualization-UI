import Vue from 'vue';
import Router from 'vue-router';

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views - Pages
const Page404 = () => import('@/views/Page404')
const Page500 = () => import('@/views/Page500')
const Page405 = () => import('@/views/Page405')
const Dashboard = () => import('@/views/Dashboard')
const Users = () => import('@/views/Users')
const About = () => import('@/views/About')
const Contact = () => import('@/views/Contact')

Vue.use(Router)

let router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      name: 'AppGen',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: {
            isAuthenticate: false
          },
          component: Dashboard
        },
        {
          path: '/country/:countryName',
          name: 'country',
          meta: {
            isAuthenticate: false
          },
          component: Users
        },
        {
          path: 'about',
          name: 'About',
          meta: {
            isAuthenticate: false
          },
          component: About
        },
        {
          path: 'contact',
          name: 'Contact',
          meta: {
            isAuthenticate: false
          },
          component: Contact
        }
      ]
    },
    {
      path: '/404',
      name: 'Page404',
      meta: {
        isAuthenticate: false
      },
      component: Page404
    },
    {
      path: '/500',
      name: 'Page500',
      meta: {
        isAuthenticate: false
      },
      component: Page500
    },
    {
      path: '/405',
      name: 'Page405',
      meta: {
        isAuthenticate: false
      },
      component: Page405
    },
    {
      path: '**',
      component: Page404
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.isAuthenticate) {
    if (localStorage.getItem('userDetails')) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})

export default router
