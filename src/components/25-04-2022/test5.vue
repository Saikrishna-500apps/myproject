<template>
  <div>
    <button @click="sample">click</button>
  </div>
</template>
<script>
export default {
  name: "emitEvent",
  components: {},
  data() {
    return {};
  },
  methods: {
    sample() {
      document.write("child");
      this.$emit("check");
    },
  },
};
</script>