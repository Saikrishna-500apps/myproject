<template>
  <div>
    <h3>fetch api</h3>
     <button @click="getData()">click</button>
    <b-form-input v-model="value" placeholder="Enter country name" ></b-form-input>
    <b-table striped hover :items="posts" :fields="fields"></b-table>
    <Prop2/>
  </div>
</template>

<script>
import Prop2 from "./Prop2";

export default {
  name: "app_1",
   components: { Prop2 },
  data() {
    return {
      posts: " ",

      fields: ["name", "country", "web_pages"],
    };
  },
 
  props:{

  },
  methods: {
    async getData() {
      try {
        let response = await fetch(
          "http://universities.hipolabs.com/search?country=" + this.value
        );

        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
  },
  
};
</script>

<style>