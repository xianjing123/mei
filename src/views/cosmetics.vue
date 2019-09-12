<template>
    <div>
        <hcybanners></hcybanners>
        <categoryList></categoryList>
        <hcyimgs></hcyimgs>
    </div>
</template>
<script>
import hcybanners from "@/views/cosmetics/hcybanners"
import categoryList from "@/views/cosmetics/categoryList"
import hcyimgs from "@/views/cosmetics/hcyimgs"
import axios from "axios"
export default {
    components:{
        hcybanners,
        categoryList,
        hcyimgs
    }
}
</script>
