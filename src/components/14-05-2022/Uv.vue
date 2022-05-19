<template>
  <div>
      <b-button @click="fun">click</b-button>
     <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      class="mt-4">
      <template #first-text><span class="text-success">First</span></template>
      <template #prev-text><span class="text-danger">Prev</span></template>
      <template #next-text><span class="text-warning">Next</span></template>
      <template #last-text><span class="text-info">Last</span></template>
      <template #ellipsis-text>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
      </template>
      <template #page="{ page, active }">
        <b v-if="active">{{ page }}</b>
        <i v-else>{{ page }}</i>
      </template>
    </b-pagination>
    <p class="mt-2">Current page:{{ currentpage }}</p>
<center>
    <b-table id="my-table" :items="res" :fields="fields" :per-page="perpage" :current-page="currentpage" small class="w-50"> </b-table>
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
