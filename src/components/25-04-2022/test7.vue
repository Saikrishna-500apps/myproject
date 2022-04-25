<template>
  <div>
    <h1>Index of Id:88</h1>
    <button type="submit" @click="fun">Click</button><br />
    {{ "Index of Id is:" + " " + find }}
  </div>
</template>
<script>
export default {
  name: "PspK",
  data() {
    return {
      arr: [
        { id: 20, name: "Captain Piett" },
        { id: 24, name: "General Veers" },
        { id: 56, name: "Admiral Ozzel" },
        { id: 88, name: "Commander Jerjerrod" },
      ],
      find: "",
    };
  },
  methods: {
    fun() {
      this.find = this.arr.findIndex((row) => row.id == 88);
      return this.find;
    },
  },
};
</script>