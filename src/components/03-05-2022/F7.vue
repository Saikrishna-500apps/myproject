
<template>
    <div>
        <h2>Q7:remove duplicate elements from array</h2>
      <button @click="fun()">click</button><br /><br />
      duplicate elements:{{uniqueArray}}
    </div>
</template>

<script>
export default {
    name: "SaI",
     data(){
         return{
             array:[1,1,1,2,2,3,3,4,5,6,11,12,12,11,25,25,23,56],
         uniqueArray: " ",
         };
     },
     methods:{
         fun() {
          this.uniqueArray = [...new Set(this.array)];
        return this.uniqueArray;
        
        },
     },
};
</script>







