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
      <img :src="urls[0]" alt="img slot 1" class="cardImage img6_1"/>
      <img :src="urls[1]" alt="img slot 2" class="cardImage img6_2"/>
      <img :src="urls[2]" alt="img slot 3" class="cardImage img6_3"/>
      <img :src="urls[3]" alt="img slot 1" class="cardImage img6_1"/>
      <img :src="urls[4]" alt="img slot 2" class="cardImage img6_2"/>
      <img :src="urls[5]" alt="img slot 3" class="cardImage img6_3"/>
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

.img1 {
  top: 0px;
  grid-area: top2;
  left: 0px;
  margin: 20px 0 0 5px;
}

.img2 {
  top: 15px;
  left: 23px;
  grid-area: middle1;
  transform: rotate(50deg);
  
}

.img3 {
  top: -38px;
  left: -20px;
  transform: rotate(-50deg);
  grid-area: bottom3;
  
}
</style>