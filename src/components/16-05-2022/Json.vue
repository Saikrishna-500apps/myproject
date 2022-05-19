<template>
  <div>
    <b-form @submit="display_data">
    <center>
      <p>Please click the below button</p>
      <div>
        <b-button v-b-toggle.my-sidebar>Student Form</b-button>
      </div>
      <b-table striped hover :items="studentdata" :fields="fields" class="w-50">
      </b-table>

      <b-sidebar id="my-sidebar" title="Student Information" shadow>
        students:<b-form-select
          v-model="value"
          id="Students1"
          :options="students"
          value-field="id"
          text-field="Name"
          requried
        ></b-form-select
        ><br /><br />
        subjects:<b-form-select
          v-model="selected"
          id="Subjects1"
          :options="subjects"
          value-field="value"
          text-field="text"
          required
        ></b-form-select
        ><br /><br />
        date:<b-form-datepicker
          v-model="value"
          id="Date1"
          required
        ></b-form-datepicker
        ><br />
        marks:<b-form-input
          v-model="value"
          type="number"
          id="Marks1"
          placeholder="enter student marks upto 100"
          min="0"
          max="100"
          required
        ></b-form-input
        ><br />
        remarks:<b-form-input
          v-model="value"
          type="text"
          id="Remarks1"
          required
        ></b-form-input
        ><br />

        <div>
          Selected:<strong>{{ selected }}</strong>
        </div>
        <b-button variant="success" type="submit">submit</b-button><br /><br />
      </b-sidebar>
    </center>
    </b-form>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "StudentForm",
  data() {
    return {
      studentdata: [
        {
          students: "",
          subject: "",
          marks: "",
          remarks: "",
        },
      ],
      students: [],

      selected: 0,
      subjects: [
        { value: 1, text: "English" },
        { value: 2, text: "Mathematics" },
        { value: 3, text: "Electronics" },
      ],
    };
  },
  async mounted() {
    await this.fun();
  },
  methods: {
    async fun() {
      let response = await axios.get(
        "https://api.sampleapis.com/baseball/battingAvgsSingleSeason"
      );
      this.students = await response.data;
    },
    display() {
      this.studentdata.push({
        students: document.getElementById("Students1").value,
        subject: document.getElementById("Subjects1").value,
        marks: document.getElementById("Marks1").value,
        remarks: document.getElementById("Remarks1").value,
      });
    },
  },
};
</script>
