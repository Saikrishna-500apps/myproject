<template>
  <div>
    <h5>Items:{{Items}}</h5>
    <My2 :hello="Items" @from_My2="fun"></My2>
      
  </div>
</template>

<script>
import My2 from "@/components/26-05-2022/My2.vue";
export default {
  data(){
    return{
      Items:[
         {product:"RangeRover",price:6500000,company:"leyland"},
         {product:"tablet",price:10,company:"Glynaze" },
         {product:"mobile", price:"iphone",company:"Apple"},
      ],

    }
  },
  name:"App",
  components:{My2},
  My2:{

  },
  methods:{
    fun(){
      console.log('this is parent:');
    },
  },

  };
</script>

