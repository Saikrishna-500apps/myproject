
   <template>
  <div>
    
    <form @submit="login">
      <input type="text" placeholder="enter name" v-model="name" /><br /><br />
      <input type="Email" placeholder="enter mail" v-model="password"><br /><br />
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
      name: null,
      mail: null,
    };
  },
  methods: {
    login() {
     
    document.write("First Name:"+document.form.fname.value+"</br> "+"Last Name:"+document.form.lname.value+

"<br>"+"Password:"+document.form.Epassword.value+"<br>"+"CPassword:"+document.form.Cpassword.value+"Email:"+document.form.Email.value);
    },
  },
};
</script>

            