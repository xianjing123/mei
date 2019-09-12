<template>
    <div>
        <div class="main" 
      v-infinite-scroll="loadMore"
      infinite-scroll-distance="10"

      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="false">
            <div class="mainContent" v-for="data in datalist" :key="data.categoryId" @click="toDetail(data)">
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
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);
import axios from "axios"
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
            // console.log(res.data)
            this.datalist=res.data.eventList
            this.totalPages=res.data.totalPages
           
        })
     
    },
    methods: {
        Image (data) {
            return data + "?x-oss-process=image/resize,w_750/quality,q_50"
        },
        loadMore(){
            // console.log("daodile")
            this.loading=true
            this.NumberOfRequests++
            this.totalPages--
            // console.log(this.totalPages)
            if(this.totalPages<0){
                return
            }
                // this.$emit('fu',this.NumberOfRequests)  
            
            
            axios(this.UrlId.fun(this.NumberOfRequests)).then(res=>{
                this.datalist=[...this.datalist,...res.data.eventList]
                this.loading=false
            })
            // console.log()
            
        },
        toDetail (data) {
            // this.$router.push({ name: 'detail', params: { Data: data, }})
            this.$router.push(`/detail/productlist?categoryId=${data.categoryId}&key=&sort=&timestamp=${Date.now()}`)
        }
        
    },
    props:["UrlId"]
}
</script>
<style lang="scss" scoped>
    .main{
        width:100%;
        // background-color:pink;
         
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
