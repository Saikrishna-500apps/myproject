


"Using Vue Bootstrap forms(b-form), Take the fields as NAME, EMAIL, Age and Contact
number. Display the filled form object in UI on click of SAVE BUTTO
<template>
  <div>
    <b-form name="form" @submit="fun()">
      NAME:<b-form-input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        required
      ></b-form-input
      ><br />
      Email:<b-form-input
        type="email"
        name="email"
        placeholder="Enter Your email"
        required
      ></b-form-input
      ><br />
      Age:<b-form-input
        type="number"
        name="age"
        placeholder="Enter Your age"
        required
      ></b-form-input
      ><br /><br />
      Contact:<b-form-input
        type="number"
        name="contactn"
        placeholder="Enter Your number"
        required
      ></b-form-input
      ><br />
      <b-button type="submit" value="Login">submit</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  name: "LakH",
  data() {
    return {};
  },
  methods: {
    fun() {
      document.write( "Name:   " + document.form.name.value + "</br> " + "Email:" + document.form.email.value +"<br>" +"Age:  " + document.form.age.value +"</br>" +"Contact:  " + document.form.contactn.value
      );
    },
  },
};
</script>
