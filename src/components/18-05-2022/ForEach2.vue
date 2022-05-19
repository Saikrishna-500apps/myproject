<template>
  <div> 
      <button @click="fun()" >click me</button>
  </div>
</template>

<script>
export default {
    name:"ForEach",
    data(){
        return{
            arr:[1,2,0,5,8,7,9,4],
            res:" "
        }
    },
    methods:{
        fun(){
            this.res = this.arr.forEach((row)=>{
                console.log(row)
            });
        }
    }
}
</script>

<style>

</style>


