<script setup lang="ts">
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core'
import TileCards from './TileCards.vue';

const el = ref<HTMLElement | null>(null)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
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
      <div ref="el" :style="style" style="position: fixed">
        Drag me! I am at {{ x }}, {{ y }}
      </div>>
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

.title {}

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