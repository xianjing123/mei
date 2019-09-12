<template>
    <div>
        <div @click="more()"><i class="iconfont icon-gengduo"></i></div>
        <div class="shopping-menu" ref="menu">
            <div class="shopping-block"></div>
            <router-link tag="p" to="/home">首页</router-link>
            <router-link tag="p" to="/shoppingcart">购物袋</router-link>
            <router-link tag="p" to="/login">个人中心</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: true
        }
    },
    methods: {
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
        }
    }
}
</script>

<style lang="scss" scoped>
    //菜单框
    .iconfont{
        font-size:.2rem;
        font-weight:bold;
    }
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
            font-weight: 500;
        }
    }
</style>