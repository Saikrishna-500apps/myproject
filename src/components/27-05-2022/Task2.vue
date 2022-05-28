<template>
  <div>
    <center>
      <h3 align="left">Employee Data</h3>
      <Task1
        :columns="[
           'sno',
          'name',
          'age',
          'gender',
          'DateOfJoning',
          'department',
          'Action',
        ]"
        :form-fields="{ 
          sno: '',
          name: '',
          age: '',
          gender: '',
          DateOfJoning: '',
          department: '',
          action: '',
        }"
      >
        <template v-slot:input-fields="{ formdata }">
     
          Name:
          <b-form-input
            id="input-1"
            v-model="formdata.name"
            required
            placeholder="Enter Name"
          ></b-form-input>
          Age:
          <b-form-input
            id="input-1"
            v-model="formdata.age"
            required
            placeholder="Enter Age"
          ></b-form-input>
          Gender:
          <b-form-select
            text="Select Gender"
            v-model="formdata.gender"
            :options="options"
          ></b-form-select>
          DateOfJoning:
          <b-form-datepicker
            v-model="formdata.DateOfJoning"
            :min="min"
            :max="max"
            locale="en"
          ></b-form-datepicker>
          Department:
          <b-form-select
            id="input-1"
            v-model="formdata.department"
            :options="options1"
            required
            placeholder="Enter Department"
          ></b-form-select>
        </template>
      </Task1>
    </center>
  </div>
</template>
<script>
import Task1 from "./Task1.vue";
export default {
  name: "app",
  components: { Task1 },
  columns: [
    {
      data: null,
      render: function(data,type,row,meta){
        return meta.row+1;
  
      },
  
    },
  ],

  data() {
    return {
      user: {
        gender: " ",
      },
      options: [
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" },
      ],
      options1: [
        { value: "Accounts", text: "Accounts" },
        { value: "Admin", text: "Admin" },
        { value: "IT", text: "IT" },
        { value: "Engineering", text: "Engineering" },
        { value: "Finance", text: "Finance" },
        { value: "Business Analyst", text: "Business Analyst" },
      ],
  
    };
  },
};
</script>
