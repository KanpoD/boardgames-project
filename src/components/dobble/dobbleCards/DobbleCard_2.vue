<script lang="ts">
export default {
  props: {
    urls: Object
  }
}

</script>
<template>
  <li class="card-container">
    <div class="card">
      <img :src="urls[0]" alt="img slot 1" class="cardImage img2_1"/>
      <img :src="urls[1]" alt="img slot 2" class="cardImage img2_2"/>
    </div>
  </li>
</template>

<style>

.card {
  background-color: white;
  padding: 0 !important;
  border: 2px solid black;
  border-radius: 100%;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    'top1 top2 top3'
    'middle1 middle2 middle3'
    'bottom1 bottom2 bottom3';
}

.img2_1 {
  top: 28px;
  grid-area: top2;
  left: 20px;
  transform: rotate(180deg);
}

.img2_2 {
  left: 20px;
  grid-area: bottom2;
}
</style>