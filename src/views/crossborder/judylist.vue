<template>
    <div>
          <ul class="newEvent" v-for="data in datalist" :key="data.categoryId" v-detail="data">
          <li >
            <img :src="data.imageUrl" />
            <div class="title ">
                <div class="haiwai">海外直发</div>
                <p>{{data.englishName}}</p>
                <span>{{data.chineseName}}</span>
                <span>{{data.discountText}}</span>
            </div>
         </li>
      </ul>
    </div>
</template>
<script>
import '@/js/toDetail'
export default {
    props:["datalist"]
}
</script>

<style lang="scss" scoped>
.newEvent{
    width: 3.45rem;
    margin: 0 auto;
    li{
       position: relative;
       margin-bottom: .06rem;
        img{
            width: 3.45rem;
            height: 2.07rem;
           
        }
        .title{
            position: absolute;
            z-index: 100;
            color: white;
            left: .1rem;
            bottom: .1rem;
            .haiwai{
                font-size: .12rem;
                color: black;
                line-height: .14rem;
                background-color: beige;
                width: .51rem;
                height: .14rem;
            }
            p{
                font-size: .16rem;
                text-transform:Uppercase ;
                margin-bottom: .02rem;
            }
            span{
                font-size: .14rem;
                display: block;
                font-family: 黑体;
                line-height: .2rem;
            }
        }
    }
}
</style>