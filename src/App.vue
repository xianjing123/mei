<template>
  <div>
    <tabbar v-if="$store.state.tabbarIsShow"></tabbar>
    <transition name="bounce" mode="out-in" appear>
     <router-view></router-view>
    </transition>
  </div>
</template>

<script>
//import Vue from "vue"
import axios from 'axios'
import tabbar from './components/tabbar'
import home from './views/Home'
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
<style>
    *{
      padding: 0;
      margin: 0;
    }
    ul{
      list-style:none;
    }
    a{
      text-decoration: none;
    }
    body{
      font-size:16px;
      /* background:#f1f1f1; */
    }
    .bounce-enter-active {
      animation: bounce-in 0.3s;
    }
    .bounce-leave-active {
      animation: bounce-in 0.3s reverse;
    }
    @keyframes bounce-in {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
</style>