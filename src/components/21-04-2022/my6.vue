<template>
  <div>
    <h3>fetch api</h3>
    <button @click="getData()">click</button>
    <b-card v-for="value in items" :key="value.domains" class="mb-2">
      <b-card-text>name: {{ value.name }} </b-card-text>
      <b-card-text>Email: {{ value.email }}</b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "SeS",
    data() {
    return {
      value: "",
      items: [],
      posts: " ",
      fields: ["name", "email"],
    };
  },
  methods: {
    async getData() {
      let response = await fetch("http://www.json-generator.com/api/json/get/bSldINskRK=" + this.value);
      this.posts = await response.json();
    },
  },
  created() {
    this.getData();
  },
};
</script>