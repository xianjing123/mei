<template>
    <div>
        <hcyleftbanner></hcyleftbanner>
        <hcylifelist></hcylifelist>
        <hcylifeimgs></hcylifeimgs>
        
    </div>
</template>
<script>
import hcyleftbanner from "@/views/lifestyle/hcyleftbanner"
import hcylifelist from "@/views/lifestyle/hcylifelist"
import hcylifeimgs from "@/views/lifestyle/hcylifeimgs"

export default {
    components:{
        hcyleftbanner,
        hcylifelist,
        hcylifeimgs
    }
}
</script>