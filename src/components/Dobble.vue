<script setup lang="ts">
import { ref } from 'vue'
let symbolsByCard: number;
const symbolsAmount = ref(0);
const images = ref([]);
const isValid = ref(false);

function onSymbolAmountChange(value :any) {
    console.log(this.symbolsByCard);
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
        console.log(imageUrl);
        vm.images.push(imageUrl);
        if (vm.images.length === vm.symbolsAmount) {
            vm.isValid = true;
        }
    }
    reader.readAsDataURL(files[index]);
    }
    
}

function removeImage(index) {
    this.images.splice(index, 1)
}
</script>

<template>
  <h2 class="title">Editeur de Dobble</h2>
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
    <div class="img-list-container" v-if="images">
        <div v-for="(image, index) in images" class="image">
            <img class="image-file" :src="image" />
            <button class="img-remover" @click="removeImage(index)">Remove image</button>
        </div>
    </div>
  </div>
</template>

<style>
.img-list-container {
    margin: 3rem 0;
    display: block;
    max-width: 70%;
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
</style>