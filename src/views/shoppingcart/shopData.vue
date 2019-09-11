<template>
    <div>
        <div class="shopping-full" v-if="datalist.length">
            <slot name="tips"></slot>
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
            <slot name="show">
                <div class="total">总价：<span>￥{{total()}}</span></div>
            </slot>
            <slot name="setItem">
                <div :class="checkgroup.length?'button-red':''" class="button" @click="deleteShop">
                    去结算{{endNum()}}
                </div>
            </slot>
            <slot name="delete">
                <div :class="checkgroup.length?'button-red':''" class="button" @click="deleteShop">
                    删除{{endNum()}}
                </div>
            </slot>
        </footer>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isAllChecked: false,
            checkgroup: [],
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
                }
            ]
        }
    },
    mounted () {
        this.$emit('dataL',this.datalist.length?true:false)
    },
    methods: {
        goShopping () {
            this.$router.push('/home')
        },
        checkBoxGroup () {
            if(this.checkgroup.length === this.datalist.length){
                this.isAllChecked = true
            }else{
                this.isAllChecked = false
            }
        },
        checkBox () {
            if(this.isAllChecked) {
                this.checkgroup = this.datalist
            }else{
                this.checkgroup = []
            }
        },
        deleteShop () {
            for(let i = this.datalist.length-1; i>=0; i--){
                for(let j = 0; j<this.checkgroup.length;j++){
                    if(this.datalist[i]===this.checkgroup[j]){
                        console.log(this.datalist[i])
                        this.datalist.splice(i,1)
                    }
                }
            }
            this.checkgroup = []
        },
        total () {
            var sum = 0;
            for(var i in this.checkgroup){
                sum += this.checkgroup[i].price * this.checkgroup[i].count
            }
            return sum
        },
        endNum () {
            return this.checkgroup.length?`(${this.checkgroup.length})`:''
        }
    }
}
</script>

<style lang="scss" scoped>
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