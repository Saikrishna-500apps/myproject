
// //"Using Vue Bootstrap table(b-table) print the below data.
// [
// {""email"": ""Eliseo@gardner.biz"",""
id"": 1,""name"": ""id labore ex et quamlaborum""}, {""email"": ""Jayne_Kuhic@sydney.com"",""id"": 2,
""name"": ""quo vero reiciendisvelit
// similique
// earum""},
 {""email"": ""Nikita@garfield.biz"",""id"": 3,""name"": ""odio adipisci rerumaut animi""},
  {""email"": ""Lew@alysha.tv"",""id"": 4,""name"": ""alias odio sit""}







<template>
    <div>
      <center>
       <b-table striped hover :items="items" class = "w-25"></b-table>
      </center>
  </div>
</template>
<script>
  export default {
    name:'MadH',
    data() {
      return {
        items: [
          { email:"Eliseo@gardner.biz", id: 1,  name: "id labore ex et quam laborum" },
          { email: "Jayne_Kuhic",id:2 ,name:"quo vero reiciendis velit similique"},
          { email:"Nikita@garfield.biz" , id: 3,name: "odio adipisci rerum aut animi"},
          { email:"Lew@alysha.tv" , id: 4,name: "alias odio sit" }
        ]
      }
    }
  }

</script>

