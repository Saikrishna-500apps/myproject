<template>
    <div>
        <button @click="fun()">click</button>
        {{res}}
    </div>
</template>
<script>
export default{
    name: "FilterF",
    data(){
        return{
            companies:[
                {id: 1, name: "MantraTechnologies"},
                {id: 2, name: "TCS"},
                {id: 3, name: "Cognizent"},
                {id: 4, name: "accenture"},
                {id: 1, name: "MantraTechnologies"},

            ],
            res:"",
        };
    },
    methods:{
        fun(){
            this.res = this.companies.filter((row)=> row.name == "MantraTechnologies");
            return this.res;
        }
    }
}

</script>
