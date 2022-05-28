<template>
  <div>
     <center>
  
    <b-card class="card w-25" style="height: 20rem;" border-variant="dark">
    <p>Write the grocery list here</p>
    </b-card> 
    </center>
     <!-- <b-button id="button"> -->
            
          <!-- </b-button> -->
          <router-link to="/CombinE">
           <b-button type="submit" id="mybutton" variant="success">
      <b-icon icon="plus-lg" variant="danger" scale="2.5"></b-icon>
    </b-button>
    </router-link>
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
#button{
  bottom: 10px;
  border-radius: 50%;
}
#mybutton {
  position: fixed;
  bottom: 50px;
  right: 50px;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border-color: rgb(17, 5, 245);
}
</style>