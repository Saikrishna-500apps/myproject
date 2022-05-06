<template>
  <div>
    <h2>computed properties</h2>
    <b-button v-on:click="a++" variant="info">Add to A</b-button> &nbsp;
    <b-button v-on:click="b++" variant="primary">Add to B</b-button>
    <p>A-{{ a }}</p>
    <p>B-{{ b }}</p>
    <p>Age+A ={{ addToA()}}</p>
    <p>Age+B ={{ addToB()}}</p>
  </div>
</template>
<script>
export default {
  name: "SaI",

  data() {
    return {
      age: 20,
      a: 0,
      b: 0,
    };
  },
    methods: {
    addToA() {
      console.log("addToA");
      return this.a + this.age;
    },
    addToB() {
      console.log("addToB");
      return this.b + this.age;
    },
  },
};
</script>
