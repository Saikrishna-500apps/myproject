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
          { email: 27, id: 'Teja', name: 'Kovuru' },
          { email: 24, id: 'Suresh',name: 'Kumar' },
          { email: 23, id: 'Naresh',name: 'Kumar' },
          { email: 23, id: 'Subodh', last_name: 'kute' }
        ]
      }
    }
  }

</script>

