 <template>
  <div>
    <h1>Example filter</h1>

    <input type="text" v-model="res" placeholder="enter the text" />

    <button @click="func()">click</button>
  </div>
</template>

<script>
export default {
  name: "NinE",

  data() {
    return {
      array: ["teja", "kandukur", "ongole", "nellore", "hyderabad", "vizag"],

      res: "",
    };
  },

  methods: {
    func() {
      const value = this.array.filter((sai) => {
        return sai.includes(this.res);
      });

      console.log(value);
    },
  },
};
</script>