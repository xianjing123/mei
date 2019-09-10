<template>
    <div class="shop">
        <shopTabbar @events="Events($event)">
            <div v-if="datalist.length" @click="edit">编辑</div>
            <div @click="more()" v-else><i class="iconfont icon-gengduo"></i></div>
        </shopTabbar>
        <div class="shopping-menu" ref="menu">
            <div class="shopping-block"></div>
            <router-link tag="p" to="/home">首页</router-link>
            <router-link tag="p" to="/shoppingcart">购物袋</router-link>
            <router-link tag="p" to="/login">个人中心</router-link>
        </div>
        <div class="shopping-full" v-if="datalist.length">
            <div class="tips">
                <span class="tips-text">{{tips}}</span>
                <span><i>1</i>/1</span>
            </div>
            <div v-for="comm in datalist" :key="comm.id" class="anyshop">
                <div class="comm-input">
                    <input type="checkbox" v-model="checkgroup" :value="comm" @change="checkBoxGroup">
                </div>
                <img :src="comm.img" alt="">
                <div class="anyshop-words">
                    <p class="anyshop-brand">{{comm.brand}}</p>
                    <p class="anyshop-name">{{comm.name}}</p>
                    <p class="anyshop-color">{{comm.color}}</p>
                    <div class="anyshop-price">
                        <span>￥{{comm.price}}</span>
                        <i>×{{comm.count}}</i>
                    </div>
                </div>
            </div>
        </div>
        <div class="shopping-null" v-else>
            <div class="shoppingbag">
                <img src="http://www.mei.com/static/img/shoppingcart-empty.2fb1458.png" alt="">
            </div>
            <p>购物袋是空的哦~</p>
            <div class="rush" @click="goShopping">去抢购</div>
        </div>
        <footer v-if="datalist.length">
            <div class="checkbox">
                <label @change="checkBox"><input type="checkbox" v-model="isAllChecked">全选</label>
            </div>
            <div class="total">总价：<span>￥{{total()}}</span></div>
            <div :class="checkgroup.length?'button-red':''" class="button">去结算{{end()}}</div>
        </footer>
    </div>
</template>

<script>
import shopTabbar from './shoppingcart/tabbar'

export default {
    data () {
        return {
            datalist: [
                {
                    id:1,
                    name:'衣服',
                    color:'蓝色',
                    brand:'3DAVID NAMAN',
                    count:1,
                    price:399,
                    img:'https://cdn13.mei.com/product/DZG-209-00899/2ea86d89047e5ba2f142197e7461d22e.jpg@182w_242h_2e_65q'
                },
                {
                    id:2,
                    name:'裤子',
                    color:'蓝色',
                    brand:'3DAVID NAMAN',
                    count:1,
                    price:500,
                    img:'https://cdn14.mei.com/product/VY4-204-00129/273985c7918284ee3b66a67822adc38c.jpg@182w_242h_2e_65q'
                },
                {
                    id:3,
                    name:'衣服',
                    color:'白色',
                    brand:'3DAVID NAMAN',
                    count:1,
                    price:900,
                    img:'https://cdn13.mei.com/product/VY4-206-00106/VY4-206-00106a.jpg@182w_242h_2e_65q'
                },
            ],
            isShow: true,
            tips: '[全新商品]满688免运费',
            isAllChecked: false,
            checkgroup: []
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
        checkBox () {
            if(this.isAllChecked) {
                this.checkgroup = this.datalist
            }else{
                this.checkgroup = []
            }
        },
        checkBoxGroup () {
            if(this.checkgroup.length === this.datalist.length){
                this.isAllChecked = true
            }else{
                this.isAllChecked = false
            }
        },
        total () {
            var sum = 0;
            for(var i in this.checkgroup){
                sum += this.checkgroup[i].price * this.checkgroup[i].count
            }
            return sum
        },
        edit () {
            this.$router.push('/shoppingcart/edit')
        },
        end () {
            return this.checkgroup.length?`(${this.checkgroup.length})`:''
        }
    },
    mounted () {
        this.$store.commit('tabbarFalse')
    },
    destroyed () {
        this.$store.commit('tabbarTrue')
    },
    components: {
        shopTabbar
    }
}
</script>

<style lang="scss" scoped>
    .shop{
        background:#f1f1f1;
        min-height:6.67rem;
    }
    //有商品时
    .shopping-full{
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
        .anyshop{
            height:1.4rem;
            background:white;
            border-bottom:.02rem solid #d2d2d2;
            box-sizing: border-box;
            display:flex;
            .comm-input{
                width:.4rem;
                position:relative;
                input{
                    width:.16rem;
                    height:.16rem;
                    position:absolute;
                    left:.12rem;
                    top:50%;
                    transform:translateY(-50%);
                }
            }
            img{
                height:100%;
            }
            .anyshop-words{
                padding-left:.1rem;
                padding-top:.1rem;
                flex:1;
                position:relative;
                .anyshop-brand{
                    font-weight:bold;
                }
                .anyshop-name{
                    margin:.1rem 0;
                }
                .anyshop-color{
                    font-size:.14rem;
                    color:#777;
                }
                .anyshop-price{
                    display:flex;
                    span{
                        color:red;
                        position:absolute;
                        bottom:0.1rem;
                    }
                    i{
                        font-style:normal;
                        position:absolute;
                        right:0.1rem;
                        color:#ccc;
                    }
                }
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
    //没有商品时
    .shopping-null{
        background:white;
        margin-top:.1rem;
        .shoppingbag{
            width:1rem;
            margin:0 auto;
            img{
                width:100%;
            }
        }
        p{
            width:1.3rem;
            margin:.2rem auto;
            color:#777;
        }
        .rush{
            width:.8rem;
            height:.3rem;
            border:0.02rem solid #363636;
            margin:0 auto;
            line-height:.3rem;
            text-align:center;
            font-size:.14rem;
        }
    }
    //底栏
    footer{
        width:100%;
        height:.5rem;
        background:white;
        display:flex;
        position: fixed;
        justify-content: space-between;
        bottom:0;
        .checkbox{
            width:1rem;
            line-height:.5rem;
            input{
                width:.16rem;
                height:.16rem;
                margin-right:.05rem;
                margin-left:.1rem;
            }
        }
        .total{
            line-height:.5rem;
            margin-left:.6rem;
            span{
                color:red;
                font-weight:bold;
            }
        }
        .button{
            width:1rem;
            height:100%;
            background:#ccc;
            line-height:.5rem;
            text-align:center;
            margin-left:.1rem;
            color:white;
        }
        .button-red{
            background:red;
        }
    }

</style>