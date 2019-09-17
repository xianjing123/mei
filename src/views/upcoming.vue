<template>
    <div>
        <div class="box"></div>
        <footerbox></footerbox>
    </div>
</template>

<script>
import footerbox from '@/components/footerbox'
export default {
    components: {
        footerbox
    }
}
</script>
<style scoped>
    .box{
        height:0.9rem;
        background:gray;
    }
</style>