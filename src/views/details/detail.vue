<template>
    <div>
        <detailTabbar>
            <span slot="content">商品详情</span>
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
                <li v-for="item in products" :key="item.productId" class="detail-product">
                    <div class="product-img">
                        <img :src="item.imageUrl" alt="">
                    </div>
                    <p class="brand-name">{{item.brandName}}</p>
                    <p class="product-name">{{item.productName}}</p>
                    <div>
                        <span class="origin-price">￥{{item.price}}</span>
                        <span class="discount-price">￥{{item.marketPrice}}</span>
                        <span class="fracture">{{item.discount}}折</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import detailTabbar from '../shoppingcart/tabbar'
import navMenu from '../shoppingcart/navMenu'
import Bscroll from 'better-scroll'
import axios from 'axios'
export default {
    data () {
        return {
            detailSum: ['人气','折扣','价格','筛选'],
            current:0,
            products: [],
            scrollHeight: 0,
            pageIndex: 1
        }
    },
    methods: {
        detailClick (index) {
            this.current = index
        },
        detailTotal (data) {
            axios(data).then(res=>{
                this.products = res.data.products
                this.$nextTick(() => {
                    new Bscroll('.detail-total', {
                        scrollbar: {
                            fade: true,
                            interactive: false // 1.8.0 新增
                        }
                    })
                })
            })
        }
    },
    mounted () {
        let fromData = this.$route.query
        this.$store.commit('tabbarFalse')
        this.scrollHeight = window.innerHeight - 100 + 'px'
        if(this.$route.params.id==='id'){
            this.detailTotal(`http://www.mei.com/appapi/secondcategory/search/v3?brandNames=&chineseCodes=&pageIndex=1&categoryId=${fromData.categoryId}&siloId=${fromData.siloId}&thirdCategories=${fromData.thirdCategories}&key=&sort=&timestamp=${fromData.timestamp}`)
        }else if(this.$route.params.id==='productlist'){
            this.detailTotal(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${fromData.categoryId}&key=&sort=&timestamp=${fromData.timestamp}`)
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
            font-weight:bold;
            font-size:.14rem;
            flex:1;
            color:#777;
        }
        .active{
            color:black;
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
            }
        }
    }
</style>