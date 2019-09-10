<template>
    <nav>
        <div class="head">
         <router-link to= "/login" tag="div" class="login">登录</router-link>
         <router-link to= "/search" tag="div" class="search" ><strong>MICHAEL KORS 低至三折</strong></router-link>
         <router-link to= "/shoppingcart" tag="div" class="cart">cart</router-link>
         </div>
        <ul>
            <router-link to= "/" tag="li">推荐</router-link>
            <router-link to= "/crossborder" tag="li">海外</router-link>
            <router-link to= "/women" tag="li">女士</router-link>
            <router-link to= "/man" tag="li">男士</router-link>
            <router-link to= "/cosmetics" tag="li">美妆</router-link>
            <router-link to= "/lifestyle" tag="li">家居</router-link>
            <router-link to= "/kids" tag="li">婴童</router-link>
            <router-link to= "/upcoming" tag="li">即将上新</router-link>
            
        </ul>
    </nav>
</template>

<script>
export default {
    
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
        
    }
    .head{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: .07rem;
        margin-bottom: .02rem;
        .login{
            
            height: .24rem;
            width: .24rem;
            font-size: .1rem;
            line-height: .24rem;
            margin-left: .15rem;
              margin-top: .05rem;
        }
        .cart{
           
            height: .24rem;
            width: .24rem;
            font-size: .1rem;
            line-height: .24rem;
            margin-right: .15rem;
            margin-top: .05rem;
        }
        .search{
            height: .34rem;
            width: 2.65rem;
            background-color: hsla(0,0%,100%,.3);
           
             line-height: .34rem;
             
        }

    }

    ul{
        list-style:none;
        width:100%;
        height:.44rem;
        overflow-x:auto;
        white-space:nowrap;
        
        
        li{
            display:inline-block;
            width:.4rem;
            height:.44rem;
            font-size: .14rem;
            line-height: .44rem;
            text-align: center;
            margin-left: .1rem;
            color: white;
        }
    }
</style>