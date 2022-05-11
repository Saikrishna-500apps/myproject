<template>
  <div>
    <b-dropdown id="dropdown-1" text="medicines" class="m-md-2">
      <b-dropdown-item>macpodcv</b-dropdown-item>
      <b-dropdown-item>glynaze</b-dropdown-item>
      <b-dropdown-item>azitro</b-dropdown-item>
    </b-dropdown>

    <b-table :items="items" :fields="fields" :tbody-tr-class="rowClass">
    </b-table>
  </div>
</template>
<script>
export default {
  name: "SaI",
  data() {
    return {
      fields: ["price", "company", "product"],
      items: [
        { product: "macpodcv-100", company: "glasco", price: 50 },
        { product: "glynaze", company: "ritzlabs", price: 10 },
        { product: "azitro", company: "pliva", price: 15 },
      ],
    };
  },
  methods: {
    medicine() {
      this.items.push({
        product: document.getElementById("name").value,
        company: document.getElementById("company").value,
        price: document.getElementById("price").value,
      });
    },
  },
};
</script>
