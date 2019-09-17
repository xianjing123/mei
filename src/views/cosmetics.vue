<template>
    <div>
        <hcybanners></hcybanners>
        <categoryList></categoryList>
        <hcyimgs></hcyimgs>
        <footerbox></footerbox>
    </div>
</template>
<script>
import hcybanners from "@/views/cosmetics/hcybanners"
import categoryList from "@/views/cosmetics/categoryList"
import hcyimgs from "@/views/cosmetics/hcyimgs"
import footerbox from '@/components/footerbox'
import axios from "axios"
export default {
    components:{
        hcybanners,
        categoryList,
        hcyimgs,
        footerbox
    }
}
</script>
