<template>
    <div>
         <div class="newpin clear">
             <div class="new" v-for="data in Homenewpin" :key="data.id">
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
    </div>
</template>

<script>
export default {
    props:["Homenewpin"]
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