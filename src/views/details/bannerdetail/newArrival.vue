<template>
    <div>
        <div class="newArrival">
        <h2><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAAoCAYAAAAYEYTzAAAABGdBTUEAALGPC/xhBQAAE61JREFUeAHtnAm0llW5xwFHnNJExVQ4kAk4a46ZgBCaaF4VDEVTQdO0zOsEZZcyNK9DuFYr0ZumIpkmlVJSmIkioLBcihMKDgHqUiTECQQM0fv/HfZzfNjt9/2G832H78T3X+v/7WfY07vfvZ+993tYtG2Tja3k6u/ccyVPd3qp4iUqsGEo9J7S0aVWUOX8+6r+ga6NyZIfcHpLiOupkfOihn4lfXlkq7Z6qBo4QNxV7CHeLtKPamIDVb6ymg3U627eCOyt4p86jm1edW2WuLoILs3B1io8RTymxEp+pPzjxGFiX3FT0TBEgn/eK83RgunGUR/ozzYt2L41RVDyY/Gi9LbmrFDK5tBHvEZ8NrCd0nLBnNhO/FxOBVuGPOSztqwctiwyT3h+75e6BqjP/O3X8KxW6FeeP1GktkylBISN1HUGLY9L5bdJNr9AXupht0yho4yzROpaJX5PLAbUt0C0PpB2dwXrAeGzwVhfoo2xjdcRn7lLltj9dxT3F78r3if6+WBtDJW9XFh/31UFnTIqmSC7tbVTyGPlzJ5KRyovAeGfrvwOobwlPZ1vlBld+rjzcwKrSfDiy8FpKsQCmyfOEH8tDhaLRWdlZELk4Vg5/5TIcK9suwU7UfmXYheRK8knYhY4ERBMDHMkwHUZXAu3yBiA62S/xfnOl5w3XrzPxeJB4nfE7R3ZhVlQhcDCu0tcXihjjp9TwB3iYSIbRqVAoHhIHBQqPFDpPUEm6ZMhY+bkxwYLGCfWTE3CAgLR7nhxQCAvNg8/lLNbyNA1L2MVfKerzvvFBtFwoYSO4rfErKBwsmUO6fhIXxfVn+ihWejF4Ehlmp+Tcax8p4l7hDQna9L1jqwslAZxttgcsANfKl5eYiWcNhclyrwQbA8qtYBA4PMBgQ3HsJcEgqCto30kc0oCU8SVjVIN/lhA4GX2Cf3bU+nDBfraKfg/Vvp6gbyVdnOfPVicKFrUpQ1OKCvEM0WiuccmUgh4HgTBHznDl52MeIjo/ZG7zQQZnomNdb3oEfhQOaeLk0QW2kwxK5jLVTJ+rBLUSxvFgnf6ak5m+mrghGDgiuv1ttJ7i38UAcHDQJ9qFhYQpqmHxQaEDsprH01ek0xQuEwcLeaBgbByCyQPzMss35wc/1vy9RQZ8H4u31DJTLTvOxviyeJmkY3TRB6oH2bhTTnqASFrdD6z8x6nivMc50teKFYLy1Uxc+23IpvGB2IlwDPMFbuK+4msH+b/V0VOAGxEbFjdRdZTqw4I6n8jOO7kobNzMjjg5cBGJeNnlbOzkz/m9HLEJSp0lEhUP9xVcJ7kp8Vbg41AMDLI9WTNEZgitd2apoIaux8TPwYfzVIYI+PVKUeVbPSNa9BNYhfxBvEUEdD3PHxFzp0TGZirBBnAxnaWyKlzd5G5xuIHT4p/FplvZpPYdEIgCD6HoVZBhAMcq1iw64lcGfLQzTn/4WSO5Hn3USK2YXsJj5iSSI+T7Z2EPTatlGGASF37BudEpXcGmYS7ZEen18XPRuAeiRB8XjxJPF28SJwipsA9mwXGGN8tMslrDTerQ0eKzCNOh8wJTguF4OeNz7uLFDY9YAEB+SDRB4S/SYcEBE4JXxAJUJ1EMGl1Uru/FhCWqovPiwQDvuATGLJAFDU8aoLSHcSeTs8TNy6Qd8O8wpGPvvcXCWo8w0DxIxE0iBcgONwo+S9ON7GfBB/Qfi/9dnMm0v+k68KBej4CgI07iygrIDC+5IfXiUz8V8Raw7fVIf5xFfOSU8JjYiXwsCphkbcVCQi/E20zIhg8IS4Wtxb7iMxPA8Gk1WCMesqDwh4idy/TSceKYKaI/om4nWjgqO7zN0cuZ0cnCtuEtj6Ni/r0mvT25ozSIVHeKyN/S6gEynjctmmBhtupDXZAa/sdyfFY0g368rFo+VLXBBai+UmHiy2BWWqE9piXhr4S0LETEFiw1redJAMrh71zo6Xwj62B2cr6XyJl3xdtg70r2G5VelWQyWNtSqxN2APQO44+p4Vu7qV0TpB9wn18z2Agvz8uTpEe78Yha2NytX5tkjHhLvfOSP4g0otRWewx5snABLbnZHIujzPV9cZFc53GgZ0UbCVy6hqP4nCsZH96vNH5alHkiP5z8RLxYNEHC6llg51+H5HrM1dW8JDIXAMEnhPFPuJ8Ebwkvt4otZKfXuonUQyOEPd2OraxIsegm8R/iqXuoEtUxuqfK7mlwIvjYw87BMe8LKzLJwTGhJMT79XeEVemGPfLYH6Ceuq0VUsnBPrPJsT7t35bart1OSeEw119q4L8HaUG+3ZAW+Yfbc5aTm3npI9PiWeJD4uviASEGNyNyHOOuElwEnkPDXJewosxbClhmCk56Tj55uf4i3HxXNwltxV5Qa0Nf1eHbecpte/3qcBPcwpdL18752eR2xXlaMl2YrAs7HiG9ySMMkUpZf/H6Sb2klDquE9VmelWQTPTf6n8YHGmaHM2q8oz5Hg34Zwhm+/PNOkfiRuJNn4ES8ObEp4T9xDN/6A5azn1AYFj+s1Fdpaox44P+oqXN0rF/3Ak5QpRCM8ow3yXaXfJvIQ8LJCTF2I4RcIxpuSkDZHvOOk7R7ZYXSrD0NhYYZ3rW7lgUubhbDn9HPB5+Z5B4M9CFzm8/zXpqYBwpOywFIxQ5umlFCiQ90X5/1vkdJsH2k2B+e37syzovUPml5TOD7IlXBsICICrChttzcMmA/efzlFvN4p0Fsg/Itt5kV5t9V41UGiR8vJ+7DrCgjrB6cWK3ZUR5oFdstoBIa/9uq/4EWCzIzAxjysBdvzeoSIWfwxsFwfjk0qZKzUPCwg7qaddC/SWD4rQA32hyE5eDZTzcbEa/ajXWfsjwOmxEI5PZCimXKJYm5/JCLNAwMj7ZpVVbq3aLSA0pxNE3mKvGs1pZ10t+yU9+NtlPjz35zzY94KsPNyduzkni+cNp3uRY3EKd8s4IXIcK32As42RPMnpTzu5LrbgCFhAeFZt8lHIo6OUTs6wWHJ8ZfBlyEuZSoA7WeqI9QvZPx81QLtnRDavXiPlFm8IMn+CPN3Z2T1mB/2bSv3HuAulTww+n6zySpXk91Vvaiwq0VyheuPnK6cvT6mjd0Sd5fuDDwiPJ/JERepqS4yABQT/cqzdByT4gPBX6aeaM5GeLxsLpxLgI+B9iYr4Kh7jKzLkBYRF8sMYm0eGadIt34LIx0fKOZGtrtZH4D9uBCwgxA+2jwz9IuMR0nuItotG7lansksZlkuwYGC2dSHdTA+5Q86Dxh+Wv6i8m2bknyd7oStKRtG6uVZGICsgDE90cFvZHhJ7iRzpWzM2UOf93fjV1vwwzeh7X5UdX0L5yTl5d5PvBbFtlOfTSK+rNTwC7RJ9468NAxN2THwjICiwUxTCfsrAP0YqhlcVqqzC/kNUn9/pnqhw/etydVtGD/9upNfVGh6B1AnhIvV3vUSfP5BtC5EjJn9S4e4e37VlasLHklY2aflC/PEqP3fzvf2jKh6O9Lpa/gh0iIqW+xeSqJqSVfph83iFZD6IxuBKFAcw8jBv/QdzbIbmluF6ukzc2ipUynX1E6ebyL+stG9dWX0q5jmpj/ZsvWe115SBAmAXcUijtPq/I9s4yCR85MO/v9ggThR7igSKFC6VsdjJcGCqgirZ+FPbt6O6Sw0Ie6t8Z5F/fMJka614Xh0fltP5i+Xjqmj4mYTUwsLPv0cBfqKjM/laGizyN0ROp2C2uGujtObPN6T+fk1Tk7ZEEuPD6fVPTdY2bZpbZozq4gM811SCC+gtPoIQ4Vrp5wbbTUrPjvzFPifFqH+3UL5BKe3nor28z4rc+eCvnIw+VtxXZOe3PJMk26CPcnbzl5sy6MWCk4pvZ2SBgrdH+flbewwChq9zUJThvOAnGN4pMnaVAAHYt4tMAFtbYEH4/uxYREdYPL5M90SZEVGecxJ5mmM6I6qf/hDEYwyUwfc1S77SFWxumdtCXeNd21e7+r043+Xp6x1BLvY5yT5LtOfrHMr/W9LOWUZL3iPo7OxjguyTmVJucIY+kr/n9FoXf6gOnhp10r/syJWpcm0Cm4vHix+htHJcp/7zLg8QbedKPdL+MrKg2XE4McToGhnWxgnhxNCHxa4vJzk5JU6QkZMqPEG8VzQMl7CnKS4tp4wVH2eC0qOcbCK7uS1cxnCyOVxaznO64v8u2p1iiFzQcL2E5aZE6U+kDxY5GnIsu1VM4VoZ30w5Erb+svVL2CtlIvBdJjKRPaZJ4SpUKnhZhnkSUvc/87eGlF38AtfReyQPcLoXr5ByeDB0U8p84NQIOOH0aJRW/zCR/aJ0rqqJHVXzYaH2W5QeLXJdGCT+QPxUTIFN8PHgIP2D+LS4l8j86SVygvYop4yVZ96tEBkz5lNn8VXRwJow/FHCKlNCWu5zRtWsqRIQ9hA5HRgIBOhZx0O+GjMJCBpnie+JKfxWxmdSjoStg2zVCgg7qe6bxSOidt+S/k0xa4L47NRhYHL1NkXpLCe3VvGYqOMTIt2rLBQLCNtJPkq0Oza7qH3Ik9j434mRtiTY3a0PHMsJVrwzFhzXy0fFYnG/MhIQwPark4K/xZZZopomiseFGgkANwaZhHE1jDPBpZV8zqZqCQjfF/0d+JfSiXxZAUGuNv8nbir+FSUDh8puR+uMLE3mnZukyglEdQLXJaJ/PlogiHHUX4CSAN8GPK6Vco64oRiPyxM+YyuVfUDgtJMXEFhkTFxbdNxjLSDsI9ljbYyNXQ0I+DNEAsKloVP4SgkIR4dyJFOdnCeWUoaFbgGBAGAB4XOSDwmNLFQ6Jcg+qeRzNtVLQLhTPDNYOLKMDHJewvHlmrwM8hFYqg0W/dejRjYPOhOboBUHA56RaPyCmIUn5aA89Ru6mhClD0R6a1M5nR3sOj1d8iKnxyK+R8Q+wcH4byVycozfRUsHhAb1wZ6FIMXpjz68IbI5saueLzJ/YxDoWZQAeZC4G4qwTOSZY5RTxtdB4F0uMkcZz43FFSInMNYmSF0XGmQv9zmpMxdt5X1ZZPB8dNs72LDDsWIeRslpeZubfiOvoeDbROnfEm2yI5wU8rRTyinG+nOP5O2Cr1ByrStn5eM074RUqP6UnwkRt7FNKmMFbedGbQ5zdT8f+VgAgNOS7+ep0tnVmMxmJ6BmjfUIl4/81FcJ/ECVWPs+OI12drvu0N5AZ7dyccop8iAyBzS3zG1WUUj/oNTaPDLYxjhbr2DzSanPSdlZorXT2VfmZaIQmW4WDxCJWJXCZFX0fpGV9VC+XYrMS7aNRBZjarA4yv5G3FC8XSQ43C1eL5byfJco/zTxayILgcAJlomvixw9+TDUmsEYDY8e4M+RnlLvlZHxJOCCASLjw3sxPCJhoSktlNpGQHMEqRNDu18MKQl5Uqc65iqLHzAX7dm4Ws7AmEA5ZeJqxsnA+AFOKPeLFszekjxVjNGc54zrSursQhypPJp7QtjLV1ZAvkJ+i16khU4It0T5KfN2wkZA2FZsabRXg5uVwQ4q48cBuUsZ9aTa5kQV4xwZfHuPRRmyTghkY8FT9hVxmDgl6FbfUOlZqMYJYVc1Zm3npXw/ssA10JW5zXWWeWN1/NrZEStZhvo2FT8UaW+uuH+Q0VPX7nKeU1UVf0Ig8yJ+1iI4bhaLM5QxnmyXy3aZ2E/kzsUgA3aJU8TpIpGXAX9TZCdgp/9Y5D5pqU2CT2QD7BJwfUd2VRYXbRhnSqZewyQJB5vSzJQ+VwKvqJIvuYpYFPaxzcxXmRDSDSLdqz+VslKcJh4lXi0aVkjgKNySsNMAbU4U50WNHya9h8hc6y9yyskC82mwyHs/Xfy5OEfMQzllqI9g8BfxBLGLeLFoGGeCSyv5nK7awmI1Twi7q/khIicBjj9viLYYSfuIKXSSkb8A+LycFjyIsAtFn6facnffAcnstNVus9T6+U7k8V0pvo7npBMAdhIJgiwg70f+ghhjPRlmiT7vXXGmSB8R5T838pej8nz0gWDeMVHB0OAnjy20rN2e4swreyYf3CpdhrZ8ndYma4L3EKOc56QO/45GSr8gwQbZMlHNgLCfWrUHT6VMyhTY/X3+l6SzS8foKgO7ts9bLZl7XozWEBB4v0+KNi4nS2YCvityYjK7pStkY/HH2EYGTkeW71+Su8WZIj0OCFxdmgM/nx7NqIh+2nNxOtxM9Avxtqhcg3SexZ6LjQZUugx1biIuFa0t0l+IMcp9TuqZJfr6U/LXORKtDbBYF4tbJxq/T7bXE3ZMV4hfFe27wJmSPxRjcMz+sshR9iLxAJFBrwamJiolilervURzRZlei3I9LZ1xuVA8TbxbZHdlQTFuMSbLsCo2Sl8kHi5OEbcSbxBfFFsS/iPb+IyG6SfP1lNsLx4rEuSyMF+OW8WzQ4b/Vfq1IGcl8+UotQx1LRMniINQAuwUYzppuc95h68kT26b42QHecr5fyP5VKfH4igZmFwGyj9jSiL9nWx+AN6WzgngUvEdMQu7yPF3kQn4raxMkZ2dj/tZD7GDuIW4ucgusX4gu5+R/LAY0GfurK0ZG6jzK8MDDFcaf0uYLdvR4tyQJ5UcJCOTmPee9/4oywlhJELAuUpvNKWerr0RyAsIfHzxEfFV6U/kdLWrfDs4P6eA1O5tWYjSEHA0W9ooFfezo7IxgRcWl72eq4QR2Fl5B4f8LOyXxQfF1OkgZGtKmDPvN2nZwp5yETgMMyS8ZEo9XXsj8P89pe51wnvAAQAAAABJRU5ErkJggg==" alt=""></h2>
        <div class="newArrivalConnent">
            <ul>
                <li v-for="(data,index) in datalist" :key="index">
                    <img :src="data.fileUrl" alt="">
                    <div class="price">
                        <span>￥{{data.price}}</span>
                        <span>￥{{data.marketPrice}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            datalist:[]
        }

    },
        mounted(){
            axios(`http://www.mei.com/appapi/brand/product/hotNew/v3?logoId=${this.$route.params.id}`).then(res=>{
                console.log(res.data.body.newProductTop10)
                this.datalist=res.data.body.newProductTop10
            })
        }
}
</script>
<style lang="scss" scopend>
html { overflow-y: scroll; }
    .newArrival{
        width:3.6rem;
        height:2.64rem;
        margin:0 0 .3rem .15rem;
    h2{
        width: 100%;
        height:0.22rem;
        margin-bottom:0.2rem;
      
        img{
            width: 1.45rem;
            height:0.22rem;
        }
        // background-size:
    }
    .newArrivalConnent{
        width:100%;
        height:2.25rem;
        overflow-x:hidden;
       
        ul{
            display:flex;
            overflow-x:auto;
            // overflow-style:none;
            // overflow-x:hidden;
            // overflow-x:visible;

            
            li{
                display:flex;
                flex-direction:column;
                flex: 0 0 auto;
                width:1.35rem;
                height:2.1rem;
                margin-right:0.05rem;
                img{
                    width:100%;
                    height:1.8rem;
                    // margin-bottom:0.15rem;

                }
                .price{
                    width:100%;
                    line-height:0.29rem;
                    text-align:center;
                    span:nth-of-type(1){
                        color:#111;
                        
                    }
                    span:nth-of-type(2){
                        margin-left:0.1rem;
                        text-decoration:line-through;
                        color:#ccc;
                    }
                }


            }
        }
    }
    }
    // .newArrival{
    //     width:
    // }

</style>