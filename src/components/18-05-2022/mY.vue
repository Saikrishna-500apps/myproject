<template>
    <div>

        <b-form @submit="onsubmit" @reset="onreset" v-if="show">
            <b-form-group id="input-group-1" label="name">
             <b-form-group id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
      

      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="lastname:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.lastname"
          placeholder="lastname"
          required
        ></b-form-select>
      </b-form-group>

            <b-form-group id="input-group-4" label="age:" label-for="input-4">
              <b-form-select id="input-4"
              v-model="from.age"
              placeholder="age"
              requried>
              </b-form-select>
            </b-form-group>
    </div>
</template>


<script>
export default{
  data(){
    return{
       form: {
          email: '',
          name: '',
          lastname: '',
          age: '',
        };
          
    }
    },
         methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },

         }
  

</script>
