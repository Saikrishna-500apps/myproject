<template>
    <div>
     <center>
    <b-rows>
      <b-col cols="4">
        students: <b-form-select v-model="value" id="demo1" :options="students" value-field="id" text-field="Name"></b-form-select
        ><br /><br />
        subjects: <b-form-select v-model="selected" id="demo2" :options="subjects" ></b-form-select
        ><br /><br />
        <div>
          Selected: <strong>{{ selected }}</strong>
        </div>
          date: <b-form-datepicker v-model="value" id="demo3"></b-form-datepicker
        ><br />

        marks:<b-form-input v-model="value" type="number" id="demo3" placeholder="enter student marks upto 100" min="0"  max="100" ></b-form-input ><br />
        remarks:<b-form-input v-model="value" type="text" id="demo4" ></b-form-input><br />
       
        <b-button variant="success" @click="ok()">submit</b-button><br /><br />
        <b-rows>
          <b-col cols="1">
         <b-table striped hover :items="studentdata" :fields="fields">
            </b-table> </b-col
        ></b-rows> </b-col
    ></b-rows>
      </center>
   </div>
</template>

<script>
import axios from "axios";
export default {
    name: "SaI",
    data() {
      return {
            Studentsdata:[
              {
                 students: '',
                 subject : '', 
                 marks : '',
                 remarks : ''
            },
            ],
            students: [],
      selected: null,
      subjects: [
        { value: "english", text: "1" },
        { value: "mathematics", text: "2" },
        { value: "electronics", text: "3" },
      ],
    };
    },
  
    async mounted(){
      await this.fun();
    },
    methods:{
      async fun(){
        let response = await axios.get(
          "https://api.sampleapis.com/baseball/battingAvgsSingleSeason"
      );
      this.StudentDetails = await response.data;
      },
      ok(){
        this.StudentDetails.push({
          students: document.getElementsById("demo1").value,
          subject: document.getElementsById("demo2").value,
          marks: document.getElementsById("demo3").value,
          remarks: document.getElementsById("demo4").value,

    
        });
    },


    },};
                          
      </script>
