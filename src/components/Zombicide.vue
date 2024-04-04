<script setup lang="ts">
import { ref, onMounted } from "vue";
import TileCards from "./TileCards.vue";

interface TileObject {
  url: string;
  elementTypes: string;
}

let selectedTileImage = ref<TileObject | null>(null);

const elementTypeSelected = ref<string>("");

const handleTileSelected = (
  tileObject: {
    url: string;
    elementTypes: string;
  },
  elementType: string
) => {
  console.log(elementType);
  elementTypeSelected.value = elementType;
  if ("url" in tileObject && elementType === "tile") {
    selectedTileImage.value = tileObject;
    handleTool("place");
  } else if ("url" in tileObject && elementType === "token") {
    selectedTileImage.value = tileObject;
    handleTool("place");
  }
  if (elementType === "token") {
    tokenGrid.classList.add("tokenClicked");
    console.log("Je rajoute une class tokenClicked a : " + elementType);
  } else if (elementType === "tile") {
    tileGrid.classList.add("tileClicked");
    console.log("Je rajoute une class tileClicked a : " + elementType);
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

const handleTool = (tool: string) => {
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
};

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
    // gridData.push({ row: row, column: column, url: imagePath });
    cell.style.backgroundImage = imagePath;
    selectedTileImage.value = null;
    // console.log("Je clique " + gridData);
  } else if (selectedTileImage.value === null && activeTool === "move") {
    // const imagePath = `url(${cell.style.backgroundImage})`;
  } else if (selectedTileImage.value === null && activeTool === "rotate") {
    rotationDegree += 90;
    cell.style.transform = `rotate(${rotationDegree}deg)`;
  } else if (selectedTileImage.value === null && activeTool === "remove") {
    cell.style.backgroundImage = "none";
  } else {
    console.log("Aucun outil sélectionné ou action non prise en charge.");
  }
  handleState();
};

const handleState = () => {
  if (elementTypeSelected.value === "token") {
    tokenGrid.classList.remove("tokenClicked");
    console.log("je rajoute la classe tokenCliked");
  } else if (elementTypeSelected.value === "tile") {
    tileGrid.classList.remove("tileClicked");
    console.log("je rajoute la classe tileClicked");
  }
};

const handleGridHover = (row: number, column: number) => {
  let cell: HTMLElement | null = null;
  if (elementTypeSelected.value === "tile") {
    cell = document.querySelector(
      `.grid-item[row="${row}"][column="${column}"]`
    ) as HTMLElement | null;
    console.log(cell);
  } else if (elementTypeSelected.value === "token") {
    cell = document.querySelector(
      `.grid-item-token[row="${row}"][column="${column}"]`
    ) as HTMLElement | null;
    console.log(cell);
  }

  let backgroundBackup = cell?.style.backgroundImage;
  //Si cell existe et que une tile est selectionée
  if (cell && selectedTileImage.value) {
    const imagePath = `url("${selectedTileImage.value?.url}")`; //Recuprer l'url de l'image selectionée
    cell.style.backgroundImage = imagePath;

    cell.addEventListener("click", () => {
      backgroundBackup = imagePath;
    });

    cell.addEventListener("mouseleave", () => {
      if (activeTool !== "remove")
        cell.style.backgroundImage = backgroundBackup;
    });
  }
};

let tokenGrid: any;
let tileGrid: any;
onMounted(() => {
  tokenGrid = document.querySelector(".grid-token-container");
  tileGrid = document.querySelector(".grid-tile-container");
});
</script>

<template>
  <div class="zombicide_editor">
    <div class="content-container">
      <h2 class="title">Editeur de Zombicide</h2>
      <div class="wrapper">
        <div class="left-panel">
          <div class="elements">
            <TileCards @tile-selected="handleTileSelected" />
          </div>
        </div>
        <div class="right-content">
          <div class="element-selected">
            <p>{{ elementTypeSelected }}</p>
          </div>
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
              <div class="grid-tile-container">
                <div
                  class="grid-row"
                  v-for="(row, rowIndex) in 6"
                  :key="rowIndex"
                >
                  <div
                    class="grid-item"
                    v-for="(column, columnIndex) in 6"
                    :key="columnIndex"
                    :row="rowIndex"
                    :column="columnIndex"
                    :style="{ 'background-image': 'none' }"
                    @mouseenter="handleGridHover(rowIndex, columnIndex)"
                    @click="handleCellClick($event.target)"
                  ></div>
                </div>
              </div>
              <div class="grid-token-container">
                <div
                  class="grid-row-token"
                  v-for="(row, rowIndex) in 48"
                  :key="rowIndex"
                >
                  <div
                    class="grid-item-token"
                    v-for="(column, columnIndex) in 48"
                    :key="columnIndex"
                    :row="rowIndex"
                    :column="columnIndex"
                    :style="{
                      'background-image': 'none',
                    }"
                    @mouseenter="handleGridHover(rowIndex, columnIndex)"
                    @click="handleCellClick($event.target)"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="bot-content">
            <div class="bot-panel">
              <div class="tools_wrapper">
                <i
                  class="bx bx-move"
                  @click="handleTool('move')"
                  :class="{ selectedTool: activeTool.value === 'move' }"
                ></i>
                <i
                  class="bx bx-trash"
                  @click="handleTool('remove')"
                  :class="{ selectedTool: activeTool.value === 'remove' }"
                ></i>
                <i
                  class="bx bx-rotate-right"
                  @click="handleTool('rotate')"
                  :class="{ selectedTool: activeTool.value === 'rotate' }"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.zombicide_editor {
  height: 94vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: .5em;
}

.content-container {
  width: 95%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 20px #000000;
  border-radius: 15px;
  overflow: hidden;
}

.title{
  margin: 0;
  padding: 0;
  color: white;
  background-color: #003049;
}

.wrapper {
  display: flex;
  height: 95%;
}

.top-content {
  display: flex;
  height: 80%;
}

.bot-content {
  display: flex;
  height: 20%;
  background-color: #003049;
}

.right-content {
  position: relative;
  display: flex;
  width: 70%;
  height: 100%;
  flex-direction: column;
}

.elements {
  height: 100%;
}

.left-panel {
  width: 30%;
  height: 100%;
  background: linear-gradient(to top, #003049 10%, #f9ffcc, #003049 90%);
}

.right-panel {
  width: 100%;
  height: 80%;
  background-color: #d62828;
  overflow: hidden;
  cursor: grab;
  position: relative;
}

.bot-panel {
  display: flex;
  width: 100%;
  height: 100%;
}

.tools_wrapper {
  display: flex;
  width: 25%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
}

.tools_wrapper i {
  font-size: 4em;
  color: white;
  cursor: pointer;
}

.selectedTool {
  border: 4px solid white;
  border-radius: 15px;
}

.unselectedTool {
  border: none;
}

.grid-container {
  display: grid;
  position: relative;
}

.grid-token-container {
  position: absolute;
}

.grid-row {
  display: flex;
}

.grid-row-token {
  display: flex;
}

.grid-item-token {
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
  background-size: contain;
}

.grid-item {
  background-color: white;
  border: 1px solid #d62828;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: cover;
}

.grid-tile-container {
  pointer-events: none;
  /* z-index: 2; */
}

.grid-token-container {
  pointer-events: none;
  /* z-index: 3; */
}

.tileClicked,
.tokenClicked {
  pointer-events: auto;
}

.element-selected {
  position: fixed;
}
</style>
