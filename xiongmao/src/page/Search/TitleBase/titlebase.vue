<template>
  <div>
    <div class="list">
      <div
        v-for="item in list"
        :key="item.id"
        @click="show(item.id)"
        :class="[newindex===item.id?'active':'']"
      >{{item.name}}</div>
    </div>
    <BaseList :httpQuery="httpQuery"></BaseList>
  </div>
</template>
<script>
import BaseList from "../../../components/BaseList/baselist";
export default {
  data() {
    return {
      httpQuery: {
        url: `http://www.xiongmaoyouxuan.com/api/search?word=${this.$route.params.word}&start=0&sort=0&couponOnly=NaN&minPrice=0&maxPrice=99999`,
        type: "feeds"
      },
      list: [
        {
          name: "默认",
          id: 0
        },
        {
          name: "价格最低",
          id: 1
        },
        {
          name: "销量最高",
          id: 2
        }
      ],
      newindex: 0
    };
  },
  components: {
    BaseList
  },
  methods: {
    show(id) {
      this.newindex = id;
      this.httpQuery={
          url:`http://www.xiongmaoyouxuan.com/api/search?word=${this.$route.params.word}&start=0&sort=${id}&couponOnly=NaN&minPrice=0&maxPrice=99999`,
          type: "feeds"
      }
    }
  },
  watch:{
      "$route"(to,from){
           this.httpQuery={
               url:`http://www.xiongmaoyouxuan.com/api/search?word=${to.params.word}&start=0&sort=0&couponOnly=NaN&minPrice=0&maxPrice=99999`,
               type: "feeds"
           }
      }
  }
};
</script>
<style lang="less">
.list {
  background: #fff;
  display: flex;
  height: 6vh;
  align-items: center;
  justify-content: space-around;
  font-size: 2vh;
  position: fixed;
  width: 100%;
  z-index: 1000000;
  top: 8vh;
}
.active {
  color: #fa585a;
}
</style>