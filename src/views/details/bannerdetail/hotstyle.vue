<template>
    <div>
        <div class="newArrival">
        <h2><img src="data:image/png;base64,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" alt=""></h2>
        <div class="newArrivalConnent">
            <ul>
                <li v-for="(data,index) in datalist" :key="index">
                    <img :src="data.fileUrl" alt="">
                    <div class="price">
                        <span>￥{{data.price}}</span>
                        <span>￥{{data.marketPrice}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
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
            axios(`http://www.mei.com/appapi/brand/product/hotNew/v3?logoId=${this.$route.params.id}`).then(res=>{
                console.log(res.data.body.newProductTop10)
                this.datalist=res.data.body.hotProductTop10
            })
        }
}
</script>


