<template>
  <div>
    <h1>Even Or Odd Number</h1>

    <button type="submit" @click="normal(2)">NormalFunc</button>

    <button type="submit" @click="arrow(5)">ArrowFunc</button>
  </div>
</template>


<script>
export default {
  name: "SsS",

  data() {
    return {};
  },

  methods: {
    normal(a) {
      if (a % 2 == 0) {
        console.log("Even Number");
      } else {
        console.log("Odd Number");
      }
    },

    arrow: (a) => {
      if (a % 2 == 0) console.log("Even Number");
      else console.log("Odd Number");
    },
  },
};
</script>