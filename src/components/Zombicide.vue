<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TileCards from './TileCards.vue';

const router = useRouter()
const route = useRoute()

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  }
})
</script>

<template>
  <h2 class="title">Editeur de Zombicide</h2>
  <div class="content-container">
    <div class="left-panel">
      <div class="elements">
        <TileCards />
      </div>
    </div>
    <div class="right-panel">

    </div>
  </div>
</template>

<style>
.elements {
  height: 85%;
}
.content-container {
  width: 90vw;
  height: 80vh;
  display: flex;
  box-shadow: 2px 2px 20px grey;
  border-radius: 15px;
}

.title {
}
.left-panel {
  width: 35%;
  height: 100%;
  background-color: #a8a8a8;
  border-radius: 15px 0 0 15px;
}
.right-panel {
  width: 65%;
  height: 100%;
  background-color: lightgray;
  border-radius: 0 15px 15px 0;
}
</style>