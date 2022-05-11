<template>
  <div>
    <button @click="show()">click</button>&nbsp;
    <b>{{ s3 }}</b>
  </div>
</template>
<script>
export default {
  name: "SaI",
  data() {
    return {
      s1: "Life", s2: "File",
      s3: " ",
    };
  },
  methods: {
    show() {
      this.s3 =
        this.s1.len === this.s2.len
        this.s1.split("Life") == this.s2.split("File")
    },
  },
};
</script>
