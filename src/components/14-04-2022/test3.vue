<template>
  <div>
    <form @submit="login">
      <input type="text" placeholder="First name" v-model="Firstname"/>&nbsp;
      <input type="text" placeholder="Mother name" v-model="mothername" /><br><br>
     <input type="text" placeholder="Middle name" v-model="Middelname" />&nbsp;
      <input type="text" placeholder="Father name" v-model="fathername" /><br><br>
      <input type="text" placeholder="Last name" v-model="Lastname" />&nbsp;
       <input type="text" placeholder="Blood group" v-model="bloodrgroup" /><br><br>
      <button type="submit">Login</button>
    </form>
  </div>
</template>
    <script>
export default {
  name: "LogiN",

  data() {
    return {
      error: [],
      firstname: null,
      middlename: null,
      lastname: null,
    };
  },
  methods: {
    login() {
      document.write("First Name:" +document.form.fname.value +"</br> " +"Middle Name:" +
       document.form.Mname.value + "<br>"+"Last Name:"+document.form.Lname.value);
    },
  },
};
</script>
    

