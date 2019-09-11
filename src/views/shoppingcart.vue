<template>
    <div class="shop">
        <shopTabbar>
            <div v-if="ortrue" @click="edit">编辑</div>
            <div @click="more()" v-else><i class="iconfont icon-gengduo"></i></div>
        </shopTabbar>
        <div class="shopping-menu" ref="menu">
            <div class="shopping-block"></div>
            <router-link tag="p" to="/home">首页</router-link>
            <router-link tag="p" to="/shoppingcart">购物袋</router-link>
            <router-link tag="p" to="/login">个人中心</router-link>
        </div>
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
export default {
    data () {
        return {
            isShow: true,
            tips: '[全新商品]满688免运费',
            ortrue: false
        }
    },
    methods: {
        goShopping () {
            this.$router.push('/home')
        },
        more () {
            if(this.isShow){
                this.isShow=false
                this.$refs.menu.style.zIndex = '3'
                this.$refs.menu.style.opacity = '1'
                this.$refs.menu.style.transform = 'translate3d(0,0,0)'
            }else{
                this.isShow=true
                this.$refs.menu.style.zIndex = '-1'
                this.$refs.menu.style.opacity = '0'
                this.$refs.menu.style.transform = 'translate3d(0,-0.2rem,0)'
            }
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
        shopData
    }
}
</script>

<style lang="scss" scoped>
    .shop{
        background:#f1f1f1;
        min-height:6.67rem;
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
    //菜单框
    .shopping-menu {
        width:1.15rem;
        position: absolute;
        right:0;
        top:.3rem;
        opacity: 0;
        z-index: -1;
        transition:.3s;
        transform: translate3d(0,-0.2rem,0);
        .shopping-block{
            width:0;
            border:.1rem solid transparent;
            border-bottom:.1rem solid #f1f1f1;
            position: relative;
            left:.7rem;
        }
        p{
            height:.5rem;
            border-bottom:0.01rem solid #ccc;
            font-size:.18rem;
            text-align:center;
            line-height:.5rem;
            background:#f1f1f1;
        }
    }
</style>