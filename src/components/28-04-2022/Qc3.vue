<template>
  <div>
    <h4>scraping html tags</h4>
  </div>
</template>
<script>
import axios from "axios";
import cheerio from "cheerio";
export default {
  name: "QuE3",
  data() {
    return {
      response: [],
    };
  },
  methods: {
    fun() {
      let url = "https://www.msn.com/en-au?AR=2";
     axios({
        method: "get",

        url: url,
      }).then(function (response) {
        let html = response.data;
      let $ = cheerio.load(html);
      document.write(html);
        $("ul.tertiary li").each(function () {
          $(this).find("h4").attr("area.lable");
        });
      });
    },
  },

  created() {
    this.fun();
  },
};
</script>
