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
            this.$router.push(`/detail/id?categoryId=${data.categoryOneId}&siloId=${data.siloId}&thirdCategories=${data.categroyTwoName}&key=&sort=&timestamp=${Date.now()}`)
        }
    },
    mounted(){
        axios("http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000005&ids=2120000100000000146&timestamp=1568117291743&summary=e0ee0b1b31e0c1518dcf9227038c380c&platform_code=H5").then(res=>{
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