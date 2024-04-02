<script setup lang="ts">
import { ref } from "vue";
import TileCards from "./TileCards.vue";

interface TileObject {
  url: string;
  isTileClicked: boolean;
  backgroundSet: boolean;
}

let selectedTileImage = ref<TileObject | null>(null);

const handleTileSelected = (tileObject: {
  url: string;
  isTileClicked: boolean;
  backgroundSet: boolean;

}) => {
  if (
    "url" in tileObject &&
    "isTileClicked" in tileObject &&
    "backgroundSet" in tileObject
  ) {
    
    selectedTileImage.value = tileObject;
    tileObject.isTileClicked = false;
    console.log(selectedTileImage.value?.url);
    handleTool('place');
  }
};
const scale = ref(1);
const rightPanel = ref<HTMLElement | null>(null);
let isDragging = false;
let startX = 0;
let startY = 0;
let translateX = ref(0);
let translateY = ref(0);
let maxTranslateX = ref(400);
let maxTranslateY = ref(400);
let minTranslateX = ref(-400);
let minTranslateY = ref(-1000); //revoir les valeurs ici, peut etre les changer en fonction du scale ?

let move = false;
let remove = false;
let rotate = false;
let place = false;
let activeTool = "";

function handleTool(tool: string) {
  console.log(tool);
  activeTool = tool;

  switch (tool) {
    case "move":
      move = true;
      remove = false;
      rotate = false;
      place = false;
      break;
    case "remove":
      move = false;
      remove = true;
      rotate = false;
      place = false;
      break;
    case "rotate":
      move = false;
      remove = false;
      rotate = true;
      place = false;
      break;
    case "place":
      move = false;
      remove = false;
      rotate = false;
      place = true;
      break;
    default:
      activeTool = "";
      break;
  }
}

const startDrag = (event: MouseEvent) => {
  isDragging = true;
  startX = event.clientX;
  startY = event.clientY;
};

const drag = (event: MouseEvent) => {
  if (!isDragging) {
    return;
  } else if (isDragging) {
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    let newTranslateX = translateX.value + deltaX;
    let newTranslateY = translateY.value + deltaY;

    // verifier les limites pour pas bug
    if (newTranslateX > maxTranslateX.value) {
      newTranslateX = maxTranslateX.value;
      isDragging = false;
    } else if (newTranslateX < minTranslateX.value) {
      newTranslateX = minTranslateX.value;
      isDragging = false;
    }

    // pareil ici
    if (newTranslateY > maxTranslateY.value) {
      newTranslateY = maxTranslateY.value;
      isDragging = false;
    } else if (newTranslateY < minTranslateY.value) {
      newTranslateY = minTranslateY.value;
      isDragging = false;
    }

    translateX.value = newTranslateX;
    translateY.value = newTranslateY;

    startX = event.clientX;
    startY = event.clientY;
  }
};

const endDrag = () => {
  isDragging = false;
};

const handleZoom = (event: WheelEvent) => {
  event.preventDefault(); //désactive le scroll
  const delta = event.deltaY;
  const zoomStep = 0.1;
  const maxZoom = 1.9;
  const minZoom = 0.5;

  let newScale = scale.value;

  if (delta < 0) {
    newScale += zoomStep;
  } else {
    newScale -= zoomStep;
  }

  if (newScale > maxZoom) {
    newScale = maxZoom;
  } else if (newScale < minZoom) {
    newScale = minZoom;
  }
  scale.value = newScale;
};

let rotationDegree = 0;

const handleCellClick = (cell: HTMLElement | null) => {
  if (!cell) return;

  if (selectedTileImage.value && activeTool === "place") {
    const imagePath = `url(${selectedTileImage.value.url})`;
    cell.style.backgroundImage = imagePath;
    selectedTileImage.value = null;
    console.log("Je clique");
  } else if (selectedTileImage.value === null && activeTool === "move") {
    // selectedTileImage.value = tileObject;
    console.log(selectedTileImage.value?.url)
  } else if (selectedTileImage.value === null && activeTool === "rotate") {
    console.log("Je rotate");
    rotationDegree += 90;
    cell.style.transform = `rotate(${rotationDegree}deg)`;
  } else if (selectedTileImage.value === null && activeTool === "remove") {
    console.log("Je supprime");
    cell.style.backgroundImage = "none";
  } else {
    console.log("Aucun outil sélectionné ou action non prise en charge.");
  }
};

const handleGridHover = (row: number, column: number) => {
  const cell = document.querySelector(
    `.grid-item[row="${row}"][column="${column}"]`
  ) as HTMLElement;

  if (cell && selectedTileImage.value) {
    const imagePath = `url(${selectedTileImage.value.url})`;
    let isBkSet = selectedTileImage.value.backgroundSet;

    if (!isBkSet) {
      cell.style.backgroundImage = imagePath;
    }

    cell.addEventListener("mouseleave", () => {
      if (selectedTileImage.value && !selectedTileImage.value.backgroundSet) {
        cell.style.backgroundImage = "none";
      }
    });
  }
};
</script>

<template>
  <div class="zombicide_editor">
    <h2 class="title">Editeur de Zombicide</h2>
    <div class="content-container">
      <div class="left-panel">
        <div class="elements">
          <TileCards @tile-selected="handleTileSelected" />
        </div>
      </div>
      <div class="right-content">
        <div
          class="right-panel"
          ref="rightPanel"
          @mousedown="startDrag"
          @mousemove="drag"
          @mouseup="endDrag"
          @wheel="handleZoom"
        >
          <div
            class="grid-container"
            :style="{
              transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
            }"
          >
            <div class="grid-row" v-for="row in 12" :key="row">
              <div
                class="grid-item"
                v-for="column in 12"
                :key="column"
                :row="row"
                :column="column"
                :style="{ 'background-image': 'none' }"
                @mousemove="handleGridHover(row, column)"
                @click="handleCellClick($event.target)"
              ></div>
            </div>
          </div>
        </div>
        <div class="bot-content">
          <div class="bot-panel">
            <div class="tools_wrappper">
              <i class="bx bx-move" @click="handleTool('move')"></i>
              <i class="bx bx-trash" @click="handleTool('remove')"></i>
              <i class="bx bx-rotate-right" @click="handleTool('rotate')"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.zombicide_editor {
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.content-container {
  width: 95%;
  height: 80vh;
  display: flex;
  box-shadow: 2px 2px 20px grey;
  border-radius: 15px;
}

.top-content {
  display: flex;
  height: 80%;
}

.bot-content {
  display: flex;
  height: 20%;
  background-color: aqua;
}

.right-content {
  display: flex;
  width: 70%;
  flex-direction: column;
}

.elements {
  height: 100%;
}

.left-panel {
  width: 100%;
  height: 100%;
  background-color: #a8a8a8;
}

.right-panel {
  width: 100%;
  height: 100%;
  background-color: lightgray;
  overflow: hidden;
  cursor: grab;
  position: relative;
}

.bot-panel {
  display: flex;
  width: 100%;
  height: 100%;
}

.tools_wrappper {
}

.grid-container {
  display: grid;
}

.grid-row {
  display: flex;
}

.grid-item {
  background-color: white;
  border: 1px solid black;
  width: 100px;
  height: 100px;

  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
}
</style>
