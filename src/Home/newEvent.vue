<template>
    <div>
        
        <ul discountText v-for="(data,index) in newevent" :key="index" class="newEvent">

            <div class="taday">{{data.name}}</div>
        <li v-for="event in data.events" :key="event.eventId" >
            <img :src="event.imageUrl" />
            <div class="title ">
                <p>{{event.englishName}}</p>
                <span>{{event.chineseName}}</span>
                <span>{{event.discountText}}</span>
            </div>
            
        </li>
    </ul>
    </div>
</template>

<script>
export default {
    props:["newevent"],
   data(){
       return{
          
       }
   },
}
</script>

<style lang="scss" scoped>
.l {
  float: left;
}
.r {
  float: right;
}
.clear:after {
  content: "";
  display: block;
  clear: both;
}
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