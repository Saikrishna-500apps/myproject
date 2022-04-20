
//Take an input field(text) and implement search functionality from the below array. var array_names = 
[""agile"",""crm"",""mantra"",""technologies"",""500apps"",""infinity""];
Eg: gi
result : [""agile"",""technologies""];"//





<template>
  <div>
    <input type="text" id="Search" @keyup="search()" />

    <ul id="UL">
      <li><a href="#">agile</a></li>

      <li><a href="#">crm</a></li>

      <li><a href="#">mantra</a></li>

      <li><a href="#">technologies</a></li>

      <li><a href="#">500apps</a></li>

      <li><a href="#">infinity</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ThE",

  data() {
    return {};
  },

  methods: {
    search() {
      var input, filter, ul, li, a, i, txtValue;

      input = document.getElementById("Search");

      filter = input.value.toUpperCase();

      ul = document.getElementById("UL");

      li = ul.getElementsByTagName("li");

      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];

        txtValue = a.textContent || a.innerHTML;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    },
  },
};
</script>