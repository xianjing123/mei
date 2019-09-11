<template>
    <div>
        <swiper myname="bannerswiper" ref="myswiper" :options="{
         //loop:true,
         //freeMode:false,
         //pagination:true,
         //slideperview:1
         }"
          v-if="datalist.length">
             <div class="swiper-slide ban1" v-for="data in bannerlist" :key="data.id">
            
            <img :src="data.main_image"/>
             <div class="title" >
                <p class="p1">{{data.main_title}}</p>
                <p class="p2">{{data.sub_title}}</p>
                <p class="p3">{{data.description}}</p>
             </div>
             
             </div>
         </swiper>
 
        <ul class="newEvent" v-for="data in datalist" :key="data.categoryId">
          <li >
            <img :src="data.imageUrl" />
            <div class="title ">
                <div class="haiwai">海外直发</div>
                <p>{{data.englishName}}</p>
                <span>{{data.chineseName}}</span>
                <span>{{data.discountText}}</span>
            </div>
            
         </li>
      </ul>
         
    </div>
</template>

<script>
import axios from 'axios'
import swiper from '@/components/Swiper'

export default {
    data(){
        return{
            
            eventlist:[],
            datalist:[],
        }
    },
      components:{
        swiper,
        
    },
    mounted(){
         axios('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000011&platform_code=PLATEFORM_H5')
        .then(res=>{
            this.bannerlist = res.data.banners
            //console.log(this.bannerlist)
        })
          axios('http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1568198845745&summary=b7162136506916b32e18c12abc503327&platform_code=H5')
        .then(res=>{
            this. datalist = res.data.eventList
            console.log(this. datalist)
        })
    }
}
</script>

<style lang="scss" scoped>
.ban1{
     position: relative;
     margin-bottom: .15rem;
     img{
     width: 3.75rem;
     height: 4.5rem;
     }
     .title{
          position: absolute; 
          height: 1rem;
          width: 2rem;
          //background-color: aquamarine;
          bottom: .7rem;
          left: 50%;
          transform: translate3d(-50%,0,0);
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
           p{
        width: 100%;
        text-align: center; 
     }
        .p1{
           // top: 2.9rem;
           // left: 50%;
           // transform: translate3d(-50%,0,0);
           line-height: .26rem;
           font-size: .26rem;
           font-weight: 700;
           color: white;
        }
        .p2{
          
           line-height: .14rem;
           font-size: .14rem;
           color: white;
           
        }
        .p3{
           
           line-height: .14rem;
           font-size: .14rem;
           color: white;
        }
      }   
    }

    .newEvent{
    width: 3.45rem;
    margin: 0 auto;
    li{
       position: relative;
       margin-bottom: .06rem;
        img{
            width: 3.45rem;
            height: 2.07rem;
           
        }
        .title{
            position: absolute;
            z-index: 100;
            color: white;
            left: .1rem;
            bottom: .1rem;
            .haiwai{
                font-size: .12rem;
                color: black;
                line-height: .14rem;
                background-color: beige;
                width: .51rem;
                height: .14rem;
            }
            p{
                font-size: .16rem;
                text-transform:Uppercase ;
                margin-bottom: .02rem;
            }
            span{
                font-size: .14rem;
                display: block;
                font-family: 黑体;
                line-height: .2rem;
            }
        }
    }
}
</style>