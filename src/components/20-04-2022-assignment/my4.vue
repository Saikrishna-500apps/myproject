<template>
  <div>
    <button @click="handle()">click</button>
  </div>
</template>


<script>
export default {
  name: "SeP",

  methods: {
    handle() {
      try {
        this.out = this.count * 5;

        document.write("printing count ", this.count);
      } catch {
        document.write("count ");
      }
    },
  },
};
</script>