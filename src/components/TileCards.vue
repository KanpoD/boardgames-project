<script lang="ts">
import InputText from "./InputText.vue";

export default {
  emits: ["tile-selected"],
  components: {
    InputText, // Enregistrez le composant dans la vue parente
  },
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
          large: true,
        },
        {
          url: "/src/assets/other-tokens/Car-PoliceCar.png",
          alt: "Car-PoliceCar.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: true,
        },
        {
          url: "/src/assets/other-tokens/Exit.png",
          alt: "Exit.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: false,
        },
        {
          url: "/src/assets/other-tokens/Noise Token.png",
          alt: "Noise Token.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: false,
        },
        {
          url: "/src/assets/other-tokens/Objective-Blue.png",
          alt: "Objective-Blue.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: false,
        },
        {
          url: "/src/assets/other-tokens/Objective-Green.png",
          alt: "Objective-Green.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: false,
        },
        {
          url: "/src/assets/other-tokens/Objective-Red.png",
          alt: "Objective-Red.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: false,
        },
        {
          url: "/src/assets/other-tokens/Pimweapon Crate.png",
          alt: "Pimweapon Crate.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: false,
        },
        {
          url: "/src/assets/other-tokens/Spawn-Blue.png",
          alt: "Spawn-Blue.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: false,
        },
        {
          url: "/src/assets/other-tokens/Spawn-Green.png",
          alt: "Spawn-Green.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: false,
        },
        {
          url: "/src/assets/other-tokens/Spawn-Red.png",
          alt: "Spawn-Red.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: false,
        },
        {
          url: "/src/assets/other-tokens/Spawn-StartingSpawn.png",
          alt: "Spawn-StartingSpawn.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: false,
        },
        {
          url: "/src/assets/other-tokens/Survivor Starting Zone.png",
          alt: "Survivor Starting Zone.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: false,
        },
        {
          url: "/src/assets/doors/Door-Closed-Blue.png",
          alt: "Door-Closed-Blue.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: false,
        },
        {
          url: "/src/assets/doors/Door-Closed-Green.png",
          alt: "Door-Closed-Green.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: false,
        },
        {
          url: "/src/assets/doors/Door-Closed-Red.png",
          alt: "Door-Closed-Red.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: false,
        },
        {
          url: "/src/assets/doors/Door-Open-Blue.png",
          alt: "Door-Open-Blue.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: false,
        },
        {
          url: "/src/assets/doors/Door-Open-Green.png",
          alt: "Door-Open-Green.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: false,
        },
        {
          url: "/src/assets/doors/Door-Open-Red.png",
          alt: "Door-Open-Red.png",
          x: 0,
          y: 0,
          isTokenClicked: false,
          large: false,
        },
      ],
      isTokenClicked: false,
      isTileClicked: false,
      activeTileIndex: null,
      cursorOffsetX: 0,
      cursorOffsetY: 0,
      onEditor: false,
      counter: 0,
      page: 1,
      pageState: "Next",
      iconDirection: "right",
      initialText: 'Contenu initial du textarea...'
    };
  },
  methods: {
    handleClick(Index: number, event: any, param: string, isLarge: boolean) {
      if (this.isTileClicked || this.isTokenClicked) {
        this.isTileClicked = false;
        this.isTokenClicked = false;
        this.activeTileIndex = null;
        // }
      } else {
        console.log("je suis" + [Index]);
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
          this.$emit("tile-selected", this.tiles[Index], "tile", isLarge); //Envoyer l'url au daron
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
          this.$emit("tile-selected", this.tokens[Index], "token", isLarge); //Envoyer l'url au daron
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
      } else if (this.isTokenClicked && this.activeTileIndex !== null) {
        const tileMidX = this.tokens[this.activeTileIndex].x + 75;
        const tileMidY = this.tokens[this.activeTileIndex].y + 75;

        const offsetX = event.clientX - tileMidX;
        const offsetY = event.clientY - tileMidY;

        this.tokens[this.activeTileIndex].x += offsetX;
        this.tokens[this.activeTileIndex].y += offsetY;
      }
    },
    handleClickWin() {
      console.log("mon isTokenClicked est : " + this.isTokenClicked);
      if (this.onEditor) {
        this.isTileClicked = false;
        this.isTokenClicked = false;
        this.activeTileIndex = null;
        this.counter = 0;
      }
    },
    pagesToggle() {
      if (this.page === 1) {
        this.page = -1;
        this.pageState = "Prev";
        this.iconDirection = "left";
      } else {
        this.page = 1;
        this.pageState = "Next";
        this.iconDirection = "right";
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
    <div class="page-btn" @click="pagesToggle()" :class="{ 'revsersed': pageState === 'Prev' }">
      <div class="btn" >
        {{ pageState }} <i :class="'bx bxs-' + iconDirection + '-arrow'"></i>
      </div>

    </div>

    <div class="description-container" :style="{ display: page === -1 ? 'block' : 'none' }">
      <h2>Description :</h2>
      <div>
        <InputText />
      </div>

      <div class="goal-container">
        <h2>But de la partie :</h2>
      </div>
      <InputText />
    </div>

    <div class="tile-page" :style="{ display: page === 1 ? 'block' : 'none' }">
      <div class="container tiles-container">
        <img class="tile" v-for="(tile, index) in tiles" :key="index" :src="tile.url" :alt="tile.alt"
          @click="handleClick(index, $event, 'tile')" :style="{
      position:
        isTileClicked && activeTileIndex === index
          ? 'absolute'
          : 'static',
      left: tile.x + 'px',
      top: tile.y + 'px',
      display:
        activeTileIndex === index && onEditor === true ? 'none' : 'block',
    }" />
      </div>
      <!-- pointerEvents: isTileClicked ? 'none' : 'auto' -->
      <div class="container tokens-container">
        <img class="token" v-for="(token, index) in tokens" :key="index" :src="token.url" :alt="token.alt"
          @click="handleClick(index, $event, 'token', token.large)" :style="{
      position:
        isTokenClicked && activeTileIndex === index
          ? 'absolute'
          : 'static',
      left: token.x + 'px',
      top: token.y + 'px',
      display:
        activeTileIndex === index && onEditor === true ? 'none' : 'block',
    }" />
      </div>
    </div>
  </div>
</template>

<style>
.left-container {
  position: relative;
  overflow: hidden;
  height: 96%;
}

.page-btn {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.2%;
  width: 100%;
  align-items: center;
  right: 0;
  bottom: 0;
  color: whitesmoke;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.385);
  background-color: #202C59;
  border-top: 1px solid grey;
  cursor: pointer;
  backdrop-filter: blur(10px);
}

.btn{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
  height: 100%;
}

.tile-page {
  height: 100%;
}

.container {
  height: 100%;
  overflow: auto;
  scrollbar-color: rgba(0, 0, 0, 0.593) rgba(255, 255, 255, 0.221);
  scrollbar-width: thin;
}

.description-container {
  height: 95%;
  overflow-y: scroll;
  scrollbar-color: rgba(0, 0, 0, 0.593) rgba(255, 255, 255, 0.221);
  /* Couleur de la poignée et de la piste */
  scrollbar-width: thin;
  /* Largeur de la barre de défilement */
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
  border-bottom: 1px solid grey;
  overflow-x: hidden;
}

.tokens-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 35%;
  overflow-y: scroll;
}

.tokens-container img {
  object-fit: contain;
  max-height: 45%;
  max-width: 25%;
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
