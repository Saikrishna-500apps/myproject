<template>
  <div id="app">
    
    <HelloWorld />
    <bforms/>
    <router-view/>
    <bform/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import demo from "./components/demo.vue"
import bform from './components/bform.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld,
   // demo,
   bform,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
