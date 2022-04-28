<template>
  <div>
    <b-form @submit.prevent="FetchData">
      <label for="sample1">Country</label>
      <b-form-input id="sample1" v-model="value" placeholder="Enter the value" required  ></b-form-input  ><br />
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <b-card v-for="user in items" :key="user.id" ><br />
      <b-row ><b-col md="3">University Name : {{ user.name }}</b-col></b-row >
      <b-row ><b-col md="3">Domains : {{ user.domains }}</b-col></b-row >
      <b-row><b-col md="10" ><p @click="redirect(user.website_url)">website_url: {{ user.website_url }}  </p></b-col ></b-row >
      <b-row><b-col md="10" >State Province : {{ user.state_province }}</b-col></b-row  >
    </b-card>
  </div>
</template>
<script>
export default {
  name: "TeJ5",
  data() {
    return {
      value: "",
      items: [],
    };
  },
  methods: {
    redirect(user) {
      window.open(user, "_blank");
    },
    async FetchData() {
      const response = await fetch(
        "http://universities.hipolabs.com/search?country=" + this.value,
        {}
      );
      
      const responseText = await response.json();
      console.log("response", responseText);
      this.items = responseText.map((row) => {
        return {
          university_name: row.name,
          domains: row.domains,
          website_url: row.web_pages[0],
          state_province: row["state-province"],
        };
      });
    },
  },
};
</script>

