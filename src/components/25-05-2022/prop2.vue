<template>
  <div class="hello">hello <button @click="click_method()">submit</button></div>
</template>
<script>
export default {
  name: "App",
  props: { hello: Array },

  data() {
    return {};
  },
  mounted() {},
  methods: {
    click_method() {
      this.$emit("from_prop2");
      console.log("mydata", this.hello);
    },
  },
};
</script>
