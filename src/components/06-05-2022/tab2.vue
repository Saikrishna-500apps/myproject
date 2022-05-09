<template>
  <div>
    <b-card no-body>
         <b-tabs card>
        <b-tab v-for="i in tabs" :key="i" :title="'Form'+ i">
          <b-button size="sm" variant="danger" class="float-right" @click="closeTab(i)" >Close Tab</b-button >
          <b-form name="form" class="w-50">

          <div class="input-group mb-3">
          <div class="input-group-prepend">
          <span class="input-group-text">FirstName</span>
          </div>
          <b-form-input type="text" name="fname" placeholder="Enter your FName" required> </b-form-input>
          </div>
          
          <div class="input-group mb-3">
          <div class="input-group-prepend">
          <span class="input-group-text">LastName</span>
          </div>
          <b-form-input type="text" name="lname" placeholder="Enter your lName" required> </b-form-input>
           </div>


           <div class="input-group mb-3">
             <div class="input-group-prepend">
               <span class="input-group-text">Mobiel No</span>
             </div>
             <b-form-input type="text" name="cname" placeholder="Enter mobile number" required></b-form-input>
           </div>

            <div class="input-group mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text">password</span>
            </div>
            <b-form-input type="text" name="Epassword" placeholder="Enter your password" required> </b-form-input>
            </div>



           <div class="input-group mb-3">
           <div class="input-group-prepend"> 
           <span class="input-group-text"> ConfirmPassword</span>
           </div>

           <b-form-input type="password" name="Cpassword" placeholder="Enter your ConfirmPassword" required ></b-form-input>
           </div>
           <div class="input-group mb-3">
           <div class="input-group-prepend"> <span class="input-group-text"> Email</span>
           </div>
           <b-form-input type="Email" name="Email" placeholder="Enter your Email" required></b-form-input>
           </div>
            <br /><br />

            <b-button size="sm" variant="success" @submit="fun()" >Submit</b-button>
          </b-form>

        </b-tab>
       

        <template #tabs-end>
          <b-nav-item role="presentation" @click.prevent="newTab" href="#"
            ><b>+</b></b-nav-item>
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
    };
  },

  methods: {
    newTab() {
      this.tabs.push(this.tabCounter++);
      
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
