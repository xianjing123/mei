<template>
    <div>
        <ul>
            <li v-for="(data,index) in datalist" :key="index" @click="toDetail(data)">
            <img :src="data.categoryImgStr" alt="">
            </li>
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
    methods: {
        toDetail (data) {
            // this.$router.push({ name: 'detail', params: { Data: data, }})
            this.$router.push(`/detail/id?categoryId=${data.categoryOneId}&siloId=${data.siloId}&thirdCategories=${data.categoryOneName}&key=&sort=&timestamp=${Date.now()}`)
        }
    },
    mounted(){
        axios("http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000003&ids=2042000100000000431&timestamp=1568099073929&summary=706e7a023dfaa98a346b72bf6b5b4974&platform_code=H5").then(res=>{
            this.datalist=res.data.resultList[0].data
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