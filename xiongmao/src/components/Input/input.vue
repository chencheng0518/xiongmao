<template>
  <div>
    <div class="search_wrap">
      <div class="search_return" @click="bk">返回</div>
      <van-search placeholder="请输入搜索关键词" v-model="value" />
      <div class="search_click"  @click="age()">搜索</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value:''
    }
  },
  methods:{
    age(){
      if (this.value!='') {
        this.$router.push({path:`/titleBase/${this.value}`}) 
      }else if (this.value==='') {
        alert('请输入关键字')
      }
      this.value=''
    },
    bk(){
      this.$router.go(-1)
    }
  }
};
</script>
<style lang="less">
.search_wrap {
  display: flex;
  top: 0;
  font-size: 2.2vh;
  position: fixed;
  z-index: 100000;
  background-color: #fdde4a;
  height: 8vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  .van-search {
    background-color: #fdde4a;
    height: 8vh;
    color: #877a73 ;
    .van-search__content {
      height: 4vh;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      width: 67vw;
      align-items: center;
      font-size: 1vh;
      .van-cell__value {
        font-size: 2.2vh;
      }
    }
  }
}
.van-icon-search::before {
    font-size: 3vh;
}
</style>