<template>
    <div>
       <imgss :UrlId="{ID,fun}"></imgss>
    </div>
</template>
<script>
import Vue from 'vue'
import imgss from "@/components/imgss"
import { InfiniteScroll } from 'mint-ui';
import obj from '@/js/data.js'
Vue.use(InfiniteScroll);
import axios from "axios"
export default {
    data(){
        return{
            ID:"http://www.mei.com/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=1&timestamp=1568102501859&summary=9847c87683adfae5c16b38c81d82142b&platform_code=H5",
            fun:obj.func2
            
            
        }
    },
    components:{
        imgss
    },
   
    
}
</script>
