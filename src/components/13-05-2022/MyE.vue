<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    </b-form>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="decesion_pending"
    >
      I accept the terms and use
    </b-form-checkbox>

    <div>
      State: <strong>{{ status }}</strong>
    </div>

    <div>
      <b-button v-b-toggle.my-sidebar>list</b-button>
    </div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
    <b-form id="form">
      
      <b-sidebar id="my-sidebar" title="information" shadow>
        <div>
          <b-form-rating
            v-model="value"
            variant="success"
            class="mb-2"
          ></b-form-rating>
          <p class="mt-2">rating: {{ rating }}</p>
        </div>
        first_name:<b-form-input
          id="name"
          class="name"
          placeholder="Enter first name"
          required
        ></b-form-input>
        last_name:<b-form-input
          id="lname"
          class="lname"
          placeholder="Enter last name"
          requried
        ></b-form-input>
        contact:<b-form-input
          id="contact"
          class="contact"
          placeholder="Enter contact number"
          requried
        ></b-form-input>
        password:<b-form-input
          id="password"
          class="password"
          placeholder="Enter password"
          requried
        ></b-form-input>
        email:<b-form-input
          id="email"
          class="email"
          placeholder="Enter email"
          requried
        ></b-form-input>
        comments:<b-form-input
          id="comments"
          class="comments"
          placeholder="Enter comments"
          requried
        ></b-form-input>
        <b-button size="l" variant="info" class="float-center" @click="Add"
          >Add</b-button
        >
      </b-sidebar>
    </b-form>
  </div>
</template>
<script>
export default {
  name: "SaI",
  data() {
    return {
      value: " ",
      items: [],
      fields: [],
      
      status: "decesion_pending",
    };
  },
  methods: {
    Add() {
      this.items.push({
        first_name: document.getElementById("name").value,
        last_name: document.getElementById("lname").value,
        contact: document.getElementById("contact").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
        comments: document.getElementById("comments").value,
      });
    },
  },
};
</script>
