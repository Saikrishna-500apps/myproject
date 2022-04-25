<template>
    <div>
        <h1 align="center">Data</h1>
        <ul align="center">
            <li v-for="item in list" :key="item.print">
                {{item.print}}
            </li>
        </ul>
        </div>
</template>
<script>
export default {
  name: "NanO",
  data() {
    return {
      list: [
        { print: "name:Agile CRM" },
        { print: "description: A company of excellence" },
        { print: "Years of expeience: 12" },
        { print: "location: Hyderabad" },
      ],
    };
  },
};
</script>