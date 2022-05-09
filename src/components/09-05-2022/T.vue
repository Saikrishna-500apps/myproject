<template>
  <div>
      <b-button @click="fun">click</b-button>
    <b-pagination
      v-model="currentpage"
      :total-rows="rows"
      :per-page="perpage"
      aria-controls="my-table"
    ></b-pagination>
    <p class="mt-2">Current page:{{ currentpage }}</p>
<center>
    <b-table
      id="my-table"
      :items="res" :fields="fields"
      :per-page="perpage"
      :current-page="currentpage"
      small
    class="w-50"></b-table>
</center>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "SaI",
  data() {
    return {
      perpage: 3,
      currentpage: 1,
      fields: ["userId", "id", "title", "completed"],
      res:' '
    };
  },
  methods: {
    async fun() {
      let response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      this.res=await response.data
    },
  },
  computed:{
      rows(){
          return this.res.length
      }
  }
};
</script>
