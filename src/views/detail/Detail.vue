<template>
  <div id="detail">
    <detail-nav-bar/>
  </div>
</template>

<script>

  import DetailNavBar from "./childComps/DetailNavBar";

  import {getDetail} from "network/detail";

  export default {
    name: "Detail",
    components: {DetailNavBar},
    data() {
      return {
        goods_id: null
      }
    },
    created() {
      // 1.保存传入的goods_id
      this.goods_id = this.$route.params.goods_id;

      // 2.详情数据请求
      getDetail(this.goods_id).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style scoped>

</style>
