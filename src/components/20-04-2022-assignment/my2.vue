<template>
  <div>
    <h1>Set Time Out</h1>
    <p>{{ time }}</p>
    <button @click="func()">click</button>
  </div>
</template>
<script>
export default {
  name: "BhA",
  data() {
    return {
      time: "",
    };
  },
  methods: {
    func() {
      setTimeout(() => {
        this.time = new Date();
      }, 5000);

      setInterval(() => {
        this.time = new Date();
      }, 6000);
    },
  },
};
</script>