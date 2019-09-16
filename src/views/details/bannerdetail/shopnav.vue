<template>
  <div>
    <div class="headernav" :class="isshow?'color':''">
      <p class="iconfont icon-sdf" @click="back" ></p>
      <p v-show="isshow" >{{designation}}</p>
      <!-- <p class="iconfont icon-gengduo" ></p> -->
      <div class="menu">
      <navMenu></navMenu>

      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import navMenu from '@/views/shoppingcart/navMenu'
export default {
  data() {
    return {
      designation: "",
      isshow:false,
      // imgHeight:0
    };
  },
  methods:{
      haha(){
        // console.log(this.imgHeight)
        // console.log(document.body.scrollTop)
        if(document.documentElement.scrollTop > this.imgHeight){
            this.isshow=true
        }else{
            this.isshow=false
        }
    },
    back(){
      this.$router.back()
    }
  },
  computed: {
    imgHeight() {
      return this.$store.state.imgHeight
    }
  },
  mounted() {
       window.addEventListener('scroll',this.haha)
    axios(
      `http://www.mei.com/appapi/brand/product/hotNew/v3?logoId=${this.$route.params.id}`
    ).then(res => {
      this.designation = res.data.body.brandDetail.brandName.toUpperCase()
      // console.log('字母',res.data.body.brandDetail.brandName)
    });
  
    
  },
  destoryed(){
      window.removeEventListener('scroll',this.haha)
  },
  components:{
    navMenu
  }
};
</script>
<style scoped lang="scss">
.headernav {
  width: 100%;
  height: 0.43rem;
  display: flex;
  position: fixed;
  z-index: 1;
  top:0;
  

  p {
    text-align: center;
    line-height: 0.43rem;
    color:#fff;
  }
  p:nth-of-type(1) {
    width: 0.51rem;
    height: 100%;
    position: absolute;
    left: 0;
  }
  p:nth-of-type(2) {
    width: 2.65rem;
    height: 100%;
    position: absolute;
    text-align:center;
    left:50%;
    transform: translateX(-50%);
  }
  .menu {
    width: 0.51rem;
    height: 100%;
    position: absolute;
    right: 0;
    top: .1rem;
  }
 
}
 .color{
    
    background-color:#fff;
    p{
      color:#000;
    }
  }
</style>