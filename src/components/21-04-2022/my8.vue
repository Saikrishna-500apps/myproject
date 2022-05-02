<template>
  <div class="hello">
    <child :name="name" ref="ref1"></child>
    <button @click="click()">submit</button>
  </div>
</template>
<script>
import child from "./mychild.vue";
export default {
  name: "KtR",
  components: { child },
  data() {
    return {
      name: "TeJ",
    };
  },
  mounted: function () {},
  methods: {
    click() {
      this.$refs.ref1.fun();
    },
  },
};
</script>