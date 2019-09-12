<template>
    <div>
        <div class="maincontent">
        <div class="targeturl">
            <div class="forA" v-for="(data,index) in datalist" :key="index">
                <a :href="data.url" target="_blank"></a>
                </div>
            
        </div>
        <img :src="imgurl" alt="">
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            datalist:[],
            imgurl:""
        }
    },
    mounted(){
        axios(`http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000004&ids=2121000100000000291&timestamp=${Date.now()}&summary=0eb2b86d089e03615a27ecc251a2741b&platform_code=H5`).then(res=>{
            this.datalist=JSON.parse(res.data.resultList[0].data[0].imageJson)
            this.imgurl=res.data.resultList[0].data[0].imageUrl
            // this.datalist=res.data
        })
    }
}
</script>
<style lang="scss" scoped>
    .maincontent{
        width:100%;
        height:2.26rem;
        position:relative;
        .targeturl{
            width:100%;
            height:100%;
            position:absolute;
            z-index:1;
            .forA{
                 width:50%;
                height:50%;
                float:left;
            a{
                display:block;
                width:100%;
                height:100%;
                
            }
            }
        }
        img{
            width:100%;
            position:absolute;
            top:0;
            left:0;
        }
    }
</style>

