import { createRouter, createWebHistory } from "vue-router"

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router