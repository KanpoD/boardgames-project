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
  <div class="card-container">
    <div class="card">
      <img :src="urls[0]" alt="img slot 1" class="cardImage img1"/>
      <img :src="urls[1]" alt="img slot 2" class="cardImage img2"/>
      <img :src="urls[2]" alt="img slot 3" class="cardImage img3"/>
    </div>
  </div>
</template>

<style>

.card {
  background-color: beige;
  border-radius: 100%;
  width: 200px;
  height: 200px;
}

.cardImage {
  position: relative;
  width: 60px;
  height: 60px;
}

.img1 {
  top: 70px;
  transform: rotate(-90deg);
  left: 10px
}

.img2 {
  top: 20px;
  transform: rotate(50deg);
  left: 40px;
}

.img3 {
  top: 120px;
  transform: rotate(-50deg);
  left: -20px;
}
</style>