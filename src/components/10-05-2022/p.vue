<template>
  <div>
    <p>Mantra technologies pvt limited </p>
    
    <b-button size="l" variant="info" class="float-center" @click="Add">Add</b-button>
       <b-table striped hover :items="items" :fields="fields"></b-table>
         <b-form id="form">
                 product_name:<b-form-input id="name"  class="name" placeholder="Enter product name" required></b-form-input>
                 price:<b-form-input id="price" class="prices"  placeholder="Enter product price:" required ></b-form-input>
                 Product_category:<b-form-input id="category" class="categories" placeholder="Enter product category" required ></b-form-input>
    </b-form>
  </div>
</template>
<script>
export default {
  name: "SaI",
  data() {
    return {
      items: [
        {
          product_name: "iphone",
          price: "100000",
          product_category: "mobile",
        },
        {
          product_name: "samsung",
          price: "55000",
          product_category: "television",
        },
      ],
      fields: [],
    };
  },
  methods: {
    Add() {
      this.items.push({
        product_name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        product_category: document.getElementById("category").value,
      });
    },
  },
};
</script>
