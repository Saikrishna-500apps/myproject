<template>
  <div>
    <h4>Removing undefined and values from an array</h4>
    <button @click="fun()">Click</button><br /><br />
    Output:{{ res }}
  </div>
</template>

<script>
export default {
  name: "SaI",

  data() {
    return {
      res: " ",
    };
  },

  methods: {
    fun() {
      function filterarray(test_array) {
        let index = -1;
        const arrlength = test_array ? test_array.length : 0;
        let Index1 = -1;
        const result = [];
        while (++index < arrlength) {
          const value = test_array[index];
          if (value) {
            result[++Index1] = value;
          }
        }
        return result;
      }
      return (this.res = filterarray([NaN,0,15,false,-22,"",undefined,47,null]));
    },
  },
};
</script>
