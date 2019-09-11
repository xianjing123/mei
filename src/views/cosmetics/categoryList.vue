<template>
    <div>
        <ul>
            <router-link tag="li" v-for="(data,index) in datalist" :key="index" to="/">
            <img :src="data.categoryImgStr" alt="">
            </router-link>
        </ul>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            datalist:[]
        }
    },
    mounted(){
        axios("http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000003&ids=2042000100000000431&timestamp=1568099073929&summary=706e7a023dfaa98a346b72bf6b5b4974&platform_code=H5").then(res=>{
            // console.log(res.data.resultList[0].data)
            this.datalist=res.data.resultList[0].data
            // console.log(res.data.resultList[0].data[0].categoryOneId)
        })
    }
}
</script>
<style lang="scss" scoped>
 div{
     width:3.75rem;
     padding:0.05rem;
    //  background-color:hotpink;
     ul{

     display:flex;
     li{
         flex:1;
         width:0.61rem;
         img{
             width:0.61rem
         }
     }
     }
 }
</style>