<template>
  <div id="ret">
    <b-row>
      <b-col></b-col
      ><b-col>
        <b-form @submit="save">
          <div>
         <b-button class="button" v-b-toggle.sidebar-1>Home</b-button><br>
            <b-sidebar id="sidebar-1" title="Menu" shadow>
              <div class="px-3 py-2">
                <br /><br /> <br /><br />
                <b-button @click="retrieve()">Retrieve{{result}}</b-button>&nbsp;
                <b-button @click="DeleteAll()">DeleteAll</b-button><br />
                {{ result }}
                <br />
                <button> 
                  <router-link to="/DisplaY">LogOut</router-link></button
                ><br />
                <br />
                
              </div>
            </b-sidebar>
          </div>
          <br />
          <b-form-textarea
            :maxlength="40"
            v-model="form.text"
            rows="16"
            placeholder="Enter Your Things"
            required
          ></b-form-textarea><br><b-button  type="submit" class="float-right">save</b-button><br>
        </b-form> </b-col
      ><b-col> </b-col
    ></b-row>
  </div>
</template>

<script>
export default {
  name: "textArea",
  data() {
    return {
      form: {
        text: "",
        result: "",
      },
      
    };
  },
  methods: {
    save() {
      alert("Do you want to save");
      localStorage.setItem("text", this.form.text);
    },
    DeleteAll() {
      console.log("hello");
      localStorage.removeItem("text",this.form.text);
    },
    retrieve() {
      var x = localStorage.getItem("text");
      this.result = x;
   return this.result.data;
          },
},
};
</script>

<style scoped>
.button {
  position: absolute;
  top: 0;
  left: 0;
}

.button2 {
  position: absolute;
  top: 0;
  right: 0.5;
}
</style>
