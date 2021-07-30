<template>
  <div>
    <Tab></Tab>
    <Clicksearch></Clicksearch>
    <div class="taglist_wrap">
      <div class="tag_top">
        <div class="tag_top_xian_left"></div>
        <div class="tag_top_text">潮流精选</div>
        <div class="tag_top_xian_right"></div>
      </div>
      <div class="list_wrap">
        <div class="list_middle" v-for="item in tagList" :key="item.id" @click="to(item.url)"> 
          <div class="list_middle_img">
            <img :src="item.imageUrl" />
          </div>
          <div class="list_middle_title">{{item.title}}</div>
        </div>
      </div>
      <div class="tag_bottom">
        <div class="tag_bottom_xian_left"></div>
        <div class="tag_bottom_text">大家都在逛</div>
        <div class="tag_bottom_xian_right"></div>
      </div>
    </div>
    <BaseList :httpQuery='httpQuery'></BaseList>
  </div>
</template>
<script>
import axios from "axios";
import Clicksearch from "../../components/Clicksearch/clicksearch";
import Tab from "../../components/Tab/tab";
import BaseList from '../../components/BaseList/baselist';
export default {
  components: {
    Tab,
    Clicksearch,
    BaseList
  },
  data() {
    return {
      httpQuery: {
        url: `http://www.xiongmaoyouxuan.com/api/tab/${this.$route.params.id}?start=`,
        type: "feed"
      },
      tagList: []
    };
  },
  watch:{
      "$route"(to,from){
          if(to.params.id!=from.params.id){
              this.httpQuery={
                  url: `http://www.xiongmaoyouxuan.com/api/tab/${to.params.id}?start=`,
                  type: "feed"
              }
              this.getTaglist()
          }
          
      }
  },
  created() {
    this.getTaglist();   
  },
  methods: {
    async getTaglist() {
     await axios.get(
          `http://www.xiongmaoyouxuan.com/api/tab/${this.$route.params.id}?start=0`
        )
        .then(({ data }) => {
          this.tagList = data.data.categories;
        });
    },
    to(url){
      let url1 =url.split('//')[1];
      var type=url1.split('?')[0];
      var id= url1.split('=')[1]
      this.$router.push({path:`/category/${id}`,query:{type:type}})
    }
  }
};
</script>
<style lang="less">
.taglist_wrap {
  margin: 18vh 0 0 0;
  width: 100%;
  background: #fff;
  .tag_top{
    display: flex;
    width: 100%;
    height: 5vh;
    justify-content: center;
    font-size: 2vh;
    align-items: center;
    color: hsla(21, 8%, 49%, 0.7);
    margin-bottom: 2vh;
    .tag_top_text {
      margin: 0 6vw;
    }
    .tag_top_xian_left {
      height: 0.1vh;
      width: 12vw;
      background-color: #fdde4a;
      &::after {
        content: "";
        width: 0;
        height: 0;
        border: 3px solid #fdde4a;
        transform: rotate(45deg);
        display: block;
        box-sizing: border-box;
        margin-top: -3px;
        margin-left: 12vw;
      }
    }
    .tag_top_xian_right {
      height: 0.1vh;
      width: 12vw;
      background-color: #fdde4a;
      &::before {
        content: "";
        width: 0;
        height: 0;
        border: 3px solid #fdde4a;
        transform: rotate(45deg);
        display: block;
        box-sizing: border-box;
        margin-top: -3px;
        margin-left: -2vw;
      }
    }
  }
  .list_wrap {
    display: flex;
    flex-wrap: wrap;
    width: 100%;;
    .list_middle {
      width: 25%;
      font-size: 2vh;
      text-align: center;
      margin-bottom: 1vh;
      .list_middle_img {
        width: 15vw;
        height: 8vh;
        margin: 0 auto;
      }
    }
  }
  .tag_bottom {
    display: flex;
    width: 100%;
    height: 6vh;
    background: #f5f5f5;
    justify-content: center;
    font-size: 2vh;
    align-items: center;
    color: hsla(21, 8%, 49%, 0.7);
    margin-top: 1vh;
    .tag_bottom_text {
      margin: 0 6vw;
    }
    .tag_bottom_xian_left {
      height: 0.1vh;
      width: 12vw;
      background-color: #fdde4a;
      &::after {
        content: "";
        width: 0;
        height: 0;
        border: 3px solid #fdde4a;
        transform: rotate(45deg);
        display: block;
        box-sizing: border-box;
        margin-top: -3px;
        margin-left: 12vw;
      }
    }
    .tag_bottom_xian_right {
      height: 0.1vh;
      width: 12vw;
      background-color: #fdde4a;
      &::before {
        content: "";
        width: 0;
        height: 0;
        border: 3px solid #fdde4a;
        transform: rotate(45deg);
        display: block;
        box-sizing: border-box;
        margin-top: -3px;
        margin-left: -2vw;
      }
    }
  }
}
</style>