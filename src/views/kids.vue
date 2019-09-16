<template>
    <div>
        <hcyKidbanner></hcyKidbanner>
        <hcyKidcategoryList></hcyKidcategoryList>
        <hcykidimgs></hcykidimgs>
        <footerbox></footerbox>
    </div>
</template>
<script>
import hcyKidbanner from "@/views/kids/hcyKidbanner"
import hcyKidcategoryList from "@/views/kids/hcyKidcategoryList"
import hcykidimgs from "@/views/kids/hcykidimgs"
import footerbox from '@/components/footerbox'
import axios from "axios"
export default {
    components:{
        hcyKidbanner,
        hcyKidcategoryList,
        hcykidimgs,
        footerbox
    }
}
</script>