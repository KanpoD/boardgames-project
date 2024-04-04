<script lang="ts">
export default {
  emits: ["tile-selected"],
  data() {
    return {
      tiles: [
        {
          url: "/src/assets/tiles/1R.png",
          alt: "1R",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
        {
          url: "/src/assets/tiles/1V.png",
          alt: "1V",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
        {
          url: "/src/assets/tiles/2R.png",
          alt: "2R",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
        {
          url: "/src/assets/tiles/2V.png",
          alt: "2V",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
        {
          url: "/src/assets/tiles/3R.png",
          alt: "3R",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
        {
          url: "/src/assets/tiles/3V.png",
          alt: "3V",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
        {
          url: "/src/assets/tiles/4R.png",
          alt: "4R",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
        {
          url: "/src/assets/tiles/4V.png",
          alt: "4V",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
        {
          url: "/src/assets/tiles/5R.png",
          alt: "5R",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
        {
          url: "/src/assets/tiles/5V.png",
          alt: "5V",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
        {
          url: "/src/assets/tiles/6R.png",
          alt: "6R",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
        {
          url: "/src/assets/tiles/6V.png",
          alt: "6V",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
        {
          url: "/src/assets/tiles/7R.png",
          alt: "7R",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
        {
          url: "/src/assets/tiles/7V.png",
          alt: "7V",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
        {
          url: "/src/assets/tiles/8R.png",
          alt: "8R",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
        {
          url: "/src/assets/tiles/8V.png",
          alt: "8V",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
        {
          url: "/src/assets/tiles/9R.png",
          alt: "9R",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
        {
          url: "/src/assets/tiles/9V.png",
          alt: "9V",
          backgroundSet: false,
          x: 0,
          y: 0,
          isTileClicked: false,
        },
      ],
      tokens: [
        {
          url: "/src/assets/other-tokens/Car-PimpMobile.png",
          alt: "Car-PimpMobile.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/other-tokens/Car-PoliceCar.png",
          alt: "Car-PoliceCar.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/other-tokens/Exit.png",
          alt: "Exit.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/other-tokens/Noise Token.png",
          alt: "Noise Token.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/other-tokens/Objective-Blue.png",
          alt: "Objective-Blue.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/other-tokens/Objective-Green.png",
          alt: "Objective-Green.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/other-tokens/Objective-Red.png",
          alt: "Objective-Red.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/other-tokens/Pimweapon Crate.png",
          alt: "Pimweapon Crate.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/other-tokens/Spawn-Blue.png",
          alt: "Spawn-Blue.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/other-tokens/Spawn-Green.png",
          alt: "Spawn-Green.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/other-tokens/Spawn-Red.png",
          alt: "Spawn-Red.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/other-tokens/Spawn-StartingSpawn.png",
          alt: "Spawn-StartingSpawn.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/other-tokens/Survivor Starting Zone.png",
          alt: "Survivor Starting Zone.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/doors/Door-Closed-Blue.png",
          alt: "Door-Closed-Blue.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/doors/Door-Closed-Green.png",
          alt: "Door-Closed-Green.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/doors/Door-Closed-Red.png",
          alt: "Door-Closed-Red.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/doors/Door-Open-Blue.png",
          alt: "Door-Open-Blue.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/doors/Door-Open-Green.png",
          alt: "Door-Open-Green.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
        {
          url: "/src/assets/doors/Door-Open-Red.png",
          alt: "Door-Open-Red.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
        },
      ],
      isTokenClicked: false,
      isTileClicked: false,
      activeTileIndex: null,
      cursorOffsetX: 0,
      cursorOffsetY: 0,
      onEditor: false,
      counter: 0,
    };
  },
  methods: {
    handleClick(Index: number, event: any, param: string) {
      if (this.isTileClicked || this.isTokenClicked) {
        this.isTileClicked = false;
        this.isTokenClicked = false;
        this.activeTileIndex = null;
        // }
      } else {
        
        console.log('je suis' + [Index]);
        if (param === "tile") {
          this.isTileClicked = true;
          this.activeTileIndex = Index;
          // recup la pos du curseur par rapport aux 4 coins de la fenetre
          const rect = event.target.getBoundingClientRect();
          this.cursorOffsetX = event.clientX - rect.left;
          this.cursorOffsetY = event.clientY - rect.top;
          this.tiles[this.activeTileIndex].x =
            event.clientX - this.cursorOffsetX;
          this.tiles[this.activeTileIndex].y =
            event.clientY - this.cursorOffsetY;
          this.$emit("tile-selected", this.tiles[Index], 'tile'); //Envoyer l'url au daron
        } else if (param === "token") {
          this.isTokenClicked = true;
          this.activeTileIndex = Index;
          // recup la pos du curseur par rapport aux 4 coins de la fenetre
          const rect = event.target.getBoundingClientRect();
          this.cursorOffsetX = event.clientX - rect.left;
          this.cursorOffsetY = event.clientY - rect.top;
          this.tokens[this.activeTileIndex].x =
            event.clientX - this.cursorOffsetX;
          this.tokens[this.activeTileIndex].y =
            event.clientY - this.cursorOffsetY;
          this.$emit("tile-selected", this.tokens[Index], "token"); //Envoyer l'url au daron
        }
      }
    },
    handleMouseMove(event: any) {
      const editorRect = document
        .querySelector(".grid-container")
        ?.getBoundingClientRect();
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      if (editorRect) {
        if (
          mouseX >= editorRect.left &&
          mouseX <= editorRect.right &&
          mouseY >= editorRect.top &&
          mouseY <= editorRect.bottom
        ) {
          this.onEditor = true;
        } else {
          this.onEditor = false;
        }
      }

      if (this.isTileClicked && this.activeTileIndex !== null) {
        const tileMidX = this.tiles[this.activeTileIndex].x + 75;
        const tileMidY = this.tiles[this.activeTileIndex].y + 75;

        const offsetX = event.clientX - tileMidX;
        const offsetY = event.clientY - tileMidY;

        this.tiles[this.activeTileIndex].x += offsetX;
        this.tiles[this.activeTileIndex].y += offsetY;
      }else if (this.isTokenClicked && this.activeTileIndex !== null) {
        
        const tileMidX = this.tokens[this.activeTileIndex].x + 75;
        const tileMidY = this.tokens[this.activeTileIndex].y + 75;

        const offsetX = event.clientX - tileMidX;
        const offsetY = event.clientY - tileMidY;

        this.tokens[this.activeTileIndex].x += offsetX;
        this.tokens[this.activeTileIndex].y += offsetY;
      }
    },
    handleClickWin(event: any) {
      console.log('mon isTokenClicked est : ' + this.isTokenClicked);
     if (this.onEditor) {
        this.isTileClicked = false;
        this.isTokenClicked = false;
        this.activeTileIndex = null;
        this.counter = 0;
      }
    },
  },
  mounted() {
    // activer la detection de la souris sur toute la fenetre
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("click", this.handleClickWin);
  },
  beforeDestroy() {
    // enlever la detection
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("click", this.handleClickWin);
  },
};
</script>

<template>
  <div class="left-container">
    <div class="container tiles-container">
      <img
        class="tile"
        v-for="(tile, index) in tiles"
        :key="index"
        :src="tile.url"
        :alt="tile.alt"
        @click="handleClick(index, $event, 'tile')"
        :style="{
          position:
            isTileClicked && activeTileIndex === index ? 'absolute' : 'static',
          left: tile.x + 'px',
          top: tile.y + 'px',
          display:
            activeTileIndex === index && onEditor === true ? 'none' : 'block',
        }"
      />
    </div>
    <!-- pointerEvents: isTileClicked ? 'none' : 'auto' -->
    <div class="container tokens-container">
      <img
        class="token"
        v-for="(token, index) in tokens"
        :key="index"
        :src="token.url"
        :alt="token.alt"
        @click="handleClick(index, $event, 'token')"
        :style="{
          position:
            isTokenClicked && activeTileIndex === index ? 'absolute' : 'static',
          left: token.x + 'px',
          top: token.y + 'px',
          display:
            activeTileIndex === index && onEditor === true ? 'none' : 'block',
        }"
      />
    </div>
  </div>
</template>

<style>
.left-container {
  overflow: hidden;
  height: 100%;
}

.container {
  overflow: auto;
}

.title-container {
  height: 5%;
}

.tiles-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 60%;
  border-bottom: 1px solid black;
  overflow-x: hidden;
}

.tokens-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 35%;
  overflow: auto;
}

.tokens-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-height: 25%;
  max-width: 15%;
}

.tile {
  width: 124px;
  padding: 1rem;
  z-index: 1;
  user-select: none;
}

.token {
  padding: 1rem;
}
</style>
