<template>
    <div>
         <manbanner></manbanner>
         <manlist :datalist="datalist"></manlist>
         <footerbox></footerbox>
    </div>
</template>

<script>
import axios from 'axios'
import manbanner from '@/views/man/judybanner'
import manlist from '@/views/man/judylist'
import footerbox from '@/components/footerbox'
export default {
    data(){
        return{
            datalist:[],
        }
    },
      components:{
        manbanner,
        manlist,
        footerbox,
    },
     mounted(){
  
           axios('http://www.mei.com/appapi/silo/eventForH5?categoryId=men&pageIndex=1&timestamp=1568199518917&summary=304218fdac48402c76d91f3a91b6115b&platform_code=H5')
         .then(res=>{
             this. datalist = res.data.eventList
         })
     }
     }
</script>



