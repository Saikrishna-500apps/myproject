<template>
  <div>
    <b-card no-body>
        <div class="text-center">
      <b-button @click="tabIndex--">Previous</b-button>
      <b-button @click="tabIndex++">Next</b-button>
        </div>
      <b-tabs v-model="tabIndex" small card>
        <b-tab title="Gneral">chrome</b-tab>
        <b-tab title="Edit data"
          ><h1>vuejs components</h1>
          <b-card>concepts</b-card>
        </b-tab>
        <b-tab title="comment">learn and earn</b-tab>
        <b-tab title="info">iam the one</b-tab>
      </b-tabs>
    </b-card>  
      <div side alignment class="text-muted">Current Tab: {{ tabIndex }}</div>
    </div>
  
</template>

<script>
export default {
  name: "SaI",
  data() {
    return {
      tabIndex: 1,
    };
  },
};
</script>
