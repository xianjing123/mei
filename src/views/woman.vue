
<template>
    <div>
    <womanbanner></womanbanner>
    <womanlist :datalist="datalist"></womanlist>
    <footerbox></footerbox>
    </div>
</template>
<script>
import axios from 'axios'
import footerbox from '@/components/footerbox'
import womanbanner from '@/views/woman/judybanner'
import womanlist from '@/views/woman/judylist'
export default {
    data(){
        return{
           datalist:[],
        }
    },

    components:{
       footerbox,
       womanbanner,
       womanlist,
    },
    
    mounted(){
        axios('http://www.mei.com/appapi/silo/eventForH5?categoryId=women&pageIndex=1&timestamp=1568194860785&summary=48c471be94d24499da8ca1690912ffb6&platform_code=H5')
        .then(res=>{
            this.datalist = res.data.eventList
            console.log(this.datalist)
        })
    }
}
</script>
