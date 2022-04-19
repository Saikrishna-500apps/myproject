<template>
  <div>
    <h3>fetch api</h3>

    <button @click="getData()">click</button>

    <b-form-input
      v-model="value"
      placeholder="Enter country name"
    ></b-form-input>

    <b-table striped hover :items="posts" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: "DatA",

  data() {
    return {
      posts: " ",

      fields: ["name", "country", "web_pages"],
    };
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