
<template>
  <div>
    <p>name:{{ name }}</p>
       <p>item:{{ Items }}</p>
  </div>
</template>
<script>
export default {
  name: "ProP",
  components: {},
  props: {
    name: String,
    number: Number,
    Items: Array,
  },
};
</script>