<template>
  <main>
    <NavBar />
    <RouterView />
  </main>
</template>

<script>

import NavBar from './components/mainComponents/NavBar.vue'

export default {
  components: {
    NavBar,
  }
}

</script>

<style>

@import 'style.css';

</style>