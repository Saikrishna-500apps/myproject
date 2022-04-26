

<template>
  <div>
    <input type="text" id="Search" @keyup="fun()" />
    <ul id="UL">
      <li><a>orange</a></li>
      <li><a>red</a></li>
      <li><a>blue</a></li>
      <li><a>black</a></li>
      <li><a>white</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "RohiT",
  data() {
    return {};
  },
  methods: {
    fun() {
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

