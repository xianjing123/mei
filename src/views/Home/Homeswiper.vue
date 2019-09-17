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
        </div>
    </div>
</template>
<script>
import swiper from '@/components/Swiper'
export default {
    props:["datalist"],
    components:{
      swiper,
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
 
 
</style>