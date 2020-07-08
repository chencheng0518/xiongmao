<template>
  <div>
    <div class="title_wrap">
      <div class="title_text">热门搜索</div>
      <div class="title_hot">
        <div
          class="hot_wrap"
          v-for="item in index.titleData"
          :key="item.id"
          :class="[item.highlight===true?'active':'black']"
          @click="gobase(item.word)"
        >{{item.word}}</div>
      </div>
    </div>
    <div class="commodity_wrap">
      <div class="commodity_title">商品分类</div>
      <div class="commodity_content">
        <div class="commodity" 
        v-for="item in index.tabData" 
        :key="item.id"
        @click="tobase(item.name)"
        >
            {{item.name}}
            </div>
      </div>
    </div>
    <div class="panda_wrap">
      <a
        href="https://a.app.qq.com/o/simple.jsp?pkgname=com.lukou.youxuan&ckey=CK1362065872812"
      >去熊猫优选APP，看更多商品</a>
    </div>
    <div class="browse_wrap">
      <div class="security">
        <img src="../../../assets/security.png" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["index"])
  },
  methods: {
    ...mapActions(["getTitle", "getListData"]),
    gobase(word){
        this.$router.push({path:`/titleBase/${word}`})      
    },
    tobase(name){
        console.log(name);
        
    }
  },
  created() {
    this.getTitle();
    this.getListData();
  }
};
</script>
<style lang="less">
.active {
  color: #fa585a;
}
.black {
  color: #000;
}
.title_wrap {
  margin: 10vh 0 0 4vw;
  font-size: 2.4vh;
  color: #877a73;
  .title_hot {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1vh;
    .hot_wrap {
      width: 16vw;
      height: 1vh;
      background-color: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      font-size: 2.2vh;
      margin: 1vh 1vw;
      padding: 0;
    }
  }
}

.commodity_wrap {
  margin: 5vh 0 0 4vw;
  font-size: 2.4vh;
  color: #877a73;
  .commodity_title {
  }
  .commodity_content {
    color: #000;
    display: flex;
    flex-wrap: wrap;
    .commodity {
      align-items: center;
      width: 25%;
      margin: 2vh 0;
      display: flex;
      justify-content: center;
    }
  }
}

.panda_wrap {
  height: 20vh;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20vh;
  a {
    display: block;
    height: 5vh;
    width: 36vh;
    border: 1px solid #fa521e;
    text-align: center;
    border-radius: 25px;
    font-size: 2.2vh;
    line-height: 2;
    color: #fa521e;
  }
}
.browse_wrap {
  height: 20vh;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  .security {
    width: 27vw;
    height: 5vh;
    position: absolute;
    top: 3vh;
  }
}
</style>