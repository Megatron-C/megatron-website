import { createRouter, createWebHistory } from "vue-router"

var history = require('connect-history-api-fallback');
var connect = require('connect');

var app = connect()
  .use(history())
  .listen(3000);


const HomePage = () => import('../views/Home.vue')
const WorkPage = () => import('../views/Work.vue')
const CareersPage = () => import('../views/Careers.vue')
const AboutPage = () => import('../views/About.vue')
const ContactPage = () => import('../views/Contact.vue')
const Project = () => import('../views/Project.vue')

const routes = [
  { path: '/', component: HomePage },
  { path: '/work', component: WorkPage },
  { path: '/careers', component: CareersPage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/project/:id', component: Project },
  // {
  //   // path: "*",
  //   path: "/:catchAll(.*)",
  //   name: "NotFound",
  //   component: PageNotFound,
  //   meta: {
  //     requiresAuth: false
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router