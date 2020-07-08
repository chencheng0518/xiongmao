<template>
  <div>
    <div class="topsearch" @click="show">
      <div class="topsearch_title">
        <van-icon name="search" class="search" />
        <div class="topsearch_title_text">搜索商品，发现更多优选</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    show(){
     this.$router.push({path:'/search'})
    }
  }
};
</script>
<style lang="less">
.topsearch {
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #877a73;
  background-color: #fdde4a;
  position: fixed;
  top: 0;
  z-index: 10000000;
  .topsearch_title {
    height: 5vh;
    width: 90%;
    background: #fff;
    border-radius: 25px;
    font-size: 2vh;
    display: flex;
    align-items: center;
    margin-top: 1.5vh;
    padding-left: 3vw;
    .search {
      font-size: 4vh;
    }
  }
}
</style>
