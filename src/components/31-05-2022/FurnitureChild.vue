<template>
  <div>
    <hr />
    <b-row
      ><b-col>
        <b-form-input
          type="Search"
          placeholder="Enter Products"
          v-model="filter"
        ></b-form-input></b-col
      ><b-col>
        <b-form-input type="Search" placeholder="Sku" v-model="filter"></b-form-input></b-col
      ><b-col>
        <b-form-input
          type="Search"
          placeholder="Enter Type"
          v-model="filter"
        ></b-form-input></b-col
      ><b-col>
        <b-button size="sm" variant="warning" :disabled="!filter"  @click="filter = ''">Search</b-button>&nbsp;
        <b-button size="sm" variant="info">Showall</b-button></b-col
      ></b-row
    ><br />
    <br /><br />
    <center>
      <b-button v-b-toggle.sidebar-1 type="Menu" variant="dark" class="home">
        <b-icon icon="menu-button-wide"></b-icon>
      </b-button>
      <b-sidebar id="sidebar">
        <div>
          <h3>Logistics</h3>
          <br />
          <nav class="mb-3">
            <b-nav vertical>
              <b-button squared variant="outline-dark" size="lg"
                ><b-icon icon="house-fill" />Home</b-button
              >
              <b-button squared variant="outline-dark" size="lg"
                ><b-icon icon="bag-fill" />Products</b-button
              >
            </b-nav>
          </nav>
        </div>
      </b-sidebar>
      <b-button
        v-model="addbutton"
        variant="primary"
        @click="Create"
        class="add"
        >Add <b-icon icon="plus-circle"
      /></b-button>
      <b-button variant="warning" class="import"
        >import <b-icon icon="-arrow-down"
      /></b-button>
      <b-button variant="secondary" class="export"
        >export <b-icon icon="arrow-up"
      /></b-button>
     
      <br /><br /><br />
      <center>
        <b-card>
          <b-table
            striped
            hover
            :items="tableData"
            :fields="columns"
            :filter="filter"
            id="table"
            :per-page="perPage"
            :current-page="currentPage"
          >
            <template #cell(operation)="data">
              <b-button @click="Edit(data.item)" variant="success" size="sm"
                >Edit<b-icon icon="pencil-fill"
              /></b-button>
              <b-button
                @click="DeleteMessage(data.item)"
                variant="danger"
                size="sm"
                >Delete <b-icon icon="x-square"
              /></b-button>
            </template>
          </b-table>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="table"
          ></b-pagination>
        </b-card>
         <input type="file" ref="doc" @change="readFile()" />
      <div id="file">{{ content }}</div>
      </center>
      <b-modal v-model="modalShow" :title="Title" hide-footer>
        <b-form @submit.prevent="save">
          <slot :formdata="editedItem" name="input-fields"> </slot>
          
          <center>
            <b-button variant="primary" type="submit" class="btn btn-primary"
              >Save</b-button
            >
          </center>
        </b-form>
      </b-modal>
    </center>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "FurnitureData",
  props: ["columns", "formFields"],
  data() {
    return {
      perPage: 2,
      currentPage: 1,
      editedItem: this.formFields,
      modalShow: false,
      editedIndex: -1,
      tableData: [],
      file: null,
      content: null,
      filter: null,
    };
  },
  computed: {
    Title() {
      return this.editIndex === -1 ? "Add item" : "Enter Items";
    },
    rows() {
      return this.tableData.length;
    },
  },
  methods: {
    Create() {
      this.modalShow = true;
      this.editedItem = Object.assign({}, this.formFields);
    },
    Edit(item) {
      this.modalShow = true;
      this.editedIndex = this.tableData.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },
    DeleteMessage(item) {
      this.item = "";
      this.$bvModal
        .msgBoxConfirm("Are you sure to delete this item.", {
          title: "Delete Item",
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
          if (value) {
            const index = this.tableData.indexOf(item);
            this.tableData.splice(index, 1);
            axios.delete(this.endpoint + "/" + value.id);
          } else return;
        });
    },
    close() {
      this.modalShow = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.formFields);
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
    created() {
      axios(this.endpoint).then(
        (response) => (this.tableData = response.data.data)
      );
    },
    readFile() {
      this.file = this.$refs.doc.files[0];
      const reader = new FileReader();
      if (this.file.name.includes(".txt")) {
        reader.onload = (res) => {
          this.content = res.target.result;
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      } else {
        reader.onload = (res) => {
          document.getElementById("file").innerHTML = res.target.result;
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      }
    },
  },
};
</script>
<style>
.home {
  position: absolute;
  top: 0;
  left: 0;
}
.add {
  position: absolute;
  left: 0;
}
.import {
  position: absolute;
  left: 85px;
}
.export {
  position: absolute;
  left: 190px;
}
</style>
