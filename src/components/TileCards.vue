<script lang="ts">
export default {
  data () {
    return {
      tiles: [
        { url: '/src/assets/tiles/1R.png', alt: '1R' },
        { url: '/src/assets/tiles/1V.png', alt: '1V' },
        { url: '/src/assets/tiles/2R.png', alt: '2R' },
        { url: '/src/assets/tiles/2V.png', alt: '2V' },
        { url: '/src/assets/tiles/3R.png', alt: '3R' },
        { url: '/src/assets/tiles/3V.png', alt: '3V' },
        { url: '/src/assets/tiles/4R.png', alt: '4R' },
        { url: '/src/assets/tiles/4V.png', alt: '4V' },
        { url: '/src/assets/tiles/5R.png', alt: '5R' },
        { url: '/src/assets/tiles/5V.png', alt: '5V' },
        { url: '/src/assets/tiles/6R.png', alt: '6R' },
        { url: '/src/assets/tiles/6V.png', alt: '6V' },
        { url: '/src/assets/tiles/7R.png', alt: '7R' },
        { url: '/src/assets/tiles/7V.png', alt: '7V' },
        { url: '/src/assets/tiles/8R.png', alt: '8R' },
        { url: '/src/assets/tiles/8V.png', alt: '8V' },
        { url: '/src/assets/tiles/9R.png', alt: '9R' },
        { url: '/src/assets/tiles/9V.png', alt: '9V' }
      ],
      tokens: [
        { url: '/src/assets/other-tokens/Car-PimpMobile.png', alt: 'Car-PimpMobile.png' },
        { url: '/src/assets/other-tokens/Car-PoliceCar.png', alt: 'Car-PoliceCar.png' },
        { url: '/src/assets/other-tokens/Exit.png', alt: 'Exit.png' },
        { url: '/src/assets/other-tokens/Noise Token.png', alt: 'Noise Token.png' },
        { url: '/src/assets/other-tokens/Objective-Blue.png', alt: 'Objective-Blue.png' },
        { url: '/src/assets/other-tokens/Objective-Green.png', alt: 'Objective-Green.png' },
        { url: '/src/assets/other-tokens/Objective-Red.png', alt: 'Objective-Red.png' },
        { url: '/src/assets/other-tokens/Pimweapon Crate.png', alt: 'Pimweapon Crate.png' },
        { url: '/src/assets/other-tokens/Spawn-Blue.png', alt: 'Spawn-Blue.png' },
        { url: '/src/assets/other-tokens/Spawn-Green.png', alt: 'Spawn-Green.png' },
        { url: '/src/assets/other-tokens/Spawn-Red.png', alt: 'Spawn-Red.png' },
        { url: '/src/assets/other-tokens/Spawn-StartingSpawn.png', alt: 'Spawn-StartingSpawn.png' },
        { url: '/src/assets/other-tokens/Survivor Starting Zone.png', alt: 'Survivor Starting Zone.png' },
        { url: '/src/assets/doors/Door-Closed-Blue.png', alt: 'Door-Closed-Blue.png' },
        { url: '/src/assets/doors/Door-Closed-Green.png', alt: 'Door-Closed-Green.png' },
        { url: '/src/assets/doors/Door-Closed-Red.png', alt: 'Door-Closed-Red.png' },
        { url: '/src/assets/doors/Door-Open-Blue.png', alt: 'Door-Open-Blue.png' },
        { url: '/src/assets/doors/Door-Open-Green.png', alt: 'Door-Open-Green.png' },
        { url: '/src/assets/doors/Door-Open-Red.png', alt: 'Door-Open-Red.png' }
      ]
    }
  },
    
}

</script>

<template>
  <div class="container title-container">
    <label>ELEMENTS</label>
  </div>
  <div class="container tiles-container">
    <img class="tile" v-for="tile in tiles" :src="tile.url" :alt="tile.alt"/>
  </div>
  <div class="container tokens-container">
    <img class="token" v-for="token in tokens" :src="token.url" :alt="token.alt"/>
  </div>
</template>

<style>
.container {
  overflow: auto;
}

.title-container {
  height: 5%;
}

.tiles-container {
  height: 60%;
  border-bottom: 1px solid black;
}

.tokens-container {
  height: 35%;
  overflow: auto;
}

.tile {
  width: 8rem;
  padding: 1rem;
}

.token {
  padding: 1rem;
}

</style>