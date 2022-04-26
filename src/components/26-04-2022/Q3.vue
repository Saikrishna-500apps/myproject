
3.CRUD operations
- Create simple form with first name and last name inputs with
add button
- Show created data in the table with columns first name and
last name
- Add update button for every row and if user clicks on that
button show prefill that row data in form and update the names
Add delete button and delete the user if clicks on button
<template>
  <div align="center"><b-row><b-col md="6" ><b-card>
          <b-form id="form">
            Enter First Name:<b-form-input id="s1" v-model="value1" placeholder="enter Firstname" ></b-form-input>
            Enter LastName:<b-form-input id="s2" v-model="value2" placeholder="enter Lastname" ></b-form-input>
            <b-button @click="Add()">Add</b-button>
            <b-button @click="Delete()">Delete</b-button>
            <b-button @click="Update()">Update</b-button>
          </b-form>
          <b-table
            striped
            hover
            :items="items"
            :fields="fields"
          ></b-table> </b-card></b-col
    ></b-row>
  </div>
</template>
<script>
export default {
  name: "QuE3",
  data() {
    return {
      items: [{ firstname: "", lastname: "" }],
      fields: ["firstname", "lastname"],
      value1: "",
    };
  },
  methods: {
    Add() {
      this.items.push({
        firstname: document.getElementById("s1").value,
        lastname: document.getElementById("s2").value,
      });
    },
    Delete() {
      this.items.pop();
    },
    Update() {
      this.items.Update({
        firstname: document.getElementById("s1").value,
        lastname: document.getElementById("s2").value,
      })
    },
  },
};
</script>
<style scoped>
div {
  align-content: center;
  padding-left: 45px;
}
</style>