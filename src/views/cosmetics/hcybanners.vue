<template>
    <div>
        
         <div class="banners">
                 <img :src="banners.main_image" alt="" @click="bannerClick(banners.id)">
            <div class="bannerContent">
               <h2>{{banners.main_title}}</h2>
                <p>{{banners.sub_title}}</p>
                <p>{{banners.description}}</p>
            </div>
            
    </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            banners:[]
        }
    },
    methods:{
        bannerClick(date){
            // console.log(date)
        }
    },
    mounted(){
        console.log('aaa')
        axios({
            url:"http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000003&platform_code=PLATEFORM_H5"
        }).then(res=>{
            var bannersObj=res.data.banners[0]
            // console.log(res.data.banners[0])
            this.banners=bannersObj
        })
    }
}
</script>
<style scoped lang="scss">
    .banners{
        width:100%;
        height:4.5rem;
        position:relative;
        img{
            width:100%;
            position:absolute;
            z-index:-1;
        }
            .bannerContent{
                width:100%;
                // background-color:pink;
                text-align:center;
                position:absolute;
                left:0;
                bottom:.6rem;
                
                h2{
                    font-size:0.25rem;
                    line-height: 0.3rem;
                    font-weight:bold;
                    color:honeydew;
                }
                p{
                    font-size:.16rem;
                    // margin-bottom:0.05rem;
                    line-height: 0.2rem;
                    color:honeydew
                }

            }
        }
    
</style>

