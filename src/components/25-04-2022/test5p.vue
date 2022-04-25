<template>
  <div>
    <Child @check="fun"></Child>
  </div>
</template>
<script>
import Child from "./emitchild1.vue";
export default {
  name: "EmiT",
  components: {
    Child,
  },
  data() {
    return {};
  },
  methods: {
    fun() {
      document.write("parent ");
    },
  },
};
</script>parent