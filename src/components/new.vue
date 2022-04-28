
   <template>
  <div>
    <p v-if="error.length">
      <b> please correct the following errors</b>
    </p>
    <form @submit="login">
      <input type="text" placeholder="enter name" v-model="name" /><br /><br />
      <input
        type="password"
        placeholder="enter password"
        v-model="password"><br /><br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name:"LogiN",

  data() {

    return {
      error: [],
      name: null,
      password: null,
    };
  },
  methods: {
    login(e) {
      if (this.name && this.password) {
        console.log("Login function called");
      }
      this.error = [];
      if (!this.name) {
        this.error.push("name is requried");
      }
      if (!this.password) {
        this.error.push("password is requried");
      }
      console.warn("erros", this.error);
      e.preventDefault();
    },
  },
};
</script>

            