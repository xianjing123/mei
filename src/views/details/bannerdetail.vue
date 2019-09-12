<template>
  <div>
    <div class="brand-info">
      <div class="brand-img">
        <img :src="brandObj.brandDetail.brandPageImage" alt />
        <span></span>
        <span></span>
        <h1>{{brandObj.brandDetail.brandName.toUpperCase()}}</h1>
        <span>+关注</span>
      </div>
          <div class="InSellingGoods">
               <p>
          在售商品
          <span>{{brandObj.onSaleTotal}}</span>件
        </p>
          </div>
      <div class="brank-text">
       
        <p>{{brandObj.brandDetail.brandStoryText}}</p>
        <span>更多</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      brandObj: {}
    };
  },
  mounted() {
    axios(
      "http://www.mei.com/appapi/brand/product/hotNew/v3?logoId=3616200100000001326"
    ).then(res => {
      this.brandObj = res.data.body;
    });
  }
};
</script>
<style scoped lang="scss">

  .brand-info{
      width:100%;
      height:6.11rem;
      background-color:hotpink;
      .brand-img{
          width:100%;
          height:2.25rem;
          position:relative;
          img{
              width:100%
          }
          h1{
              width:100%;
              text-align:center;
              font-size:0.24rem;
              color:#fff;
              position:absolute;
              bottom:0.3rem
          }
        span:nth-of-type(3){
            width:0.82rem;
            height:0.28rem;
            line-height:0.28rem;
            font-size:0.12rem;
            display:block;
            position:absolute;
            bottom:-0.14rem;
            background-color:#000;
            color:#fff;
            text-align:center;
            left:50%;
            margin-left:-0.41rem;

            
        }
      }
    .InSellingGoods{
        width:100%;
        height:0.16rem;
        background-color:indigo;
        margin-top:0.14rem;
        padding:.17rem 0 .25rem 0;
        text-align:center;
        font-size:.12rem;
        color:#ccc;

    }

  }

</style>