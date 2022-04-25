<template>
    <div>
        <b-card v-for="item in rows" :key="item.index">
            {{item.index}}
        </b-card>
    </div>
</template>
<script>


export default {
    name: "SwE",
    data(){
        return{
            rows:[
                {index: "name:Agile CRM, description : A company of excellence"},
                {index: "name:mantra technologies, description:500apps"},
                {index: "name:500apps python,description:Backend built using python"},
                {index: "name:500apps infinity,description:builtusing vue JS"},
            ],
        };
    },
};
    
        
</script>
