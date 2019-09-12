<template>
    <div>
        <div class="banner">
    <swiper myname="bannerswiper" ref="myswiper" :options="{
    loop:true,
    freeMode:false,
    pagination:true,
    slideperview:1}" v-if="datalist.length">
        <div class="swiper-slide ban1" v-for="data in datalist" :key="data.id" >
            
            <img :src="data.main_image"/>
             <div class="title" >
                <p class="p1">{{data.main_title}}</p>
                <p class="p2">{{data.sub_title}}</p>
                <p class="p3">{{data.description}}</p>
              </div>
             
        </div>
    </swiper>
    </div>
    
   

 
    </div>
   
</template>


<script>

import swiper from '@/components/Swiper'
import axios from "axios"

export default {
    
    data(){
        return{
            
            datalist:[],
           
           
            
        }
    },

    components:{
        swiper,
       
    },
    mounted(){
        axios("http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000005&platform_code=PLATEFORM_H5").then(res=>{
    this.datalist=res.data.banners         
        })
    }
    
}
</script>


<style lang="scss" scoped>
    .banner{
        width:100%;
        position:relative;
        img{
            width:100%;
        }
        .title{
            width:100%;
            position:absolute;
            text-align:center;
            bottom:.6rem;
            color:#fff;
        }
    }
 
</style>