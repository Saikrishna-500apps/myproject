<template>

<div>

<h1>{{ message }} </h1>

<button @click="f1()">

click

</button>

</div>

</template>


<script>

export default {

name:"NamE",

data() {

return {

message: 'Hello World!',

a:[1,2,3]

}

},

mounted(){console.log("hi")},

methods:{

f1(){

//document.write(this.a[0]),

alert("hi")

console.log(this.a[1])

}

}

}

</script>