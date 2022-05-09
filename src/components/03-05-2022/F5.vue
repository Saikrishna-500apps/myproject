<template>
  <div>
    <h2>Array into string</h2>

    <button @click="fun()">click</button>
  </div>
</template>

<script>
export default {
  name: "SaI",

  data() {
    return {
      myColor: ["Red", "Green", "White", "Black"],

      res: " ",
    };
  },

  methods: {
    fun() {
      this.res =
        console.log(this.myColor.toString()) +
        console.log(this.myColor.join(" ")) +
        console.log(this.myColor.join("+"));
    },
  },
};
</script>
