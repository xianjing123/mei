<template>
  <div v-if="brandObj">
    <div class="brand-info">
      <div class="brand-img">
        <img ref="imgWidth" :src="brandObj.brandDetail.brandPageImage" alt />
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
      <div class="brank-text" >
        <div class="brank-text-content">
          <p :class="isshow?'show':''">{{brandObj.brandDetail.brandStoryText}}</p>
          <!-- <name></name> -->
          <span @click="showHeight">{{isshow?'收起':'更多'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      brandObj: null,
      isshow:false,
      
      
    };
  },
  mounted() {
    
    
    this.$store.commit("tabbarFalse")
    
   var ad=this.$route.params.id
    axios(
      `http://www.mei.com/appapi/brand/product/hotNew/v3?logoId=${ad}`
    ).then(res => {
      this.brandObj = res.data.body;
    this.$nextTick(()=>{
     this.$store.state.imgHeight=this.$refs.imgWidth.offsetHeight
    })
    });
  },
  
  methods: {
    showHeight() {
     this.isshow=!this.isshow
    }
  },
 
  destroyed(){
    this.$store.commit("tabbarTrue")
  }
};
</script>
<style scoped lang="scss">
.brand-info {
  width: 100%;
  height: 6.11rem;
  .brand-img {
    width: 100%;
    height: 2.25rem;
    position: relative;
    img {
      width: 100%;
    }
    h1 {
      width: 100%;
      text-align: center;
      font-size: 0.24rem;
      color: #fff;
      position: absolute;
      bottom: 0.3rem;
    }
    span:nth-of-type(3) {
      width: 0.82rem;
      height: 0.28rem;
      line-height: 0.28rem;
      font-size: 0.12rem;
      display: block;
      position: absolute;
      bottom: -0.14rem;
      background-color: #000;
      color: #fff;
      text-align: center;
      left: 50%;
      margin-left: -0.41rem;
    }
  }
  .InSellingGoods {
    width: 100%;
    height: 0.16rem;
    // background-color: indigo;
    margin-top: 0.14rem;
    padding: 0.17rem 0 0.25rem 0;
    text-align: center;
    font-size: 0.12rem;
    color: #ccc;
  }
  .brank-text {
    text-align: center;
    width: 100%;
    
   
    
    .brank-text-content {
      position: relative;
      
      width: 3.25rem;
      
      display: block;
      margin: 0 auto;
     
      p {
        width: 100%;
        
        overflow: hidden;
        height: 1.24rem;
        font-size: 0.14rem;
        line-height: 0.2rem;
        color: #ccc;
      }
       .show{
      overflow: visible;
      height:auto;
    }
      span {
        width: 100%;
        height: 0.43rem;
        display: block;
        line-height:0.43rem;
        text-align: center;
        color: #d88358;
        font-size: 0.12rem;
        cursor: pointer;
      
        background-color:#fff;
       
      }
    }
   
  }
}
</style>
