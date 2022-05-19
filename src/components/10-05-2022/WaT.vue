<template>
  <div>
        <center>
         <b-button v-b-modal.modal-1>textbox1</b-button>
        <input type="text" v-model="tb1" />&nbsp;
      <b-button v-b-modal.modal-1>textbox2</b-button>
        <input type="'text' required readonly value='watch'" v-model="tb2" />
          </center>
           <b-modal id="modal-1" title="teja">
    <p class="my-4">it's correct buddy!</p>
  </b-modal>
  </div>
</template>

<script>
         export default {
         name: "SaI",
         data() {
        return {
        tb1: " ",
        tb2: " ",
    };
  },
  watch: {
    tb1: function (value) {
      this.tb1 = value;
      this.tb2 = this.tb1.toUpperCase();
    },
   
  },
};
</script>
