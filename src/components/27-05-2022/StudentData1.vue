<template>
  <div>
    <div>
      <b-button class="save" variant="success">
        login: sai krishna teja</b-button
      ><br />
    </div>
    <b-button @click="Create" variant="primary">Add details</b-button><br />
    <b-table
      striped
      hover
      :items="tableData"
      :fields="columns"
      class="css-serial" >
      <template #cell(action)="data">
        <b-button @click="Edit(data.item)" variant="info">Update</b-button>
        <b-button @click="DeleteMessage(data.item)" variant="danger">Delete</b-button>
      </template>
      <template #cell(DateOfJoning)="data">{{ convert_date(data.item.DateOfJoning) }}</template>
    </b-table>
    <b-modal v-model="modalShow" title="AddEmploye" hide-footer>
      <div class="d-flex align-items-center mb-3">
    </div>
      <b-form @submit.prevent="save">
        <slot :formdata="editedItem" name="input-fields"> </slot>
        <b-button type="submit" variant="success"> Submit</b-button>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
import axios from "axios";
import Moment from "moment";
export default {
  name: "EmployeeData",
  props: ["endpoint", "columns", "formFields"],
  data() {
    return {
      loading: false,
        loadingTime: 0,
        maxLoadingTime: 3,
      editedItem: this.formFields,
      modalShow: false,
      editedIndex: -1,
      tableData: [],
    };
  },
  computed: {
    Title() {
      return this.editIndex === -1 ? "Add Employee" : "Edit Item";
    },
    itemsWithSno() {
      return this.columns.map((item) => ({
        ...item,
        sno: this.editIndex + 1,
      }));
    },
  },
  methods: {
    convert_date(item){
      return  Moment(item).format("ll")
    },
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
   DeleteMessage(item) {
      this.item = "";
      this.$bvModal
        .msgBoxConfirm("Are you sure to delete employee.", {
          title: "Delete Employee",
          size: "sm",
          buttonSize: "sm",
          okVariant: "primary",
          okTitle: "YES",
          cancelVariant: "danger",
          cancelTitle: "cancel",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          if(value){
          const index = this.tableData.indexOf(item);
          this.tableData.splice(index, 1);
          axios.delete(this.endpoint + "/" + value.id);
          }else return;
        });
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
<style>
.save {
  position: absolute;
  top: 0;
  right: 0;
}

.css-serial {
  counter-reset: employee_details; 
}
.css-serial tr td:first-child:before {
  counter-increment: employee_details; 
  content: counter(employee_details); 
}
</style>
