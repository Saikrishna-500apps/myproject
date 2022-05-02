<template>
  <div>
    <h3>axios</h3>
    <button @click="fun1()">click</button>
  </div>
</template>
<script>
const axios = require("axios").default;
export default {
  name: "AxioS",
  data() {
    return {
      posts: "",
    };
  },
  methods: {
    async fun1() {
      let response = await axios.get(
        "http://universities.hipolabs.com/search?country="
      );
      console.log(response);
    },
  },
  created() {
    console.log(this.posts);
  },
};
</script>

<style>
</style>