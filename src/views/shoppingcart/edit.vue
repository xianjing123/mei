<template>
    <div class="shop">
        <shopTabbar>
            <span slot="content">购物车</span>
            <div @click="complete" slot="result">完成</div>
        </shopTabbar>
        <shopData>
            <span slot="show" style="display:none"></span>
            <span slot="setItem" style="display:none"></span>
        </shopData>
    </div>
</template>

<script>
import shopTabbar from './tabbar'
import shopData from './shopData'
export default {
    methods: {
        complete () {
            this.$router.back()
        },
        deleteRove () {
            this.$emit('remove',true)
        }
    },
    mounted () {
        this.$store.commit('tabbarFalse')
    },
    destroyed () {
        this.$store.commit('tabbarTrue')
    },
    components: {
        shopTabbar,
        shopData
    }
}
</script>

<style lang="scss" scoped>
    .shop{
        background:#f1f1f1;
        min-height:6.67rem;
    }
</style>