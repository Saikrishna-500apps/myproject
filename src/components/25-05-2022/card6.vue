<template>
  <div>
    <b-card v-for="item in rows" :key="item.index">
      {{ item.index }}
    </b-card>
  </div>
</template>

<script>
export default {
  
  name: "KrishnA",

  data() {
    return {
      rows: [
        { index: "name:Agile CRM , description : A company of excellence" },

        { index: "name:mantra technologies, description:500apps" },

        { index: "name:500apps Python,description:Backend built using python" },

        { index: "name:500apps infinity, description:Builtusing vue JS" },
      ],
    };
  },
};
</script>



<template>
  <div>
    <center>
      <b-card style="max-width: 20rem" class="mb-2">
        <b-card-group>
          <b-form>
            <b-tabs pills card>
              <b-tab v-for="i in tabs" :key="'dyn-tab' + i" :title="'Tab ' + i">
                <b-form-input
                  type="text"
                  placeholder="enter first name"
                  v-model="val"
                ></b-form-input
                ><br />

                <b-form-input
                  type="text"
                  placeholder="enter last name"
                  v-model="val1"
                ></b-form-input
                ><br />

                <b-form-input
                  type="text"
                  placeholder="enter city name"
                  v-model="val2"
                ></b-form-input
                ><br />

                <b-form-input
                  type="email"
                  placeholder="enter email id"
                  v-model="val3"
                ></b-form-input
                ><br />

                <b-button variant="btn btn-primary btn-sm" @click="fun()"
                  >submit</b-button
                >
                &nbsp;

                <b-button variant="btn btn-secondary btn-sm" @click="fun1()"
                  >reset</b-button
                >

                <b-button
                  variant="btn btn-danger btn-sm"
                  class="float-right"
                  @click="closeTab(i)"
                >
                  Close tab
                </b-button>
              </b-tab>

              <template #tabs-end>
                <b-nav-item
                  role="presentation"
                  @click.prevent="newTab()"
                  href="#"
                  >Add Tab</b-nav-item
                >
              </template>

              <template #empty>
                <div class="text-center text-muted">
                  There are no open tabs<br />

                  Open a new tab using the <b>+</b> button above.
                </div>
              </template>
            </b-tabs>
          </b-form>
        </b-card-group>
      </b-card>
    </center>
    <br />

    <b-table striped hover :items="names" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: "TAbb",

  data() {
    return {
      tabs: [],

      tabCounter: 0,

      names: [{ first_name: "", last_name: "", city_name: "", email_id: "" }],

      fields: ["first_name", "last_name", "city_name", "email_id"],

      val: "",

      val1: "",

      val2: "",

      val3: "",
    };
  },

  methods: {
    closeTab(x) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] == x) {
          this.tabs.splice(i, 1);
        }
      }
    },

    newTab() {
      this.tabs.push(this.tabCounter++);
    },

    fun() {
      this.names.push({
        first_name: this.val,

        last_name: this.val1,

        city_name: this.val2,

        email_id: this.val3,
      });

      this.val = "";

      this.val1 = "";

      this.val2 = "";

      this.val3 = "";
    },

    fun1() {
      this.names.pop({
        first_name: this.val,

        last_name: this.val1,

        city_name: this.val2,

        email_id: this.val3,
      });

      this.val = "";

      this.val1 = "";

      this.val2 = "";

      this.val3 = "";
    },
  },
};
</script>

