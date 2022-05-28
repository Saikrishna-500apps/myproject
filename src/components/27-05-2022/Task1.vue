<template>


  <div>

  <table class="css-serial">
    </table>
    <b-navbar toggleable="" type="dark" variant="info"><br /> </b-navbar>
    <div>
      <b-container>
        <b-button
          class="button1"
          type="submit"
          v-on:click="Text()"
          variant="primary"
          >Vue</b-button
        >
      </b-container>
      <b-button class="button" variant="success">
        login: sai krishna teja</b-button
      ><br />
    </div>
    <b-button @click="Create">Add contact</b-button><br />
    <b-table class="css-serial" striped hover :items="tableData" :fields="columns" id="table">
      <template #cell(action)="data">
        <b-button @click="Edit(data.item)" variant="info">Update</b-button>
        <b-button @click="Delete(data.item)" v-modal="'edit-modal'" variant="danger">Delete</b-button>
      </template>
    </b-table>

    <b-modal v-model="modalShow" title="AddEmploye" hide-footer>
      <b-form @submit.prevent="save">
        <slot :formdata="editedItem" name="input-fields"> </slot>
        <b-button type="submit" variant="success"> Submit</b-button>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "app",
  props: ["endpoint", "columns", "formFields"],
  data() {
    return {
      editedItem: this.formFields,
      modalShow: false,
      editedIndex: -1,
      tableData:[],
    };
  },
  computed: {
    Title() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    
  },
  methods: {
    Create() {
      this.modalShow = true;
      this.editedItem = Object.assign({}, this.formFields);
      this.editedIndex = -1;
    },
    Edit(item) {
      this.modalShow = true;
      this.editedIndex = this.tableData.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },
    Delete(item) {
      const index = this.tableData.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.tableData.splice(index, 1);
      axios.delete(this.endpoint + "/" + item.id);
    },
    close() {
      this.modalShow = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.formFields);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tableData[this.editedIndex], this.editedItem);
        axios.put(this.endpoint + "/" + this.editedItem.id, this.editedItem);
      } else {
        this.tableData.push(this.editedItem);
        axios.post(this.endpoint, this.editedItem);
      }
      this.close();
    },
  },
  created() {
    axios(this.endpoint).then(
      (response) => (this.tableData = response.data.data)
    );
  },
};
</script>
<style scoped>
.button1 {
  position: absolute;
  top: 0;
  left: 0;
}
.button {
  position: absolute;
  top: 0;
  right: 0;
}
/* #table{
  position: relative;
  left: 470px;
} */
 
/* Automatic Serial Number Row */
.css-serial {
 counter-reset: serial-number; /* Set the serial number counter to 0 */
}
.css-serial tr td:first-child:before {
 counter-increment: serial-number; /* Increment the serial number counter */
 content: counter(serial-number); 
}


</style>
