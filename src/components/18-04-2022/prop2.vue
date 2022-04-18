<template>
  <div class="hello">
     
    <prop :message="message"
      :name="name"
      ref="ref"
      :number="number"
      :mantra="mantra"
    ></prop>
    <prop  :message="message"
      :name="name"
      ref="refo"
      
      :Items="Items"
    ></prop>
    hello world <button @click="click()">submit</button>
  </div>
</template>
<script>
import prop from "@/components/18-04-2022/prop.vue"
export default{
  name:'SaI',

components: { prop }, 
data(){
  return{ 
    message:"identity", 
    name:"sai", 
    number:"1176",
 Items:[
   {age:27,firstname:"sai",lastname:"kovuru"},
 {age:24,firstname:"siri",lastname:"kovuru"}
  ], 
mantra:"mantra technologies" 
} 
}, 
mounted: function(){

},
methods:{ click()
{
   this.$refs.ref.fun(); this.$refs.refo.Items; console.log("i did it") 
}
 }
  } 
  </script>
