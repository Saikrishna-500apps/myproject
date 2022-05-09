<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab v-for="i in tabs" :key="i" :title="'Form' + i">
          <b-button
            size="sm"
            variant="danger"
            class="float-right"
            @click="closeTab(i)"
            >Close Tab</b-button
          >

          <b-table stripedhover :items="res" :fields="fields"></b-table>
        </b-tab>

        <template #tabs-end>
          <b-nav-item role="presentation" @click.prevent="newTab" href="#"
            ><b>+</b></b-nav-item
          >
        </template>
      </b-tabs>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "SaI",

  data() {
    return {
      tabs: [],

      tabCounter: 0,
      fields: ["userId", "id", "title", "completed"],
      res: " ",
    };
  },
  methods: {
    async newTab() {
      this.tabs.push(this.tabCounter++);
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      this.res = await response.json();
    },
    closeTab(x) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1);
        }
      }
    },
  },
};
</script>
