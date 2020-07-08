<template>
  <div>
    <div class="swipe_wrap">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in index.swipeData" :key="index" @click="tocolumn(item.url)">
          <img v-lazy="item.imageUrl" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  created() {
    // this.getData();
  },

  methods: {
    // ...mapActions(["getData"])
    tocolumn(url){
       let url1 =url.split('//')[1];
      var type=url1.split('?')[0];
      var id= url1.split('=')[1]
      this.$router.push({path:`/category/${id}`,query:{type:type}})   
    }
  },
  computed: {
    ...mapState(["index"])
  }
}
</script>
<style lang="less">
.swipe_wrap {
  margin-top: 16vh;
  .van-swipe-item{
    height: 20vh;
  }
}
</style>