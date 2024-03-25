<template>
  <h1>Hello App!</h1>

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