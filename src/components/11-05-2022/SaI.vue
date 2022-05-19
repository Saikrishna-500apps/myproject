<template>
  <div>
    <b-form-select v-model="selected" :options="options" class="mb-3">
      <b-form-select-option :value="null" disabled
        >-- Please select the medicine --</b-form-select-option>
         <b-button v-b-toggle.my-collapse>Toggle Sidebar</b-button>
         
      <b-form-select-option value="macpodcv-200">Option C</b-form-select-option>
      <b-form-select-option value="glynaze-mf">Option D</b-form-select-option>
    </b-form-select>
    <div class="mt-3">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "SaI",
  data() {
    return {
      selected: null,
      options: [
        { value: "macpodcv-200", text: "product_name" },
        { value: "glynaze-mf", text: "product_name" },
        { value: "azithromycine", text: "product_name" },
      ],
    };
  },
};
</script>
