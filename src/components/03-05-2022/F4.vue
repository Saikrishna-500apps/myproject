<template>
  <div>
    <h2>Q4: function to check whether input is an array or not</h2>
    <button @click="fun">click</button><br /><br />
  </div>
</template>
<script>

 export default {
     name: "SaI",
  data(){
 return {
  res:" ",


     };
     },
            methods:{
                fun(){
                    function isArray(input){
                    return !!input.pop;
}
                    this.res =
                    console.log(isArray(''));
                    console.log(isArray([1, 2, 4, 0]));
                }
            
        
    },
}
</script>
