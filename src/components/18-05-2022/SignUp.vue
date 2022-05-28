<template>
  <div>
  <center>
               <h2>GroceryItems</h2>
           <b-card style="width: 20rem; height: 500px">   
       <div class="px-3 py-2"> 
     </div>
    <b-form><br />
          <b-form-group id="input-group-1" label="Username:" label-for="input-1">   
          <b-form-input id="input-1" v-model="form.Username" type="text" placeholder="Username" required></b-form-input>
          </b-form-group>
          <label for="text-password">Password:</label>
          <b-form-input type="password" placeholder="Password" v-model="form.password" id="text-password"></b-form-input>
          <b-form-text id="password-help-block">
          </b-form-text><br/><br />
          <router-link to="/text">
           <b-button type="submit" @click="click" variant="primary">SignUp</b-button>
          </router-link>
          </b-form>
         </b-card> 
    
</center>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      show: true
    };
  },
  methods: {
    click() {
      alert("login successful");``
      let username = document.getElementById("input-1");
      let password = document.getElementById("text-password");
      let date = new Date();
      var expire = new Date();
      expire.setTime(date.getTime() + 24 * 60 * 60 * 1000);
      document.cookie = "username=" + username.value + "path=/"+"expires" + expire.toUTCString();
      document.cookie = "password=" + (password.value)+"path=/"+"expires"+expire.toUTCString();
      localStorage.setItem("Username", this.form.username);
      localStorage.setItem("pasword", this.form.password);
      sessionStorage.setItem("Username", this.form.username);
      sessionStorage.setItem("password", this.form.password);
    },
    Submit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form)); 
    },
  },
};
</script>
<style>

</style>