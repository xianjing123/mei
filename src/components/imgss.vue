<template>
    <div>
        <div class="main" 
      v-infinite-scroll="loadMore"
      infinite-scroll-distance="10"

      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="false">
            <div class="mainContent" v-for="data in datalist" :key="data.categoryId" v-detail="data">
            <img :src="Image(data.imageUrl)" alt="">
            <div class="particulars">
            <p>{{data.englishName}}</p>
            <p>{{data.chineseName}}</p>
            <p>{{data.discountText}}</p>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from "axios"
import { InfiniteScroll } from 'mint-ui';
import '@/js/toDetail'
Vue.use(InfiniteScroll);
export default {
    data(){
        return{
            datalist:[],
            loading : false,
            NumberOfRequests:1,
            totalPages:0,
            
        }
    },
    
    mounted(){
         axios(this.UrlId.ID).then(res=>{
            this.datalist=res.data.eventList
            this.totalPages=res.data.totalPages
           
        })
     
    },
    methods: {
        Image (data) {
            return data + "?x-oss-process=image/resize,w_750/quality,q_50"
        },
        loadMore(){
            this.loading=true
            this.NumberOfRequests++
            this.totalPages--
            if(this.totalPages<0){
                return
            }
            
            
            axios(this.UrlId.fun(this.NumberOfRequests)).then(res=>{
                this.datalist=[...this.datalist,...res.data.eventList]
                this.loading=false
            })
            
        }
    },
    props:["UrlId"]
}
</script>
<style lang="scss" scoped>
    .main{
        width:100%;
         
        .mainContent{
            width:3.45rem;
            margin:0 .15rem .15rem .15rem;
            position:relative;
            color:#fff;
            
            img{
                width:3.45rem
            }
            .particulars{
                position:absolute;
                left:0.1rem;
                bottom:0.2rem;
                p:nth-of-type(1){
                    font-size:.16rem
                }
                p:nth-of-type(2){
                    font-size:.13rem
                }
                 p:nth-of-type(3){
                    font-size:.13rem
                }
                
            } 
        }
    }
</style>
