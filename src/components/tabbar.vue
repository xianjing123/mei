<template>
    <nav ref="router">
        <div class="head">
         <router-link to= "/login" tag="div" class="login">登录</router-link>
         <router-link to= "/search" tag="div" class="search" ><strong>MICHAEL KORS 低至三折</strong></router-link>
         <router-link to= "/shoppingcart" tag="div" class="cart">cart</router-link>
         </div>
        <ul>
            <router-link to= "/home" tag="li" activeClass="active">推荐</router-link>
            <router-link to= "/crossborder" tag="li" activeClass="active">海外</router-link>
            <router-link to= "/women" tag="li" activeClass="active">女士</router-link>
            <router-link to= "/man" tag="li" activeClass="active">男士</router-link>
            <router-link to= "/cosmetics" tag="li" activeClass="active">美妆</router-link>
            <router-link to= "/lifestyle" tag="li" activeClass="active">家居</router-link>
            <router-link to= "/kids" tag="li" activeClass="active">婴童</router-link>
            <router-link to= "/upcoming" tag="li" activeClass="active">即将上新</router-link>
        </ul>
    </nav>
</template>

<script>
export default {
    mounted () {
        window.onscroll = this.Scroll
    },
    methods: {
        Scroll () {
            if(document.documentElement.scrollTop > 0){
                this.$refs.router.style.background = 'white'
                this.$refs.router.style.color = 'black'
            }else{
                this.$refs.router.style.background = 'transparent'
                this.$refs.router.style.color = 'white'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    *{
        margin:0;
        padding:0;
    }
    nav{
        position: fixed;
        left: 0;
        top:0;
        color:white;
        z-index: 999;
    }
    .active{
        border-bottom:3px solid white;
    }
    .head{
        display: flex;
        justify-content: space-between;
        padding-top: .07rem;
        margin-bottom: .02rem;
        box-sizing: border-box;
        width:3.75rem;
        .login{
            height: .24rem;
            width: .4rem;
            font-size: .14rem;
            line-height: .24rem;
            margin-left: .15rem;
            margin-top: .05rem;
        }
        .cart{
           
            height: .24rem;
            width: .4rem;
            font-size: .14rem;
            line-height: .24rem;
            margin-right: .15rem;
            margin-top: .05rem;
            text-align:center;
        }
        .search{
            height: .34rem;
            flex:1;
            background-color: hsla(0,0%,100%,.3);
             line-height: .34rem;
             
        }

    }

    ul{
        list-style:none;
        width:3.75rem;
        height:.44rem;
        overflow-x:auto;
        white-space:nowrap;
        li{
            display:inline-block;
            width:.4rem;
            font-size: .14rem;
            line-height: .44rem;
            text-align: center;
            margin-left: .1rem;
        }
    }
</style>