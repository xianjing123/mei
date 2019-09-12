<template>
  <div class="box">
    <nav ref="router">
        <div class="head">
         <router-link to= "/login" tag="div" class="login">登录</router-link>
         <div class="search" v-on:click="handlClick()">
            <p><i></i> MICHAEL KORS 低至三折</p>
         </div>
         <!-- <router-link to= "/search" tag="div" class="search" v-on:click="handleClick()"></router-link> -->
         <router-link to= "/shoppingcart" tag="div" class="cart">cart</router-link>
         </div>
        <ul>
            <router-link to= "/home" tag="li" activeClass="active">推荐</router-link>
            <router-link to= "/crossborder" tag="li" activeClass="active">海外</router-link>
            <router-link to= "/woman" tag="li" activeClass="active">女士</router-link>
            <router-link to= "/man" tag="li" activeClass="active">男士</router-link>
            <router-link to= "/cosmetics" tag="li" activeClass="active">美妆</router-link>
            <router-link to= "/lifestyle" tag="li" activeClass="active">家居</router-link>
            <router-link to= "/kids" tag="li" activeClass="active">婴童</router-link>
            <router-link to= "/upcoming" tag="li" activeClass="active">即将上新</router-link>
        </ul>

       

    </nav>

     <div class="mask" ref="mask">
       
                <div class="input">
                   <input type="text" placeholder="INITIAL轻剪裁男装 低至2折" class="sousuo"> 
                   <span v-on:click ="backClick()">取消</span>
                </div>
                <div class="found">
                    <p>搜索发现</p>
                    <ul class="hot">
                        <li>围巾</li>
                        <li>Zegna</li>
                        <li>睡衣</li>
                        <li>Theory</li>
                        <li>内衣</li>
                        <li>CREAZIONI</li>
                    </ul>
                </div>
                <div class="history">
                    <div class="title">
                        <p>搜索历史 <span>del</span></p> 
                        <i></i>
                    </div>
                    <ul>
                        <li></li>
                    </ul>
                </div>
        
        </div>
 </div>
</template>

<script>
export default {
    mounted () {
        window.onscroll = this.Scroll
    },
    methods: {
        Scroll () {
            if(document.documentElement.scrollTop || document.body.scrollTop > 0){
                this.$refs.router.style.background = 'white'
                this.$refs.router.style.color = 'black'
            }else{
                this.$refs.router.style.background = 'transparent'
                this.$refs.router.style.color = 'white'
            }
        },
        handlClick:function(){
           this.$refs.router.style.display ='none'
           this.$refs.mask.style.display ='block'//???
        },
        backClick:function(){
           this.$refs.mask.style.display ='none'
           this.$refs.router.style.display ='block'
        }
    },
    destroyed () {
        window.onscroll = null
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
        z-index:1000;
        left: 0;
        top:0;
        color:white;
        z-index: 999;
    }
    .active{
        position: relative;
        &::after
        {
            width:0.2rem;
            height:0.02rem;
            background-color:#fff;
            display:block;
            position:absolute;
            bottom:0.05rem;
            content:"";
            left:50%;
            transform: translateX(-50%)

        }
        
    }
    .head{
        display: flex;
        justify-content: space-between;
        margin-top: .07rem;
        margin-bottom: .02rem;
        box-sizing: border-box;
        width:100%;
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
            font-size: .16rem;
            font-family: 黑体;
            text-align: center;
             
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

    .mask{
        width:100%;
        height:100%;
        background-color: white;
        position:fixed;
        z-index: 1000;
        display: none;
        overflow: auto;
        
        .input{
            width: 3.45rem;
            height: .44rem;
            margin: 0 auto;
            margin-top: .1rem;
            display: flex
            
           
        }
         input{
                display: inline-block;
                vertical-align: top;
                width: 2.8rem;
                justify-content:center;
                height: .3rem;
                line-height: .853333rem;
                font-size: .16rem;
                background-color: #f5f5f5;
                border: none;
                border-radius: 0;
                
                
            }
            span{
               height: .3rem;
               line-height: .3rem;
               margin-left: .2rem;
               font-size: .16rem;
            }
    }
    .found{
            width: 3.45rem;
            
            margin: 0 auto;
            margin-top: .1rem;
           .hot{
                 width: 3.45rem;
                 overflow-x:  visible;
                 white-space: normal;
                 padding-top: .15rem;
                 padding-bottom: .5rem;
              li{
               width: 1.03rem;
               height: .34rem;
               background-color: rgb(235, 235, 235);
               text-align: center;
               line-height: .34rem;
               margin-bottom:.1rem;
              }
           }
          
            
    }
    .history{
            width: 3.45rem;
            
            margin: 0 auto;
            margin-top: .1rem;
    }
    .box{
        width:100%;
        height:100%;
    }
</style>