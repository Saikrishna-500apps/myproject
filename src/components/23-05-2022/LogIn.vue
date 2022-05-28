<template>
  <div>
    <center>
      <b-card
        class="w-25"
        header="Grocery" header-bg-variant="info" bg-variant="success" border-variant="dark" > <b-form>
     <label id="uname" v-modal="form.Username"><b>Username:</b></label><br />
          <input type="text" placeholder="Enter Username" name="uname" required/><br />
          <label id="Pass" v-modal="form.Password"><b>Password:</b></label><br />
          <input type="text" placeholder="Enter password" name="password" required/><br /><br />
          <b-button type="submit" @click="click" variant="primary">SignUp</b-button>
        </b-form>
      </b-card>
    </center>
    <b-button variant="info" id="home">
      <b-icon icon="house-door-fill" variant="light" scale="1.5" shift-h="-1.9" ></b-icon>
    </b-button>

    <b-button v-b-toggle.sidebar-1 variant="info" id="list">
      <b-icon icon="list" variant="light" scale="1.5" shift-h="-1.9"></b-icon>
    </b-button>
    <b-sidebar id="sidebar-1"> </b-sidebar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form:{
      UserName: " ",
      Password: " ",
    },
  };
},
methods: {
  click(){
    alert("login sucessful");
      let UserName = document.getElementById("uname");
      let Password = document.getElementById("pass");
      let date = new Date();
      var expire = new Date();
      expire.setTime(date.getTime() + 24 * 60 * 60 * 1000);
      document.cookie = "username=" + UserName.value + "path=/"+"expires" + expire.toUTCString();
      document.cookie = "password=" + (Password.value)+"path=/"+"expires"+expire.toUTCString();
      localStorage.setItem("uname", this.form.UserName);
      localStorage.setItem("pass", this.form.Password);
      sessionStorage.setItem("uname", this.form.UserName);
      sessionStorage.setItem("pass", this.form.Password);

  },
      Submit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      },
},
};
</script>

<style>
#home {
  position: relative;
  bottom: 271px;
  left: 200px;
  height: 40px;
  width: 40px;
}
#list {
  position: relative;
  bottom: 271px;
  right: 210px;
  height: 40px;
  width: 40px;
}
</style>
