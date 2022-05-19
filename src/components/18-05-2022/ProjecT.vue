<template>
  <div>
     <center>
       
      <b-card style="width:20rem;height:600px">  
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-nav style="width:20rem;height:40px" class="ml-auto">
            <button type="button" style="padding-left:'20px'" class="btn btn-default btn-sm">
         <span class="glyphicon glyphicon-home" >Menu </span>
        </button>
        <button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-list" ></span> Home
          </button>
     </b-navbar-nav>     
  </b-navbar>
      <b-form>  <br /><br /><br /><br />
      <b-col><b-form-input type="text" placeholder="Username" required></b-form-input></b-col><br />
      <b-col><b-form-input type="pasword" placeholder="Password" required></b-form-input></b-col><br />
     
      <b-button @click="submit()">SignUp</b-button> 
       </b-form> 
      
    </b-card>
       </center>      
  </div>
</template>

<script>
export default {
  name:" ProjecT",
  data(){
    return{
    
    }
    },
     methods:{
    submit(){
      
    }
    
     }

  }


       

</script>

<style>

</style>