<template>
  <div>
    <b-navbar toggleable="" type="dark" variant="info"><br /> </b-navbar>
    <center>
      <h3 align="left">Employee Data</h3>
      <StudentData1
        :columns="[
          'sno',
          'name',
          'Age',
          'gender',
          'DateOfJoning',
          'department',
          'Action'
        ]"
        :form-fields="{}"
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
            v-model="formdata.Age"
            :min="0"
            :max="100"
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
      :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"
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
      </StudentData1>
    </center>
  </div>
</template>
<script>
import StudentData1 from "./StudentData1.vue";

export default {
  name: "EmployeeData",
  components: { StudentData1 },
  data() {
    return {
       formatted: '',
      options: [
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" },
      ],
      options1: [
        { value: "Developer", text: "Developer" },
        { value: "Frontend-developer", text: "Frontend-developer" },
        { value: "TestEngineer", text: "TestEngineer" },
        { value: "Database", text: "Database" },
        { value: "Admin", text: "Admin" },
        { value: "PowerBI", text: "PowerBI" },
        { value: "Business Analyst", text: "Business Analyst" },
      ],
      

    };

  },
  methods:{
   
  }
};
</script>
