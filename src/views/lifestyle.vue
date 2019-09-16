<template>
    <div>
        <hcyleftbanner></hcyleftbanner>
        <hcylifelist></hcylifelist>
        <hcylifeimgs></hcylifeimgs>
        <footerbox></footerbox>
    </div>
</template>
<script>
import hcyleftbanner from "@/views/lifestyle/hcyleftbanner"
import hcylifelist from "@/views/lifestyle/hcylifelist"
import hcylifeimgs from "@/views/lifestyle/hcylifeimgs"
import footerbox from '@/components/footerbox'
export default {
    components:{
        hcyleftbanner,
        hcylifelist,
        hcylifeimgs,
        footerbox
    }
}
</script>