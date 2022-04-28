<template>
  <div>
    <h4>name:{{ name }}</h4>
  </div>
</template>
<script>
export default {
  name: "propS",
  components: {},
  props: {
    name: { default: "mahi", type: String },
  },
  methods: {
    fun() {
      alert("keep it up");
    },
  },
};
</script>