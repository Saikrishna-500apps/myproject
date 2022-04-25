<template>
  <div>
    <button type="submit" @click="f1">Result</button>
  </div>
</template>
<script>
export default {
  name: "TeJ9",
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6],
      arr2: [7, 8, 9],
      res: [],
    };
  },
  methods: {
    f1() {
      (this.res = [...this.arr, ...this.arr2]), document.write(this.res);
    },
  },
};
</script>