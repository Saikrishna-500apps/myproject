Q1.Display users list in alphabetical and reverse order in UI.
Users =
[{name:”500apps”,id:1},
{name:”Technologies”,id:2},{name:”Agile”,id:3},
{name:”Mantra”,id:4},{name:”Clockly”,id:5},{name:”CRM”,id:6},{name:”500apps”,id:7}]
<template>
  <div>
    <h1>users list</h1>
    <button @click="start()">Alphabatical Order</button><br /><br />
    <button @click="runreverse()">Reverse Order</button>
  </div>
</template>
<script>
export default {
  name: "PradyU",
  data() {
    return {
      Users: [
        { name: "500apps", id: 1 },
        { name: "Technologies", id: 2 },
        { name: "Agile", id: 3 },
        { name: "Mantra", id: 4 },
        { name: "Clockly", id: 5 },
        { name: "CRM", id: 6 },
        { name: "500apps", id: 7 },
      ],
      field: ["name"],
    };
  },
  methods: {
    start() {
      console.log(
        this.Users.sort((a, b) =>
          (a[this.field] || "")
            .toString()
            .localeCompare((b[this.field] || "").toString())
        )
      );
    },
    runreverse() {
      console.log(
        this.Users.sort((a, b) =>
          (a[this.field] || "")
            .toString()
            .localeCompare((b[this.field] || "").toString())
        ).reverse()
      );
    },
  },
};
</script>