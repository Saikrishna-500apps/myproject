<template>
  <div>
      <button @click="click_method()">submit</button>
  </div>
</template>

<script>
export default {
    name: "App",
My2:{hello:Array},
 
  data() {
    return {
     
    };
  },
  mounted() {},
  methods: {
   click_method() {
     this.$emit('from_My2');
     console.log("hi",this.hello);
   },
  },
};


</script>

<style>

</style>