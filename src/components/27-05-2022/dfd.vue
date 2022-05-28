<template>
  <div>
    <div>
      <b-button
        class="button1"
        type="submit"
        v-on:click="addText()"
        variant="primary"
        >save</b-button
      >
      <b-button class="button" variant="success"> login: Mahesh Atla</b-button>
    </div>

    <b-button @click="Create">Create a field</b-button><br />

    <b-table striped hover :items="tableData" :fields="columns">
      <template #cell(action)="data">
        <b-button @click="Edit(data.item)" variant="info">Update</b-button>
        <b-button
          @click="Delete(data.item)"
          v-b-modal="'edit-modal'"
          variant="danger"
          >Remove
        </b-button>
      </template>
    </b-table>
    <b-modal v-model="modalShow" :title="Title" hide-footer>
      <b-form @submit.prevent="save">
        <slot :formdata="editedItem" name="input-fields"> </slot>
        <b-button @click="close">Cancel</b-button>
        <b-button type="submit"> Submit</b-button>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "studentDetails",
  props: ["endpoint", "columns", "formFields"],
  data() {
    return {
      editedItem: this.formFields,
      modalShow: false,
      editedIndex: -1,
      tableData: [],
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
</style>
