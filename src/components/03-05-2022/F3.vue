<template>
  <div>
    <h1>Question3:Get Unique Values of an Array</h1>

    <button @click="fun()">Click</button><br /><br />

    The Unique Values of an Array:{{ res }}
  </div>
</template>

<script>
export default {
  name: "SaI",

  data() {
    return {
      a: [1, 1, 2, 2, 2, 3, 4, 3, 2],

      res: " ",
    };
  },

  methods: {
    fun() {
      this.res = [...new Set(this.a)];

      return this.res;
    },
  },
};
</script>
