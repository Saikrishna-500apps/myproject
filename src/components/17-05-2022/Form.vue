<template>
  <div>
    <p>Please Fill Student Form</p>
    
<center>
     <div>
        <b-button v-b-toggle.my-sidebar>Student Form</b-button>
      </div>
    <b-form @submit="display_data" class="w-50">
         <b-sidebar id="my-sidebar" title="Student Information" shadow>
             <b-row>
        <b-col>
         Students:<b-form-select v-model="StudentData.studentsId" id="names" :options="students" value-field="id" text-field="Name" required> </b-form-select ><br /><br /></b-col><b-col >
         Subjects:<b-form-select v-model="StudentData.subject" id="subjects" :options="subjects" value-field="id" text-field="name"  required></b-form-select ><br /><br /> </b-col></b-row> <b-row> <b-col >
         Date:<b-form-input type="date" v-model="StudentData.date" id="date" required ></b-form-input><br /></b-col> </b-row> <b-row> <b-col >
         Marks:<b-form-input v-model="StudentData.marks" type="number" id="marks" placeholder="enter student marks upto 100" min="0" max="100" required ></b-form-input><br /></b-col><b-col >
         Remarks:<b-textarea v-model="StudentData.remarks" type="text" id="remarks" required  ></b-textarea  ><br /></b-col ></b-row> <b-row> <b-col>
        <p id="StudentForm"></p>
          <b-button variant="success" type="submit">submit</b-button><br /><br />
          <b-table striped hover sticky-header :items="StudentData">
          </b-table> </b-col></b-row>
         </b-sidebar>
         </b-form>
</center>
      </div>
</template>
<script>
import axios from "axios"
export default {
  name: "StudentForm",
  data() {
    return {
      StudentData: {
        studentsId: "",
        subject: "",
        date: "",
        marks: "",
        remarks: "",
      },
      students: [],
      subjects: [
        { id: 1, name: "English" },
        { id: 2, name: "Mathematics" },
        { id: 3, name: "Electronics" },
      ],
    };
  },
  async mounted() {
    await this.getData();
  },
  methods: {
    async getData() {
      let response = await axios.get(
        "https://api.sampleapis.com/baseball/battingAvgsSingleSeason"
      );
      this.students = await response.data;
    },
    display_data() {
      document.getElementById("StudentForm").innerHTML = JSON.stringify(
        this.StudentData
      );
    },
  },
};
</script>
