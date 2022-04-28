<template>
  <div class ="container">
      <table class="table table-striped table-bordered w-50">
      <tr>
        <th>Name</th>
        <th>index</th>
      </tr>
      <tr v-for = "user in users" :key= "user.id">
        <td> {{user.Name}}</td>
        <td> {{user.index}}</td>
      </tr>
      
    </table>
  </div>
</template>
<script>
export default{
  name: "SaI",
  data(){
    return{
      users:[
        {Name: " Agile CRM ",description: "A company of excellence ",index:0},
        {Name: " Mantra technologies",description: " 500apps ",index:1},
        {Name: " 500apps python",description: "Backend using python ",index:2},
        {Name: " 500apps infinity",description: "built using vue js ",index:3}
      ],
    };
  },

};
</script>