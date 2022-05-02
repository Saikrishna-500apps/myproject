<template>
  <div>
    <b-form-input v-model="text" placeholder="Enter country name"></b-form-input><br/>
    <button @click="getData1">Submit</button><br/><br/>
    <b-table striped hover :items="posts" ></b-table>
  </div>
</template>
<script>
export default {
  name: "BooT",
  data() {
    return {
      posts: [],
    };
  },

  methods: {
    async getData1() {
      try {
        let response = await fetch("http://universities.hipolabs.com/search?country=" + this.text);
        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData1();
  },
};
</script>


