<template>
  <div>
    <b-form-select v-model="value" :options="countries"></b-form-select><br /><br />
    <button @click="fun()">click</button>
    <b-input-group>


  
  <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to Search" ></b-form-input>
  <b-input-group-append><b-button :disabled="!filter" @click="filter = ''">Clear</b-button></b-input-group-append>
  </b-input-group> <b-form-group v-model="sortDirection" v-slot="{ ariaDescribedby }">  <b-form-checkbox-group 
  v-model="filterOn" :aria-describedby="ariaDescribedby">


        <b-form-checkbox value="university_name">university_name</b-form-checkbox >
        <b-form-checkbox value="domains">domains</b-form-checkbox>
        <b-form-checkbox value="website_url">website_url</b-form-checkbox>
        <b-form-checkbox value="isActive">state_province</b-form-checkbox>
      </b-form-checkbox-group></b-form-group>
          
     <b-table :items="items" :fields="fields" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered" ></b-table>
       </div>
</template>


<script>
const { getNames } = require("country-list");
const axios = require("axios").default;
export default {
  name: "QuE1",
  data() {
    return {
      countries: [],
      items: [],
      fields: [], 
      value: "",
      filter: null,
      filterOn: [],
    };
  },


  computed: {
    sortOptions() {
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.lable, value: f.key };
        });
    },
  },
  mounted() {
    let countries = getNames();
    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });
  },
  methods: {
    async fun() {
      const response = await axios.get(
        "http://universities.hipolabs.com/search?country=" + this.value
      );
      const data = await response.data;
      this.items = data.map((row) => {
        return {
          university_name: row.name,
          domains: row.domains,
          website_url: row.web_pages,
          state_province: row["state-province"],
        };
      });
    },
  },
};
</script>


