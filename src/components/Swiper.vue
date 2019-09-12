<template>
  <div class="swiper-container" :class="myname">
              <div class="swiper-wrapper">
                <slot></slot>
              </div>
              <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper' // 模块化引入swiper
import 'swiper/dist/css/swiper.css' // 模块化引入css
export default {
  mounted () {
    var { loop, pagination, slideperview, freeMode } = this.options
    new Swiper('.' + this.myname, {
     // slidesPerView: slideperview,
      //spaceBetween: 40,
      //freeMode: freeMode,
      // 如果需要分页器
      autoplay:true,
      pagination: pagination ? {
        el: '.swiper-pagination'
      } : {},
        loop: loop // 循环模式选项
    })
  },
  props: ['myname', 'options']
}
</script>
<style scoped lang="scss">

  .swiper-wrapper{
    img{
      width:100%;
    }
  }
  .swiper-pagination{
    text-align:center;
    margin-bottom:.25rem;
  }
</style>
