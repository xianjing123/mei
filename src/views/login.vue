<template>
  <div class="login-mobile">
    <a href="/index" class="back">×</a>
    <div class="login-form">
      <h3>
        登录/注册
        <p>{{datalist}}</p>
      </h3>
      <div class="input-box">
        <div class="input-item">
          <label v-show="isShow">手机号</label>
          <input type="text" id="username" class="bon1" placeholder="手机号" @click="handeleClick" />
        </div>
      </div>
      <div class="submit">
        <div class="default" @click="$router.back()"><p></p></div>
      </div><br>
      <div class="change">
         <router-link to="/loginone" class="mima">切换密码登录</router-link><br>
         <div class="icon">
             <span class="iconfont icon-changyonglogo25"></span>
             <span class="iconfont icon-Alipay"></span>
             <span class="iconfont icon-weibo"></span>
         </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import "../../public/font/iconfont.css";
import axios from "axios";
export default {
  data() {
    return {
      datalist: [],
      isShow: false
    };
  },
  methods: {
    handeleClick() {
      this.isShow = true;
    }
  },
  mounted() {
    this.$store.commit("tabbarFalse");
    axios("http://www.mei.com/appapi/customer/getRegisterTips").then(res => {
        console.log(res.data.tips)
      this.datalist = res.data.tips;
    });
  },
  destroyed() {
    this.$store.commit("tabbarTrue");
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.login-mobile {
  position: relative;
  .back {
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    font-size: 0.5rem;
    color: #000;
    text-align: center;
    line-height: 0.6rem;
    font-weight: 100;
    position: absolute;
    right: 0;
    top: 0;
  }
}
.login-form {
  width: 3.75rem;
  height: 3.8rem;
  padding-top: 0.88rem;
  h3 {
    font-weight: 500;
    width: 3.33rem;
    height: 0.8rem;
    color: #000;
    padding: 0 0 0.35rem 0.38rem;
    p {
      font-size: 0.14rem;
      font-weight: 100;
      padding-top: 0.06rem;
    }
  }
}
.input-box {
  width: 3.05rem;
  height: 0.6rem;
  margin: 0 auto 0.266667rem;
  box-shadow: 0 0.08rem 0.133333rem rgba(0, 0, 0, 0.15),
    0 -0.013333rem 0.133333rem rgba(0, 0, 0, 0.05);
  .input-item {
    width: 2.75rem;
    height: 0.6rem;
    margin: 0 auto;
    position: relative;
    label {
      position: absolute;
      font-size: 0.1rem;
      left: 0;
      top: 0.1rem;
    }
    input {
      width: 2.35rem;
      height: 0.16rem;
      outline: none;
      padding: 0.23rem 0;
      border: none;
      background: transparent;
    }
  }
}
.submit {
  width: 3.05rem;
  height: 0.6rem;
  box-shadow: 0 0.08rem 0.133333rem rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  .default {
    width: 3.05rem;
    height: 0.6rem;
    display: flex;
    align-items: center;
    align-content: center;
    background: #cccccc;
    
    p{
        width:.30rem;
        height:.30rem;
        background:url(../../public/image/ico_03.jpg) no-repeat .02rem;
        margin: 0 auto;
    }
    
  }
  
}
.change{
  margin-left:.35rem;
  span{
    font-size: .35rem;
    margin-right: .4rem;
    font-weight: 580; 
  }
  .icon{
    margin-left:.65rem;
    padding-top: 1.3rem;
  }
}
</style>