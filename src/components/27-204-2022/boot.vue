<template>
  <div>
    <b-form-input v-model="text" placeholder="Enter country" required></b-form-input><br />
    <b-button @click="getData1">Submit</b-button><br /><br />
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
        let response = await fetch("http://universities.hipolabs.com/search?country=" + this.text
        );
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


