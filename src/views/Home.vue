<template>
    <div>
            <Homeswiper :datalist="datalist"></Homeswiper>
            <Homenewpin :Homenewpin="newlist"></Homenewpin>
            <newEvent :newevent="eventlist"></newEvent>
            <footerbox></footerbox>
    </div>
    
   
</template>


<script>
import axios from 'axios'
import Homeswiper from './Home/Homeswiper'
import Homenewpin from './Home/Homenewpin'
import newEvent from './Home/newEvent'
import footerbox from '@/components/footerbox'
export default {
    
    data(){
        return{
            //data:"",
            datalist:[],
            newlist:[],
            newevent:[],
            eventlist:[],
        }
    },

    components:{
        
        Homeswiper,
        newEvent,
        Homenewpin,
        footerbox,
    },
    mounted(){
        axios('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5&credential=485461278f8fd06c90fe972a4e2bd50e0c1fcd42699bdeee9ca28ebbc12097bd44a7abedc40524ce32727aff716b8b65e0edc68f1333da5074a785a18f6d91049ae1f379250d1ef75a68a0af97b4c8fe94095bdede12065bd727a2632fca8582aea6aafa05342dc1a1c934a08758ba692402a39f03082269e7c720916bd3db8ef69f5b9e1da8e6d8cab54c8e033aee58')
        .then(res=>{
            this.datalist = res.data.banners
            //console.log(this.datalist)
        })
        axios('http://www.mei.com/appapi/ninenew/operational/v1?credential=485461278f8fd06c90fe972a4e2bd50e0c1fcd42699bdeee9ca28ebbc12097bd44a7abedc40524ce32727aff716b8b65e0edc68f1333da5074a785a18f6d91049ae1f379250d1ef75a68a0af97b4c8fe94095bdede12065bd727a2632fca8582aea6aafa05342dc1a1c934a08758ba692402a39f03082269e7c720916bd3db8ef69f5b9e1da8e6d8cab54c8e033aee58')
        .then(res=>{
            this.newlist = res.data.show2
            console.log(this.newlist)
        })
        axios('http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1568104581522&summary=ab7ed90ee72934e192b90076ac183b16&platform_code=H5')
        .then(res=>{
            this.newevent = res.data.lists
           //console.log(this.newevent)
        })
         axios('http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1568166450670&summary=a1b788e954838fd3af3ee6fbdbf997f0&platform_code=H5')
        .then(res=>{
            this. eventlist = res.data.lists
            //console.log(this. eventlist)
            
        })
    }
}
</script>


