<template>
  <div>
    
    <b-container>     
       <b-form-select v-model="value" :options="countries"> </b-form-select>
      <b-button @click="country">Submit</b-button>
      <childDropdown :items="items"/>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
import childDropdown from './childDropdown.vue'
const { getNames } = require("country-list");

export default {
  name: "tableView",
  components:{
      childDropdown
  },
  data() {
    return {
      value: "",
      countries: [],
      fields: ["Domains", "Website_url", "Location"],
      items: [],
      res: "",
    };
  },
  mounted() {
    let countries = getNames();
    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });
  },
  methods: {
    
    async country() {
      const response = await axios.get(
        "http://universities.hipolabs.com/search?country=" + this.value
      );
      const responseText = await response.data;
      console.log("response", responseText);
      this.items = responseText.map((row) => {
        return {
          domains: row.domains,
          website_url: row.web_pages[0],
          location: row.country,
        };
      });
    },
  },
};
</script>
