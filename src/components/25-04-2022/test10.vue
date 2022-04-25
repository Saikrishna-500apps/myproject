<template>
  <div>
    <button @click="fun()">Click Me</button><br />
    {{ res }}
  </div>
</template>
<script>
export default {
  name: "SamT",
  data() {
    return {
      officers: [
        { id: 20, name: "Captain Piett" },
        { id: 24, name: "General Veers" },
        { id: 56, name: "Admiral Ozzel" },
        { id: 88, name: "Commander Jerjerrod" },
      ],
      res: "",
    };
  },
  methods: {
    fun() {
      this.res = this.officers.map(j=>{return j.id})
      return this.res;
    },
  },
};
</script>




