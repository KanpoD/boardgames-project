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
      <img :src="urls[0]" alt="img slot 1" class="cardImage img1_1"/>
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
  /* grid-template-columns: auto auto auto; */
}

.img1_1 {
  top: 0px;
  grid-area: middle2;
  left: 0px;
  margin: 35px 0 0 35px;
}

</style>