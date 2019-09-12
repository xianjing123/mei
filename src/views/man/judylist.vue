<template>
    <div>
          <ul class="newEvent" v-for="data in datalist" :key="data.categoryId">
          <li >
              
            <img :src="data.imageUrl" />
            <div class="title ">
                <p>{{data.englishName}}</p>
                <span>{{data.chineseName}}</span>
                <span>{{data.discountText}}</span>
            </div>
         </li>
      </ul>
    </div>
</template>
<script>
export default {
     props:["datalist"],
     data(){
         return{
              
         }
     },
     
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