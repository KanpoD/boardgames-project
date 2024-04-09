<script setup lang="ts">
import { ref } from 'vue'
import html2pdf from "html2pdf.js";
import DobbleCard_1 from "./dobbleCards/DobbleCard_1.vue";
import DobbleCard_2 from "./dobbleCards/DobbleCard_2.vue";
import DobbleCard_3 from "./dobbleCards/DobbleCard_3.vue";
import DobbleCard_4 from "./dobbleCards/DobbleCard_4.vue";
import DobbleCard_5 from "./dobbleCards/DobbleCard_5.vue";
import DobbleCard_6 from "./dobbleCards/DobbleCard_6.vue";
import DobbleCard_7 from "./dobbleCards/DobbleCard_7.vue";
import DobbleCard_8 from "./dobbleCards/DobbleCard_8.vue";



let symbolsByCard: number;
const symbolsAmount = ref(0);
const images = ref([]);
const isValid = ref(false);
const isGenerated = ref(false);
const hideParams = ref(false);
const dobbleCards = ref([
    {
        id: 0,
        url: ''
    }
]);

var html2pdfOptions = {
  margin:       1,
  filename:     'dobble.pdf'
};



function onSymbolAmountChange() {
    let n = symbolsByCard - 1;
    this.symbolsAmount = n * n + n + 1;
    if (this.dobbleCards.length > 0) {
        this.images = [];
        this.dobbleCards = [];
    }
}

function onFileChange($event) {
    var files = $event.target.files || $event.dataTransfer.files;
    if (!files.length) return;
    this.createImage(files);
}

function createImage(files: any) {
    var vm = this;
    for (var index = 0; index < files.length; index++) {
    var reader = new FileReader();
    reader.onload = function(event) {
        const imageUrl = event.target.result;
        if (vm.images.indexOf(imageUrl) == -1){
            vm.images.push(imageUrl);
        }
    }
    reader.readAsDataURL(files[index]);
    }
    
}

function removeImage(index) {
    this.images.splice(index, 1);
    onSymbolAmountChange();
}

function previewCards() {
    
    // Empty card list if already generated
    if (this.dobbleCards.length > 0) {
        this.dobbleCards = [];
    }

    // Create card List
    let cards = [];
    let n = this.symbolsByCard - 1;

    for (let i = 0; i < n + 1; i++) {
        cards.push([1]);
        for (let j = 0; j < n; j++) {
            cards[i].push((j+1) + (i*n) +1);
        }
    }
    for (let i = 0; i < n ; i++) {
        for (let j = 0; j < n; j++) {
            cards.push([i + 2]);
            for (let k = 0; k < n; k++) {
                let val = (n+1 + n*k + (i*k+j)%n)+1;
                cards[cards.length-1].push(val);
            } 
        }
    }
    for (let i = 0; i < cards.length ; i++) {
        let currCard = [];
        for (let j = 0; j < n + 1; j++) {
            currCard.push(this.images[cards[i][j] - 1 ]);
        }
        this.dobbleCards.push({ id: i + 1 , url: currCard});
    }
    this.isGenerated = true;
}

function exportCards() {
    //Export en PDF
    let elem = document.getElementById('dobbleCardsID');
    html2pdf().set(html2pdfOptions).from(elem).save();
}
</script>

<template>
  <h2 id="titre" class="title">Editeur de Dobble</h2>
  <div class="generation-container" :class="hideParams ? 'hideParams' : ''">
    <div class="params-container">
        <h3>Combien de symboles par carte souhaitez-vous ?</h3>
        <select v-model="symbolsByCard" @change="onSymbolAmountChange()">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8 (Standard)</option>
        </select>
    </div>
    <div class="file-upload-container" :class="symbolsByCard ? '' : 'hideUpload'">
        <div>Pour {{ symbolsByCard }} symboles par cartes, il vous faut {{ symbolsAmount }} images</div>
        <div class="actions">
            <button class="previewCards validateBtn" :class="images.length === symbolsAmount ? '' : 'hidePreview'" @click="previewCards()">Valider</button>
            <button class="previewCards exportBtn" :class="isGenerated && images.length === symbolsAmount ? '' : 'hideExport'" @click="exportCards()">Télécharger les cartes en PDF</button>
        </div>
        <div>Glissez ou déposez vos fichier png</div>
        <input multiple type="file"  @change="onFileChange($event)">
        <div :class="images.length > 0 ? '' : 'hideListImage'" id="listImages" class="img-list-container" v-if="images">
            <div v-for="(image, index) in images" class="image">
                <img class="image-file" :src="image" />
                <button class="img-remover" @click="removeImage(index)">Supprimer</button>
            </div>
        </div>
        <div id="print-btn"></div>
    </div>
  </div>
  <div :class="isGenerated ? '' : 'hideDobbleCards'" class="dobbleCards-container">
    <ul id="dobbleCardsID" class="dobbleCards">
        <DobbleCard_1 :class="symbolsByCard == 1 ? '' : 'hideCard'" v-for="card in dobbleCards" :urls="card.url"/>
        <DobbleCard_2 :class="symbolsByCard == 2 ? '' : 'hideCard'" v-for="card in dobbleCards" :urls="card.url"/>
        <DobbleCard_3 :class="symbolsByCard == 3 ? '' : 'hideCard'" v-for="card in dobbleCards" :urls="card.url"/>
        <DobbleCard_4 :class="symbolsByCard == 4 ? '' : 'hideCard'" v-for="card in dobbleCards" :urls="card.url"/>
        <DobbleCard_5 :class="symbolsByCard == 5 ? '' : 'hideCard'" v-for="card in dobbleCards" :urls="card.url"/>
        <DobbleCard_6 :class="symbolsByCard == 6 ? '' : 'hideCard'" v-for="card in dobbleCards" :urls="card.url"/>
        <DobbleCard_7 :class="symbolsByCard == 7 ? '' : 'hideCard'" v-for="card in dobbleCards" :urls="card.url"/>
        <DobbleCard_8 :class="symbolsByCard == 8 ? '' : 'hideCard'" v-for="card in dobbleCards" :urls="card.url" :isFifteenth="card.id%15 == 0"/>

    </ul>
  </div>
</template>

<style>
.img-list-container {
    margin: 3rem auto;
    display: flex;
    max-width: 80vw;
    overflow: scroll;
}

.image {
   margin: 0 1rem;
}

.image-file {
    max-width: 8rem;
}

.img-remover {
    margin: 0.2rem auto;
    display: block;
}

.hideUpload {
    display: none;
}

.hidePreview {
    display: none;
}

.hideParams {
    display: none;
}

.hideExport {
    display: none;
}

.hideCard {
    display: none;
}

.hideListImage {
    display: none;
}

.hideDobbleCards {
    display: none;
}

.dobbleCards {
    /* -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3; */
    width: 650px;
    overflow: scroll;
    margin: 3rem auto;
    /* display: flex; */
    /* flex-wrap: wrap; */
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.actions {
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    width: fit-content;
}

.validateBtn {
    margin: 1rem auto;
}

.exportBtn {
    margin: 1rem auto;
}
</style>