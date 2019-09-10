<template>
  <div>
  
    <tabbar></tabbar>
   
    <home></home>
     <router-view></router-view>
  </div>
</template>

<script>
//import Vue from "vue"
import axios from 'axios'
import tabbar from './components/tabbar'
import home from './views/home'
//Vue.component("child",child)
export default {
 data(){
   return{
   }
 },
 components:{
   tabbar,
   home
 },
 
}
</script>
<style lang="scss">
    *{
      padding: 0;
      margin: 0;
    }
    body{
      font-size:16px;
    }
    .box{
      width: 3.75rem;
      height: 1rem;
      background: rebeccapurple
    }
</style>