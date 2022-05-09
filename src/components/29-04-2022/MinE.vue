<template>
    <div class="overflow-auto">
        <!-- <b-pagination v-model="currentpage"  :total-rows="rows" :per-page="perpage" aria-controls="my-table"></b-pagination>
        <p class="mt-6">Current page: {{currentPage}}</p> -->
        <b-pagination v-model="currentPage" pills :total-rows="rows" :per-page="perpage" aria-controls="my-table"></b-pagination>
        <p class="mt-6">CurrentPage: {{currentPage}}</p>
        <b-table id="my-table" :items="items" :per-page="perpage" :current-page="currentpage" small></b-table>
    </div>          
</template>

<script>
 export default {
                 name : "MinE",
                data() {
                    return{
                        perpage:5,
                        currentpage:1,
                        items:[
                        { id:1, first_name: 'venky', last_name: 'tiruveedula' },
                        {id: 2, first_name: 'sai', last_name: 'kovuru'},
                        {id: 3, first_name: 'pradyumna', last_name:'kovuru'},
                        {id: 4, first_name: 'sriseshu', last_name: 'mopati'},
                        {id: 5, first_name: 'sriharsha', last_name: 'mopati'},
                        {id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
                        {id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
                        {id: 8, first_name: 'Rockhead', last_name: 'Slate' },
                        {id: 9, first_name: 'venky', last_name: 'tiruviduka' }
                        ]
                    }
                },
                computed:{
                    rows(){
                        return this.items.length
                    }
                }
            }
</script>

        
       