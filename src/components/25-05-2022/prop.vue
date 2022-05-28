<template >
  <div  > 
    
    <h5>Items:{{Items}}</h5>
  <prop2 :hello="Items" @from_prop2="fun"></prop2>
  </div>
</template>  
<script>
import prop2 from "@/components/25-05-2022/prop2.vue";
export default {
  data(){
    return{
        Items: [
      { age: 58, firstname: "Lakshmi", lastname: "kovuru" },
      { age: 60, firstname: "Madhava", lastname: "kovuru" },
    ],
    }
  },
  name: "App",
  components: {prop2},
  props: {
   
  },
  methods: {
    fun() {
      // alert("keep it up");
      console.log('this parent : ');
    },
  },
};
</script>