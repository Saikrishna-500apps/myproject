
<template>
  <div>
    <child :name="name" :number="number" :Items="items"></child>
  </div>
</template>
<script>
import child from "./child1.vue";
export default {
  name: "ParenT",
  components: { child },
  data() {
    return {
      message: "my message",
      name: "",
            items: [
                { age: 27, firstname: "sai", last: "kovuru" },
      ],
    };
  },
};
</script>