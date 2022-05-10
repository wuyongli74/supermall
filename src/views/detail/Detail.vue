<template>
  <div id="detail">
    <detail-nav-bar/>
    <img v-show="imgS" src="https://ww1.sinaimg.cn/large/007rAy9hgy1g24by9t530j30i20i2glm.jpg"/>
    <detail-swiper :pics="pics"/>
  </div>
</template>

<script>

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";

  import {getDetail} from "network/detail";

  export default {
    name: "Detail",
    components: {DetailSwiper, DetailNavBar},
    data() {
      return {
        goods_id: null,
        pics: null,
        imgS: false
      }
    },
    created() {
      // 1.保存传入的goods_id
      this.goods_id = this.$route.params.goods_id;

      // 2.详情数据请求
      getDetail(this.goods_id).then(res => {
        // 2.1.获取顶部的图片轮播数据
        this.pics = res.message.pics;
        this.imgS =  (this.pics.length === 0);
        console.log(res.message)
      })
    },
  }
</script>

<style scoped>

</style>
