<template>
  <div id="app">
    <HomeView></HomeView>
    <AboutView></AboutView>
    <button>+1</button>
  </div>
</template>
<script>
import HomeView from '@/views/HomeView'
import AboutView from '@/views/AboutView'
export default {
  components: {
    HomeView,
    AboutView
  }
}
</script>
<style>
</style>
