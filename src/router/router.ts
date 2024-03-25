import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../components/HomeView.vue'
import Zombicide from '../components/Zombicide.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/zombicide', component: Zombicide },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router