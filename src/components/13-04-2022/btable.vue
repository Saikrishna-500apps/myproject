<template>
    <div>
       <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
  export default {
    name:'SaI',
    data() {
      return {
        items: [
          { age: 27, first_name: 'Teja', last_name: 'Kovuru' },
          { age: 24, first_name: 'Suresh', last_name: 'Kumar' },
          { age: 23, first_name: 'Naresh', last_name: 'Kumar' },
          { age: 23, first_name: 'Subodh', last_name: 'kute' }
        ]
      }
    }
  }

</script>

