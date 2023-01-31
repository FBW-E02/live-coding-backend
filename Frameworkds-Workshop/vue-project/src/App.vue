<template>
 <!-- <h1>This is our first Vue Component</h1> -->
 <div>
   <Header title="Random Users"/>
 <h1>This is our first Vue Component</h1>
 <User/>
 </div>

</template>

<script>
import Header from "./components/Header.vue"
import User from "./components/User.vue"
export default {
  name:"App",
  components:{
    Header,
    User
  }
}

</script>


<style scoped>
h1{
  background-color:blue;
  color: white;
}
</style> 