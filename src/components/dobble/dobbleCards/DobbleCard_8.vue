<script lang="ts">
export default {
  props: {
    urls: Object,
    isFifteenth: Boolean
  }
}

</script>
<template>
  <li class="card-container">
    <div class="card">
      <img :src="urls[0]" alt="img slot 1" class="cardImage img8_1"/>
      <img :src="urls[1]" alt="img slot 2" class="cardImage img8_2"/>
      <img :src="urls[2]" alt="img slot 3" class="cardImage img8_3"/>
      <img :src="urls[3]" alt="img slot 4" class="cardImage img8_4"/>
      <img :src="urls[4]" alt="img slot 5" class="cardImage img8_5"/>
      <img :src="urls[5]" alt="img slot 6" class="cardImage img8_6"/>
      <img :src="urls[6]" alt="img slot 7" class="cardImage img8_7"/>
      <img :src="urls[7]" alt="img slot 8" class="cardImage img8_8"/>
    </div>
  </li>
  <div class="separator" v-if="isFifteenth"></div> 
  <div class="separator" v-if="isFifteenth"></div> 
  <div class="separator" v-if="isFifteenth"></div> 
</template>

<style>
.separator {
  height: 120px;
}
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

.img8_1 {
  width: 40px !important;
  height: 40px !important;
  top: 20px;
  grid-area: top1;
  left: 28px;
  transform: rotate(220deg);
}

.img8_2 {
  width: 50px !important;
  height: 50px !important;
  top: 22px;
  left: 9px;
  grid-area: top2;
  transform: rotate(20deg);
  
}

.img8_3 {
  width: 55px !important;
  height: 55px !important;
  top: 53px;
  left: -10px;
  transform: rotate(-95deg);
  grid-area: top3;
  
}

.img8_4 {
  width: 60px !important;
  height: 60px !important;
  top: -8px;
  grid-area: middle1;
  left: 23px;
}

.img8_5 {
  width: 40px !important;
  height: 40px !important;
  top: 13px;
  left: 20px;
  grid-area: middle2;
  transform: rotate(35deg);
  
}

.img8_6 {
  width: 45px !important;
  height: 45px !important;
  top: 60px;
  left: -13px;
  transform: rotate(-20deg);
  grid-area: middle3;
  
}

.img8_7 {
  width: 40px !important;
  height: 40px !important;
  top: -15px;
  grid-area: bottom1;
  left: 26px;
  transform: rotate(-40deg);
}

.img8_8 {
  width: 45px !important;
  height: 45px !important;
  top: -8px;
  grid-area: bottom2;
  left: 0px;
  transform: rotate(150deg);
}
</style>