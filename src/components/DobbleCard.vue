<script lang="ts">
export default {
  emits: [""],
  data() {
    return {
      counter: 0
    }
  },
  props: {
    symbolNumber: Number,
    urls: Object
  },
  mounted() {
  }
}

</script>

<template>
  <li class="card-container">
    <div class="card">
      <img :src="urls[0]" alt="img slot 1" class="cardImage img1"/>
      <img :src="urls[1]" alt="img slot 2" class="cardImage img2"/>
      <img :src="urls[2]" alt="img slot 3" class="cardImage img3"/>
      <img :src="urls[0]" alt="img slot 1" class="cardImage img1"/>
      <img :src="urls[1]" alt="img slot 2" class="cardImage img2"/>
      <img :src="urls[2]" alt="img slot 3" class="cardImage img3"/>
      <img :src="urls[0]" alt="img slot 1" class="cardImage img1"/>
      <img :src="urls[1]" alt="img slot 2" class="cardImage img2"/>
    </div>
  </li>
</template>

<style>
.card-container{
  flex-basis: calc(100% / 3);
}

.card {
  background-color: white;
  border: 2px solid black;
  border-radius: 100%;
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-areas:
    'top1 top2 top3'
    'middle1 middle2 middle3'
    'bottom1 bottom2 bottom3';
  /* grid-template-columns: auto auto auto; */
}

.cardImage {
  /* position: relative; */
  width: 60px;
  height: 60px;
}

.img1 {
  grid-area: top2;
  /* top: 70px; */
  transform: rotate(-90deg);
  /* left: 10px */
}

.img2 {
  grid-area: middle1;
  /* top: 20px; */
  transform: rotate(50deg);
  /* left: 40px; */
}

.img3 {
  /* top: 120px; */
  transform: rotate(-50deg);
  /* left: -20px; */
  grid-area: bottom3;
  margin-top: -70px;
}
</style>