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
            ID:"http://www.mei.com/appapi/silo/eventForH5?categoryId=kids&pageIndex=1&timestamp=1568182402925&summary=351105573a310b4af3013e8a35b0d06f&platform_code=H5",
            fun:obj.func1
            
            
        }
    },
    components:{
        imgss
    },
   
    
}
</script>
