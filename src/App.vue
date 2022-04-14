<template>
  <div id="app">
    
    <HelloWorld />
    <crm/>
    <router-view/>
    <crm/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import demo from "./components/demo.vue"
//import crm from './components/crm.vue'
import crm from './components/13-04-2022/crm.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld,
   // demo,
   //bform,
   //btable,
   
    crm,
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
