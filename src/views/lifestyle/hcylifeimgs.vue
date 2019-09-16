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
            ID:"http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=1&timestamp=1568192244360&summary=6dfbcc20b6f658cafd744d7df24f426c&platform_code=H5",
            fun:obj.func3
        }
    },
    components:{
        imgss
    }   
}
</script>
