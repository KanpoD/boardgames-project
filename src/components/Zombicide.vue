<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TileCard from './TileCard.vue';

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
        <div class="tiles">
          <TileCard />
        </div>
      </div>
    </div>
    <div class="right-panel">

    </div>
  </div>
</template>

<style>

.content-container {
  width: 90vw;
  height: 80vh;
  display: flex;
}

.title {
}
.left-panel {
  width: 35%;
  height: 100%;
  background-color: lightcoral;
}
.right-panel {
  width: 65%;
  height: 100%;
  background-color: green;
}
</style>