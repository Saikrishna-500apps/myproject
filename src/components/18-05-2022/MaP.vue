<template>
  <div>
    <button @click="fun()">Click</button><br />
    {{res}}
  </div>
</template>
<script>
export default {
  name: "MapFunction",
  data() {
    return {
      cars: [
        { id: 1, name: "RangeRover" },
        { id: 2, name: "LandRover" },
        { id: 3, name: "Jeep" },
        { id: 4, name: "volvo" },
      ],
      res: " ",
    };
  },
  methods: {
    fun() {
      this.res = this.cars.map((j) => {
        //return  j.name.includes("over") ;
console.log(j.id)
        

      });
    
    },
  },
};
</script>
