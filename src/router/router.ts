import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../components/HomeView.vue'
import Zombicide from '../components/Zombicide.vue'
import Dobble from '../components/Dobble.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/zombicide', component: Zombicide },
  { path: '/dobble', component: Dobble },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router