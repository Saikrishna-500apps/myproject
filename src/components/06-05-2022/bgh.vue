<template>
  <div>
    <b-tabs card>
      <b-tab v-for="i in tabs" :key="'dyn-tab-' + i" :title="'Tab ' + i">
        Tab contents {{ i }}
        <b-button
          size="sm"
          variant="danger"
          class="float-right"
          @click="closeTab(i)"
        >
          Close tab
        </b-button>
      </b-tab>

      <template #tabs-end>
        <b-nav-item role="presentation" @click.prevent="newTab" href="#"
          ><b>+</b></b-nav-item
        >
      </template>

      <template #empty>
        <div class="text-center text-muted">
          There are no open tabs<br />
          Open a new tab using the <b>+</b> button above.
        </div>
      </template>
    </b-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [],
      tabCounter: 0,
    };
  },
  methods: {
    closeTab(x) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1);
        }
      }
    },
    newTab() {
      this.tabs.push(this.tabCounter++);
    },
  },
};
</script>
