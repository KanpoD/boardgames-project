<script setup lang="ts">
import { ref } from 'vue'
import html2pdf from "html2pdf.js";
import DobbleCard from "./DobbleCard.vue";



let symbolsByCard: number;
const symbolsAmount = ref(0);
const images = ref([]);
const isValid = ref(false);
const hideParams = ref(false);
const dobbleCards = ref([]);

function onSymbolAmountChange(value :any) {
    let n = symbolsByCard - 1;
    this.symbolsAmount = n * n + n + 1; 
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
            if (vm.images.length === vm.symbolsAmount) {
                vm.isValid = true;
            }
        }
    }
    reader.readAsDataURL(files[index]);
    }
    
}

function removeImage(index) {
    this.images.splice(index, 1);
}

function submit() {
    
    // To do : Générer la liste

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
        this.dobbleCards.push(currCard);
    }


    //Export en PDF
    let elem = document.getElementById('dobbleCardsID');
    html2pdf().from(elem).save();
}
</script>

<template>
  <h2 id="titre" class="title">Editeur de Dobble</h2>
  <div class="generation-container" :class="hideParams ? 'hideParams' : ''">
    <div class="params-container">
        <h3>Combien de symboles par carte souhaitez-vous ?</h3>
        <select v-model="symbolsByCard" @change="onSymbolAmountChange($event)">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </div>
    <div class="file-upload-container" :class="symbolsByCard ? '' : 'hideUpload'">
        <div>Pour {{ symbolsByCard }} symboles par cartes, il vous faut {{ symbolsAmount }} images</div>
        <button class="submit" :class="isValid ? '' : 'hideSubmit'" @click="submit()">Valider</button>
        <div>Glissez ou déposez vos fichier png</div>
        <input multiple type="file"  @change="onFileChange($event)">
        <div id="listImages" class="img-list-container" v-if="images">
            <div v-for="(image, index) in images" class="image">
                <img class="image-file" :src="image" />
                <button class="img-remover" @click="removeImage(index)">Supprimer</button>
            </div>
        </div>
        <div id="print-btn"></div>
    </div>
  </div>
  <div class="dobbleCards-container">
    <ul id="dobbleCardsID" class="dobbleCards">
        <DobbleCard class="" v-for="card in dobbleCards" :symbolNumber="symbolsByCard" :urls="card"/>
    </ul>
  </div>
</template>

<style>
.img-list-container {
    margin: 3rem auto;
    display: flex;
    max-width: 80%;
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

.hideSubmit {
    display: none;
}

.hideParams {
    display: none;
}

.dobbleCards {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    width: 80%;
    overflow: scroll;
    margin: 3rem auto;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
 
}
</style>