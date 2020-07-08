<template>
  <div>
    <div class="column_wrap">
      <div class="break" @click="go">
        <van-icon name="arrow-left" />返回
      </div>
      <div class="column_name">{{name}}</div>
      <div class="column_tab">
        <van-tabs :ellipsis="false" background="#fdde4a" v-model="active">
          <van-tab v-for="(item,index) in list" :key="index" :title="item.name" :to="{path:`/subhot/${item.id}`,query:{index:index}}">
            <div class="hot_wrap">
              <div class="hot_title">
                <div class="title_img">
                  <img src="../../assets/crown.png" />
                </div>
                <div class="title">{{item.name}}</div>
              </div>
              <div class="hot_text">{{item.desc}}</div>
              <div class="hot_png">
                <img src="../../assets/wave.png" />
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <Subhot :httpQuery='httpQuery'></Subhot>
  </div>
</template>
<script>
import axios from "axios";
import Subhot from '../Hot/Subhot/subhot';
export default {
  data() {
    return {
      name: "",
      list: [],
      active: parseInt(this.$route.query.index),
      httpQuery:{
                url:`http://www.xiongmaoyouxuan.com/api/sub_column/8/toplist?perpage=50`,
                type:'feeds'
     }
    };
  },
  components:{
      Subhot
  },
  created() {
    this.getHot();
  },
  methods: {
    getHot() {
      axios
        .get(`http://www.xiongmaoyouxuan.com/api/column/228`)
        .then(({ data }) => {
          this.name = data.data.name;
          this.list = data.data.subColumns;
        });
    },
    go() {
      this.$router.push({ path: "/" });
    }
  },
  watch:{
      "$route"(to,from){
          if (to.params.id!=from.params.id) {  
              this.httpQuery={
                  url:`http://www.xiongmaoyouxuan.com/api/sub_column/${to.params.id}/toplist?perpage=50`,
                  type:'feeds'
              }
          }
      }
  }
};
</script>
<style lang="less">
.column_wrap {
  position: fixed;
  height: 14vh;
  width: 100%;
  top: 0;
  z-index: 100000;
  background-color: #fdde4a;
  .break {
    position: fixed;
    display: flex;
    align-items: center;
    top: 2vh;
  }
  .column_name {
    text-align: center;
    margin-top: 2vh;
    font-weight: 700;
  }
  .column_tab {
    .van-tab__text {
      color: #000;
    }
  }
}
.hot_wrap {
  height: 12vh;
  width: 100%;
  background: #fff;
  padding: 2vh 5vw;
  border-top: 2vh solid #f4f3f3;
  border-bottom: 2vh solid #f4f3f3;
  .hot_title {
    display: flex;
    font-size: 2.5vh;
    margin-bottom: 1vh;
    .title_img {
      height: 3vh;
      width: 7vw;
      margin-right: 1vw;
    }
  }
  .hot_text {
    color: #877a73;
    font-size: 2vh;
    width: 92vw;
  }
  .hot_png {
    position: absolute;
    width: 10vw;
    height: 2vh;
    top: 10vh;
    left: 88vw;
  }
}
</style>