<template>
  <div>
    <h3>pormise</h3>
    <button @click="fun1()">click</button>
  </div>
</template>
<script>
export default {
  name: "PrO",
  data() {
    return {
    };
  },
  methods: {
    fun1() {
      var promise = new Promise(function (resolve, reject) {
        const x = "MantraTechnologies";
        const y = "MantraTechnologi"
        if (x == y) {
          resolve();
        } else {
          reject();
        }
      });
      promise
        .then(function () {
          console.log("Success");
        })
        .catch(function () {
          console.log("Something fishy");
        });
    }
  }
}
</script>
