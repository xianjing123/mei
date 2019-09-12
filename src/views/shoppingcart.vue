<template>
    <div class="shop">
        <shopTabbar>
            <span slot="content">购物车</span>
            <div v-if="ortrue" @click="edit" slot="result">编辑</div>
            <navMenu slot="result" v-else><i class="iconfont icon-gengduo"></i></navMenu>
        </shopTabbar>
        <shopData @dataL="manyData($event)">
            <div slot="tips">
                <div class="tips">
                    <span class="tips-text">{{tips}}</span>
                    <span><i>1</i>/1</span>
                </div>
            </div>
            <span slot="delete" style="display:none"></span>
        </shopData>
    </div>
</template>

<script>
import shopTabbar from './shoppingcart/tabbar'
import shopData from './shoppingcart/shopData'
import navMenu from './shoppingcart/navMenu'
export default {
    data () {
        return {
            tips: '[全新商品]满688免运费',
            ortrue: false
        }
    },
    methods: {
        goShopping () {
            this.$router.push('/home')
        },
        manyData(data){
            this.ortrue = data
        },
        edit () {
            this.$router.push('/shoppingcart/edit')
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
        shopData,
        navMenu
    }
}
</script>

<style lang="scss" scoped>
    .shop{
        background:#f1f1f1;
        min-height:6.17rem;
        margin-bottom:.5rem;
    }
    .tips{
        font-size:.14rem;
        height:.3rem;
        line-height:.3rem;
        display: flex;
        justify-content: space-between;
        background:white;
        margin-bottom:.15rem;
        .tips-text{
            color:#e03a3a;
            margin-left:.15rem;
        }
        span{
            margin-right:.15rem;
            i{
                font-style:normal;
                font-size:.18rem;
            }
        }
    }
</style>