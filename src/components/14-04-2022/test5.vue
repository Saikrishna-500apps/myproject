<template>
  <div>
    <h2>Facebook</h2><br>
    <form @submit="login">

        First name:<input type="text" v-model="Firstname"/>&nbsp; &nbsp;
        Last  name:<input type="text" v-model="Lastname"/><br><br>
        Mobile number:<input type="text" v-model="mobilenumber"/>&nbsp; &nbsp;
        email:<input type="text" v-model="email"/><br><br>
        Password:<input type="text" v-model="password"/>&nbsp; &nbsp;
        alternatephone:<input type="text" v-model="alternatephone"/><br><br>


        <button type="submit">Login</button>




    </form>
        </div>

</template>
<script>
export default {
  name: "TejA",

  data() {
    return {
      error: [],
      firstname: null,
      lastname: null,
      mobilenumber: null,
      password: null,
    };
  },
  methods: {
    login() {
      document.write("First Name:" +document.form.fname.value +"</br> " +"Last Name:" +
       document.form.Lname.value + "<br>"+"Mobile number:"+document.form.Mnumber.value+"</br> "+"password:"+document.form.password.value);
    },
  },
};
</script>