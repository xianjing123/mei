<template>
  <div>
    <div class="goodrecommend">
      <h2>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATAAAAAoCAYAAAB5CaaxAAAABGdBTUEAALGPC/xhBQAAF6dJREFUeAHtnAm4ntO1x5MgxDyUkJCRiCk1BI8hmoih5jEE1QYVV2quR0qI1FAzVwxBm5woNYS0GoJrqENdbQ1pEYrIfJHEFENCRvf3P+fdus7KO37fd5JDvvU8/2+vce/97nfvtfd+T2jeLJ0GYt4LzIownHI8aOrUig7+BNwD5sR0ti269kY/Bf59IzcGezSVbmQqvg9+hpGT2N4YXgUfxTg0R9cNbAdGgsag1aj0WFPx1/B3GTmNPR7jKsYh6X0YlypbHYHKjcCTVPWNwU6Vq7rRatKifjDq88eUQ8B6wNJ5CPa5zrbGFP5wbFcDtVGUXiDAtplnLHc1MdPgh5lGa+C1sYQ6OxlbJdlNTBtqS23mJds/xaqupUUr0tCW4ACwDbCJFDGV1sbaA/QE64IilDd2ZSptHQNtvlXKOQJ6yWmkCRBoMUzW6etX+LQPAWWU04n9TYnxVxJ3RBSryadT5ENAyaxU6krgULB3VMHqlAMivjELnWACafF/FQRKLYD1jdwH/iojL6+sxkmJXjcHjVGgBTAjwKXgvaB05THIl4OOTq/5+Gsw3OmtWDT2IIIfsBVEvNbZZPAm0Jx7ClSphBFYixjtmgHv5KjjZeMf4kopx+Voy7u0QHFTTPsne0fkvCcwJaqrwXzgn0MTvQgVPYG1pHIlXdtud9OgFqi1lTJmqqM2A39z7WgssmKC3Y+b6gq2pFJ9KpUOJnA2sOPi+Y+wd3ENrIQ8KiNO9TwC/Amp1Ngjc7SnNmti2kRVpawR6IGDffkPZgVgX1YJTJPqT66/6vtvQRxlJbANCLoYzAR2DMRrh9Q3oDagCL2As61rp4zgQ53/285fCXuq8/EnBxeyhHisi7f9W1a8+lQKrUOQklPot04uOuVsDU4Ddm5ORG4JAv0SJsQthNfmpPm/KxgM5oFgvwTeUqmxNoE9Q4VHgb5At5hHQWhPpW8TVZWyRuB0HOwgXpwVgN1OEhtblC9ymtiedse7vqo9JRkt8jg6D6XtU/gGtg16XRP0odraA/8i+l1AKVQ0gY2mkdCuSi0kT5rY1qfotfb7lMDs6fthxmUFN1hKcO+b8dJpTbQh+ByEcQx62QL1gtHGJR9d48NGUU6sTWA11OmpH4rQJ83Hzt6hKjdrtmLKIGzrbK85OU78Bco14wwpOn3HUdKwH1mVCLNIfb8AXAh0jLd0H0I/oEmXh3bGSX+wSLq+zMB2PrgTaFI1NmmxHegaucfJEkcCPX9zINoP3FrH5fvRYvwgw1WJYAPjozHVyTQPtcbJbiKzkBdlBKpPpdDhJkjzwrfzKbrDwB6R35dRuT/lGhH/NOWYiLfFMwh/BjoVa54eAv4blBNLeCqNxKokpz9C6Fue+n4tqJIZgUonsH+YuvOwal9HfZu8dJo6KyNYL/VKsHWC3+/Q+wmc4FqnPjrBqIU6DFwPvkjwiVOvitIuXPn4E4F8VpchIv1zj5Acj4K3Vxy1fWrk54vPUKwdKfekvM47RPIoSv9+dO0W0mgTjNOMw8fwbYycxs7CaP/Q0B15elpAiTYloNCnD+FfT6hHz+/HoKvx1cktiWRTAhOFmFBKVzRWMVk0GgfNddHm9UX1145ASGDDUW5qDfDdnFyDHBaYMzXTwimSMEL8jTA/CgLlF0C7zlyjs+xOCFcDG2PtaXwrjHsBXRGENNIkvwk8AOanOSbYdF38YYItqJ8JTFS2p1Si0Ds5PdKFQgv0nCCklEqKSX5vYfOLN6Wq75TJLu4prudKoH485aKx1kZnk9AkGRLI2raIfMqJTWimgXqikboYvspGIxAS2A7IWQuuR8qohStMissSpv5oBjjtz5H9x2rrcjZCXPLStaaFdYz4LSn3jaCrg5JYEilRjQJKXC8mOaFvB3SlejnFpxzTmQRvVU4FFY79kvpuM3XqijcWzACvA52YlYzjNjCNp5JvIJ0yG4P0kT3QKoGJSr2ri5xOojYZJbCFEiLyp+SgV2ltISaU3m7jvM3GeD8v208j9hm933IrhwRWzgBo4iqBFCFd2W51Adcga8Kn0cMY+xqHT+EvBNuDk4xerCbcSLAjyCK1ewaYmeWIfR+gv25OBaPBDeD/QCWoLZUMqURFFaxDY3yqqa8PvDaSQBNhNguCK09zcmOJE6g4bGIdXSOzke+OdKtRHhbxn0SlTqaBOgUmprS2EBNKuVu7D7c2G+P9vGzj0jZ2H7fcyJVIYO8xWkUSmJLXH4Dd0X6PPBBk0WM4aAdrAX4HBoGPwO3AkxLrz8A44Hflr9DZ09jfkfMkL9yabaEfSFc+XdfGAJ/A3kHnSYt8VaPUoptr5AXwQ4H9LhbMGjMlEk/7o7DfCx9EvsM7RfKbCfqiapu8FDsCfFO0kgr7f01900AHoPHTuDwKRJqfx9dxzZr1ogwJLIyHTShKztdHvr44yihCTChlKhprqktkQ7/lUE1gicNU/5fDdbAHaDFrUgbo/h1s68LPMbZa+LykhagEFOpVORYUSaQ6qenKa0kJzNbZ2xiVZDTBnwBnA30vORdY/weQm4Ms0jh8DGzsRllBkV1XFhu3k4vTVdfaLd/a+QbxZBdzbTAUKHX6nFcAtl/ilXiLxGf5dqa+UmgIQaFv/4LXPLWk96u5Fnz6RkbN6w+N/sRIbwslpxD3OXx45+XE6ltvqLPGNgavvg40dp0W1wNVyjECOmGEgVX5hotp4+x+8J17A/FdF6tFbU8lDZwLCLe7em0C02lNVwdLSqT2GcV/AF5OwaSYGOnyUloCW5lKdGrzfQpyYyawP6a0G9pfmuWmeQfU+bVCnmqeRVfbM0EvcBx4HoTneAXe3gD6G5t8dKrUHFGSGQYWgxCrzc9SqbE2gf2DCrW5arO9EWgehvZUDgBVyjkCp+NnB+8mF9fT2S929jTRJ7Cuac4FbGkJLK6aDih1ErDPWQp/VVzlCbq0BDY4oy/VBJYwqE69K7JNYnHvdBY+27o4bXKa5zZRxcUOx2elCsXaBBbXlnSaoxcC9a9KMSMQd3Xby/k97WRdwSxNtkJBXi9oWdAUGtVOeh3wExJVLtI1pUgCS6v0CGfUQlpak1bf/7KoLQ7+yqtTwvSswBLsc0qICSHaJLYBei8Hgo1BIF3DHgS/Av57osZbG/dD4DLQDYSbgT4/jAdDgK6gnsqJ9XVJVt9061Gbt0QlRZXiRsAnMB2rexpHvZxnjSy2i5PLSWCuqqUqasd9FBwAOgJ/zUS1BGlx6aqpI/9zQLtkJegRKtGiEd0DlCw2lRDRq5R6F57CIgv6/4I5NgimvAN+iJEte7UVYnh95/lfp/838o/AXKdvCqK+UZ0aYW3KzkCJVievLNJmLWjz0PirnAAWgSwqGqtk2jyr0qo9fQR8AtPCWdOEjIP3u1VSAlMSyHoh/rTTLiNmJnYljSwagIN20ED6sJyHJuI0NI9jI/po05gR1f8mZX+g052lpCuk9RGvJByXiO079TFpckuMfwJbGCedmo8BTTF5mW7WsbP5fcUrc8jaLPRNshQqJ7aU9pbrGJ/A9nWjMcbJEu0Vcj7y+5HPW5Sa8EWoNsP5cOxaQGmkJHhpmkOFbfrY+kkF6lSiOQ2cAz4Eujb0AXkSNm6NTtqMaoBOWpbOQ9CJUHQJUJ/LpWepQKfHKlVHoNAI+AR2mIv2yUPfQnS0DjQJRjvOsqR1afynS7EDg2irEgnsMepZOeq3rjd7gXASi9TfFrrGLPxW+g+j692G/xHr+qVTq6c4nffx8mUo/HVUV92hxlFtdzVyqazmUZWqI1B4BGwC60R0N1ODFo0+JFrSbmuviQ9bY5WPHQGN19ZgPWcNySuok5KX7D1AXBI6Gb2+bwXSiencIJRRqt4LXPwHyCc4XVWsjsAyHQGbwA51PfGnL5n7Op/7jfwUvP/GZcx17O78tjLK5+G/MrJn83x49THfoIg7rXi/vHLWM8XVow/HvcGeoBfYAKTR62nGpWzTtfaGmDb7ofvI6fUN8QWnSxN1bf6hc5iCPNjpqmJ1BAqPwF+J0OIP0LcZSx0Qgk3lu9aYk1eMraNjzrg0t21dnaV8tE2rX9+nbJ83TnPGpium9U/i9a3rNrAl8KTTr41L+oivk5L1u9ZXVEBWcrnH1WfrXqtAXXGuB6Oc6urXCV7X4CpVR6CkEQgnsFWJ7u5quA5ZH+zPBvqL09HA0igrfId4nTR3BzrdCX8B00Cl6KWcFf0YP20aTYH0nkeDrRqhM22p8xZwiKl7Afz54HqgJFkJ0hU9zGdbn/4SGffvDXWFX9s6JvBxV3e5qi19/2sH9A1Pm/NCkIfU7jZgBfAaSPqm6vuozXQxSCI7BrrZfA4qUYfas3VLjqMvUWpjtm3q1L4oxlnjpzpFSX2tt9Y/h3xSaUesk4HddcW/CbYF45xNuqKkl2zrXxYnsBGuD/tkPIQmje3zxhn+q2HXArUx05E/dbqdkJPIn8CuwXFIDMags+3oOhfnty/6JOqDQRPd1hPHl3IC24N6P3N1T0beGVSa9L02rt9aPFOAkqi9yh+JHOfvdS3ws7QJwligpGh9tcCuAmuCJNI/P1Gys3HitYGeBDz5Ph7hHYysZ7N90uleVIk6VE/S+NpnuUSOkG1Tm1QcdUcZYodHDjYu2FTqHSp3aL7vBRJJx/mHgA0WbwdG8tugFGoKCayWjtvn65DxIEUTmKpTInkDXA52BM2BdLbdIgnMxpXCx00i7YDSx9WnZPuBs5WSwAa4Ol5E1umjMSjPAtO7bBM1nrRY/HjYBHYQsbOB97Gyrsk2Uao5fUcdBaxfHP8IPvYbse/jE9iT6DwMts6kBFZKHWozz/jGJTCdGOM20O6mv1kJzD6X+BpQN06axJY0cQ8F54IrgY64opb1xbe/ehnfVdKxP9DXMNr9Kk26HupU05RJiypuNxuHvg8YCTYEnnqg0OTLQ7s5J02+E5zOi0+i0GIphw4heAbQM+4NdLrRyfkHYCg4EliqRRhmFYbXAhRpcx8BQiJ/Fl4bgDbzrcAQoGthO3A/2BPoeUVnAI2pSKcJndQej3i9g0FAa+wAcD4YDOJIvp3AJGfUBnmy0yWJlahDf+jRZuDpTa9AVt9Ggm4gLgZ1LNWi1TtpATqAPcB+QNQPTAdJ44Sp/j8pmkmpl+CRdpRVbBIt6xPYlnTMPsu/kjpq9Bp0G6OFUAo1tROYnmEzYK94tyOvLAP0HLDPHRbuNU5vfSrB512I6qMlJb3QfntrgNemHGzhL6lKYkFX4/zjxBuNv5LsSs5JJ7u5xmf7yK5NQJtZaOvgSG+LXgiLIx9dRTtGRtvHEH9FZLNFb4RgD+VtFaxDVaWNb9TUt0Vcvx/51lrPdKcIfY07gdU4f4n9QIj5Gr6zslsS1WLYBcyPcbgLXd8YfVNX7e06+KyTm6q4Dx3bIQaXuw7fHeOjuOucXxAnwJwI5oDjwSlgHvi+kRKOEoRIJ6lWdVyxH7tpX0DoAhf+PvINQAtL6AlE+4M16rj6/85yTMTb4hmEP0eKVSh1gvSkw4ToBOCTp96bKPjUS0v+Bns5dSxZa7pGCVl0ANDJrRwaSfDYqAJttIelJTD5DQQ62nrSBLgXXAmy6vCxy1LWYrX0tBWaMP8afRsXg6muz5qgcX7vOT8rjkboBJT8vq+0Hw8W5unL8GFRhefdCEanGI+tIofVKdtG/CeUL0W8Lwah0NoQro+MXaNSxcOG96y12Zjgd0fEtKa0CU7f23TCFAWfemnJ32Avpw7VuivwYyVZz+3pZhQTIqVO71tHfPOoLFpovgbafMXAxZTK0v1j9FalBLc5OAZo12nKpEnczXRwPnytkZdndlaBh1eiS1rAvpp9UJxklLXww4wcxyrBlEt7UoGeSfNbvOZnoMcCY8p94QVP96A4DnQxhsmGz8PaZDQpJcDatojxexGdNiddTU8BDwJROE0tgNdV7CIpE6gSdahqjUscaZxCsgr2L2GOBS+AVcC9YEdQKk00gV2SEth2ON1qHMVOA78GtwB1JJCyvyaFdgXd9Zc2LaTB2abRuD6shX2o8RGrlyDfVcGTQB8gHwJPAXuNOgvZPu+nyMszvcrDC3loPZxsAtPiH5UnsEyfEQnxv0Xvr90Jrg3Ui4y0guHzsJqfgdJirc3GhFiVSv56ht6gM1DSOxmI/ghm1nHpP5WoI72FJa3alAaDK4BOYDqJ/R6UQvb6PC8ugelIqmOaXbQLkI8GfwfvgDFgHRCoJ4w694ugWIrleNqyffFNr41CyWpTZ7ghkn9DqSOx8HOgHeNxoGSm+/YfQJW+WyOgXVpzdl2g+Sx6AvSv45b8GYlKJ5kk0pzXx+PmoGOSU4L+LaPvZHjPWpuNsX46vVwLtCErcWmzVSIT3VZfZP5Woo4OtDI1s6WGDlcj7gN6gdPAx6AUsuP0tk9gm1OjTlP+JQ1Ep+Qleh70AJoQbYDo32BQHZf80xxT62RzxS3K1H2Bsr1v9w50r4HdwRnA0uoIR0bQTlgLlMTuB1+BUmnlUgOJ0zPMjYn3V4298UmayLOwaRdcHkgnFC2wzYDm5gpAC0eTX6eWoqT3Ph20A0oePUEt8DQQxemR8krKm4FNRn2Qr4/svjjKKGyMUdf9seUuFEoAJ4Dw/vWMtcAeOhBjaQ7acuuIrThDuRj7T4HWnQ4cF4FS6HgT9Lbh6/6dxScotNNY6GgaRzrRTAMzQAeQRcq+tl7xG2YFFbRvhP9BoAbEPYvafBGEZNIW/pdAydn3zcvaMbT7dQZZpOfS9alF5Lgb5SJg6+we2eKKCc7XxpXKq84i9BzOti0t3KJ0PgG2jhFFKyjgP9601d7E1Rj93UavTSr0TT5ZdBkOwf8F+NVcgDbzL43P9pFdi/VDoz8x0ttCiS3U/Tm85rHI9vHAelXdvzkLvqE8M7IpgQXdbZGuEnWoqvGm7vZR3UmFbXOwczrC1BP6OjzysXE1Lq45sjaIEKP1vd6KkdOxlApoGcmh0KSPG3DZ3wV7AC3UKSDQFTDaHRYbqNFNgKUFCDoVFKXuBLQD6wNdD1qDrqAbkC6N7sXYH8yLnN6jvC5Ce0pNJO2EOwJP66JQsjsH/A+4FYwFek5PZ6M4D8g2F+hU52mqV3yHZZ0EjgOaVLPB10AJT2NtSSfapU2X0qD6thLQPNdV5jVgaUsEvbM4uiFSal73A23BLkBJ7BYwGfwYaN6EpFYL/08g+hQMArdLgLRYdfLXHNKm1hucAgJdAvNBEGLKN9D9FfSIbF9R3hnxeYty6ziJhvRcnnQQ+JtXOnk0ssZAdaRReCdKXFqbu4EdTMCF8DpU1CWtdyiVZCxeRS7lhHSoq8fWafmsB6WaWLoZra0nD68jtpJqXuqAo7L9FJBWvyaxBtjTISjS4t72AU6ekBGfVneSTXUWoSInMJ0yFoCktoN+UJEOFPQdb9pv72LvMLZHItuRRhf6F1e2MHXtAa9NL84v6CZhX9/EiFUdNwFtaMEvrtTCVqINZPsYTmCyKRGH+BHBmTLvCUwhReqQvx3f0LYvlXxFtt+D61UNfpXobc7Rc4tsnK87yPPwU/Ky76Xuf+mio2tweh5eH79LoTUIyprMi/CxL6RIO5vhnDUR9Bw6DdwHeoJSSSfUY8ArIIyNLZWs40gT2PpZ/gtsveKCjE7JxsYcgLxLmdjO1J+HfQ4n24e1MoL+4vxtrHi986J9yGiygdkusPYNLPUndk380CedgPIsFvk3WCjIOokrabwPQn0qdZvQYg2nMNglSKctbdxzQIjVCeoloHfsyfbRrpeWOP4TTATdTVCRBFakDjVhxzf03ZeXRH2x/daYxJH6PR+ojqwEprWsU+cwsDWIpYPRLgZjQatYj/zKB3DV4Hq8he4hsC8oh8YQbAdPx1m90DtBf7AViDsZoS6ZNPkeB6HdURk1aZKrnwE18BeANiCLfAJrnRXQCPaiCews+hDGxpdK2gMaoY/Lusof0AFda1QWISXFLqArWKFIYNW34Qj4Ra4sr0W6sKFbk5M2p0d6+VMifEa5tKgbDZ0OdIyd2UiNbkS94fukmtC1RZvL0qRDaEz9CKSErB0ziXSN3DnGqDF6B+jUUaXqCFR0BP4flHE9rjcE8eMAAAAASUVORK5CYII="
          alt
        />
      </h2>
      <p class="bedding">{{dataobj.categoryName}}</p>
      <div class="beddingimg">
        <ul>
          <li v-for="(data,index) in datalist" :key="index">
            <img :src="data.fileUrl" alt />
            <div class="name">
              <!-- <span>{{data.tagListDto[0].tag}}</span> -->
              <P>{{data.brandName}}</P>
              <P>{{data.productName}}</P>
            </div>
            <div class="discount">
              <span>￥{{data.price}}</span>
              <span>￥{{data.marketPrice}}</span>
              <span>{{data.discount}}折</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      datalist: [],
      dataobj: {}
    };
  },
  mounted() {
    axios(
      `http://www.mei.com/appapi/brand/product/secCategoryProduct/v3?logoId=${this.$route.params.id}&pageIndex=1`
    ).then(res => {
      console.log(res.data.body);
      this.dataobj = res.data.body.categories[0];
      this.datalist = res.data.body.categoryProducts;
      console.log(res.data.body.categoryProducts);
    });
  }
};
</script>
<style scoped lang="scss">
.goodrecommend {
  width: 100%;
  overflow-x: hidden;
  h2 {
    width: 100%;
    height: 0.22rem;
    margin-bottom: 0.2rem;
    margin-left: 0.15rem;
    img {
      width: 1.45rem;
      height: 0.22rem;
    }
  }

  .bedding {
    width: 100%;
    height: 0.43rem;
    text-align: center;
    line-height: 0.43rem;
    font-weight: bold;
    border-bottom: 0.01rem #aaa solid;
  }
  .beddingimg {
    width: 100%;
    ul {
      width: 3.45rem;
      // display:flex;
      // flex-wrap: wrap;
      // justify-content:space-between;
      box-sizing: border-box;
      margin: 0 auto;
      overflow: hidden;
      li {
        // flex-basis:50%
        float: left;
        width: 1.65rem;
        height: 3.02rem;
        margin-bottom: 0.1rem;
        img {
          width: 100%;
        }
        .name {
          width: 100%;
          p {
            width:100%;
            margin-bottom: 0.02rem;
            font-size :0.14rem;
            font-weight:bold;

          }
          p:nth-of-type(2) {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .discount{
            width:100%;
          line-height:0.29rem;
          font-size:0.14rem;
          span:nth-of-type(1){
            color:red;
            font-weight:bold;
        }    
        span:nth-of-type(2){
            color:#ccc;
            text-decoration:line-through;
            margin-left:0.05rem;
        }
        span:nth-of-type(3){
            color:#aaa;
            float:right;

        }
        }
      }
      li:nth-child(odd) {
        margin-right: 0.15rem;
      }
    }
  }
}
</style>
