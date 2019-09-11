<template>
    <div>
         <div class="banner">
         <swiper myname="bannerswiper" ref="myswiper" :options="{
         loop:true,
         freeMode:false,
         pagination:true,
         slideperview:1}" v-if="datalist.length">
             <div class="swiper-slide ban1" v-for="data in datalist" :key="data.id">
            
            <img :src="data.main_image"/>
             <div class="title" >
                <p class="p1">{{data.main_title}}</p>
                <p class="p2">{{data.sub_title}}</p>
                <p class="p3">{{data.description}}</p>
             </div>
             
             </div>
         </swiper>

         <div class="newpin clear">
             <div class="new" v-for="data in newlist" :key="data.id">
                 <div class="newmain">
                      <div class="title clear">
                      <p class="title_text l">{{data.main_title}}</p>
                      <p class="title_time l">{{data.sub_title}}</p>
                      </div>
                      
                      <div  v-for="(pro,index) in data.products" :key="index" class="pro l"> 
                      <img :src="pro.picUrl"/>
                      <span >{{pro.tag}}</span>
                      </div>
                 </div> 
            </div>
         </div>
         

         <div class="newevent">
             <p></p>
             <div class="newbox">
                 <img src="" alt="">
                 <div class="newtitle">
                     <span></span>
                     <span></span>
                     <span></span>
                 </div>
             </div>
         </div>
         </div>
            <newEvent :newevent="eventlist">

            </newEvent>
    </div>
    
   
</template>


<script>
import axios from 'axios'
import swiper from '@/components/Swiper'
import newEvent from '@/Home/newEvent'
export default {
    
    data(){
        return{
            //data:"",
            datalist:[],
            newlist:[],
            newevent:[],
            eventlist:[],
        }
    },

    components:{
        swiper,
        newEvent
    },
    mounted(){
        axios('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5&credential=485461278f8fd06c90fe972a4e2bd50e0c1fcd42699bdeee9ca28ebbc12097bd44a7abedc40524ce32727aff716b8b65e0edc68f1333da5074a785a18f6d91049ae1f379250d1ef75a68a0af97b4c8fe94095bdede12065bd727a2632fca8582aea6aafa05342dc1a1c934a08758ba692402a39f03082269e7c720916bd3db8ef69f5b9e1da8e6d8cab54c8e033aee58')
        .then(res=>{
            this.datalist = res.data.banners
            //console.log(this.datalist)
        })
        axios('http://www.mei.com/appapi/ninenew/operational/v1?credential=485461278f8fd06c90fe972a4e2bd50e0c1fcd42699bdeee9ca28ebbc12097bd44a7abedc40524ce32727aff716b8b65e0edc68f1333da5074a785a18f6d91049ae1f379250d1ef75a68a0af97b4c8fe94095bdede12065bd727a2632fca8582aea6aafa05342dc1a1c934a08758ba692402a39f03082269e7c720916bd3db8ef69f5b9e1da8e6d8cab54c8e033aee58')
        .then(res=>{
            this.newlist = res.data.show2
            //console.log(this.newlist)
        })
        axios('http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1568104581522&summary=ab7ed90ee72934e192b90076ac183b16&platform_code=H5')
        .then(res=>{
            this.newevent = res.data.lists
           //console.log(this.newevent)
        })
         axios('http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1568166450670&summary=a1b788e954838fd3af3ee6fbdbf997f0&platform_code=H5')
        .then(res=>{
            this. eventlist = res.data.lists
            console.log(this. eventlist)
            
        })
    }
}
</script>


<style lang="scss" scoped>
.l {
  float: left;
}
.r {
  float: right;
}
.clear:after {
  content: "";
  display: block;
  clear: both;
}

 .ban1{
     position: relative;
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
        
         
     };
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
  .pro img{
      width: .705rem;
      height: .9rem;
      display: flex;
  }
 .newpin{
     display: flex;
     margin-top: .15rem;
     .new{
          margin-left: .11rem;
          background-color: rgb(235, 230, 230);
     }
    
    .newmain{
       
        width: 1.71rem;
        height: 1.1rem;
        .title{
            margin-left:.1rem;
            padding-top:.1rem; 
            margin-bottom :.08rem;
        }
        .pro{
            
            margin-left:.1rem;
            margin-bottom :.16rem;
            span{
                border:.01rem rgb(97, 96, 96) solid;
                font-size: .12rem;
                display: block;
                text-align: center;
                margin-top: .05rem;
               
            }
        }
    }
 }
 .title_text{
       font-size:.16rem;
       color:111111;
       font-weight: 700;
       }
 .title_time{
 font-size:.12rem;
 color:666;
 padding-top: .04rem;
 margin-left: .05rem;
 }
 
</style>