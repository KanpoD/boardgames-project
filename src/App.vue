<template>
  <main>
    <h1>Hello App!</h1>
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

main {
  padding-top: 50px;
}
</style>