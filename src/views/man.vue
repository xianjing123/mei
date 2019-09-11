<template>
    <div>
        

        <img src="/image/bg.jpg" class="banner">
        <ul class="newEvent" v-for="data in datalist" :key="data.categoryId">
          <li >
            <img :src="data.imageUrl" />
            <div class="title ">
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

export default {
    data(){
        return{
            datalist:[],
        }
    },
      components:{
      
    },
    mounted(){
        
          axios('http://www.mei.com/appapi/silo/eventForH5?categoryId=men&pageIndex=1&timestamp=1568199518917&summary=304218fdac48402c76d91f3a91b6115b&platform_code=H5')
        .then(res=>{
            this. datalist = res.data.eventList
            console.log(this. eventlist)
        })
    }
}
</script>

<style lang="scss" scoped>

.banner{
    width: 3.75rem;
    height: 4.5rem;
    margin-bottom: .15rem;
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