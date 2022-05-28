<template>
  <div>
      {{response}}
  </div>
</template>

<script>
export default {
    name:"app_1",
  props: { hello: Array },

  data() {
    return {};
  },
  mounted() {},
  methods: {
    click_method() {
      this.$emit("from_Prop2");
      console.log("mydata", this.hello);
    },
  },
};


</script>

<style>

</style>