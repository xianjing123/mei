<template>
    <div>
        <detailTabbar>
            <span slot="content">{{fromData.thirdCategories||title}}</span>
            <navMenu slot="result"></navMenu>
        </detailTabbar>
        <div class="detail-nav">
            <div v-for="(detail,index) in detailSum" :key="detail" :class="current===index?'active':''"
            @click="detailClick(index)">
                {{detail}}
            </div>
        </div>
        <div class="detail-total" :style={height:scrollHeight}>
            <ul>
                <li v-for="item in products" :key="item.productId" class="detail-product" @click="buyShop(item)">
                    <div class="product-img">
                        <img :src="item.imageUrl" alt="">
                    </div>
                    <p class="brand-name">{{item.brandName}}</p>
                    <p class="product-name">{{item.productName}}</p>
                    <div class="product-price">
                        <span class="origin-price">￥{{item.price}}</span>
                        <span class="discount-price">￥{{item.marketPrice}}</span>
                        <span class="fracture">{{item.itemPriceDto.discount}}折</span>
                    </div>
                </li>
            </ul>
        </div>
        <router-link tag="div" to="/shoppingcart" class="detail-to-cart"><i class="iconfont icon-iconset0316"></i></router-link>
    </div>
</template>
<script>
import detailTabbar from '../shoppingcart/tabbar'
import navMenu from '../shoppingcart/navMenu'
import Bscroll from 'better-scroll'
import Vue from 'vue'
import axios from 'axios'
import { MessageBox } from 'mint-ui';
export default {
    data () {
        return {
            title: "",
            detailSum: ['人气','折扣','价格'],
            current:0,
            products: [],
            scrollHeight: 0,
            key: "",
            sort: "",
            fromData: this.$route.query
        }
    },
    methods: {
        detailClick (index) {
            this.current = index
            if(index===0){
                this.getUrl()
            }else if(index===1){
                this.getUrl(1,'ASC')
            }else if(index===2){
                this.getUrl("",'DESC')
            }
        },
        detailTotal (data) {
            axios(data).then(res=>{
                this.title = res.data.eventName
                this.products = res.data.products
                this.$nextTick(() => {
                    new Bscroll('.detail-total', {
                        fade: true,
                        interactive: false, // 1.8.0 新增
                        click: true
                    })
                })
            })
        },
        getUrl (key="",sort="") {
            if(this.$route.params.id==='id'){
                return this.detailTotal(`http://www.mei.com/appapi/secondcategory/search/v3?brandNames=&chineseCodes=&pageIndex=1&categoryId=${this.fromData.categoryId}&siloId=${this.fromData.siloId}&thirdCategories=${this.fromData.thirdCategories}&key=${key}&sort=${sort}&timestamp=${this.fromData.timestamp}`)
            }else if(this.$route.params.id==='productlist'){
                return this.detailTotal(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.fromData.categoryId}&key=${key}&sort=${sort}&timestamp=${this.fromData.timestamp}`)
            }
        },
        buyShop (item) {
            MessageBox.confirm('确定添加该商品吗').then(action => {
                axios({
                    method: 'post',
                    url: '/users',
                    data: {
                        name:item.productName,
                        color:"",
                        brand:item.brandName,
                        img:item.imageUrl,
                        count:1,
                        price:Number(item.itemPriceDto.price)
                    }
                }).then(res=>{
                    if(res.data.ok){
                        MessageBox('提示', '已经加入购物车');
                    }else{
                        MessageBox('提示', '添加失败');
                    }
                })
            });
        }
    },
    mounted () {
        this.$store.commit('tabbarFalse')
        this.scrollHeight = window.innerHeight - 100 + 'px'
        if(this.$route.params.id==='id'){
            this.detailTotal(`http://www.mei.com/appapi/secondcategory/search/v3?brandNames=&chineseCodes=&pageIndex=1&categoryId=${this.fromData.categoryId}&siloId=${this.fromData.siloId}&thirdCategories=${this.fromData.thirdCategories}&key=&sort=&timestamp=${this.fromData.timestamp}`)
        }else if(this.$route.params.id==='productlist'){
            this.detailTotal(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.fromData.categoryId}&key=&sort=&timestamp=${this.fromData.timestamp}`)
        }
    },
    destroyed () {
        this.$store.commit('tabbarTrue')
    },
    components: {
        detailTabbar,
        navMenu
    }
}
</script>

<style lang="scss" scoped>
    .detail-nav{
        height:.4rem;
        background:white;
        display:flex;
        text-align:center;
        line-height:.4rem;
        div{
            font-size:.14rem;
            flex:1;
            color:#777;
        }
        .active{
            color:black;
            font-weight:bold;
        }
    }
    .detail-total{
        overflow: hidden;
        position:relative;
        ul{
            display:flex;
            flex-wrap: wrap;
            .detail-product{
                width:50%;
                height:3rem;
                padding:.1rem;
                box-sizing: border-box;
                .product-img{
                    width:100%;
                    img{
                        width:100%;
                    }
                }
                .brand-name{
                    font-size:.14rem;
                    font-weight:bold;
                }
                .product-name{
                    font-size:.14rem;
                    width:100%;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                .product-price{
                    font-size:.12rem;
                    .origin-price{
                        color:#dd2828;
                        font-weight:bold;
                        margin-right:.1rem;
                    }
                    .discount-price{
                        color:#ccc;
                        font-weight: 500;
                        text-decoration: line-through;
                        margin-right:.3rem;
                    }
                }
            }
        }
    }
    .detail-to-cart{
        position:fixed;
        z-index:2;
        width:.4rem;
        height:.4rem;
        background:white;
        line-height:.4rem;
        text-align:center;
        bottom:.3rem;
        right:.2rem;
        border-radius: 50%;
        i{
            font-weight:bold;
            font-size:.26rem;
        }
    }
</style>