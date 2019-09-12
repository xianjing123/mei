<template>
    <div>
         <judybanner :bannerlist="bannerlist"></judybanner>
         <judylist :datalist="datalist"></judylist>
         <footerbox></footerbox>
    </div>
</template>

<script>
import axios from 'axios'
import footerbox from '@/components/footerbox'
import judylist from '@/views/crossborder/judylist'
import judybanner from '@/views/crossborder/judybanner'
export default {
    data(){
        return{
            bannerlist:[],
            eventlist:[],
            datalist:[],
        }
    },
      components:{
        judybanner,
        judylist,
        footerbox
    },
    mounted(){
         axios('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000011&platform_code=PLATEFORM_H5')
        .then(res=>{
            this.bannerlist = res.data.banners
            console.log(this.bannerlist)
        })
          axios('http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1568198845745&summary=b7162136506916b32e18c12abc503327&platform_code=H5')
        .then(res=>{
            this. datalist = res.data.eventList
            //console.log(this. datalist)
        })
    }
}
</script>

