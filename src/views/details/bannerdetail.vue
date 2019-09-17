<template>
  <div>
    <Introduction></Introduction>
    <shopnav></shopnav>
    <newArrival></newArrival>
    <hotstyle></hotstyle>
    <goodRecommend></goodRecommend>
  </div>
</template>
<script>
import Introduction from "./bannerdetail/Introduction";
import newArrival from "./bannerdetail/newArrival";
import hotstyle from "./bannerdetail/hotstyle";
import goodRecommend from "./bannerdetail/goodRecommend";
import shopnav from "./bannerdetail/shopnav";

export default {
  components: {
    Introduction,
    newArrival,
    hotstyle,
    goodRecommend,
    shopnav
  },
  mounted() {
    axios(
      "http://www.mei.com/appapi/brand/product/hotNew/v3?logoId=3616200100000001326"
    ).then(res => {
      this.brandObj = res.data.body;
    });
  }
};
</script>