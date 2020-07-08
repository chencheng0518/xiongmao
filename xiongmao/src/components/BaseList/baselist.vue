<template>
  <div>
    <van-list
      class="van-list"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="(item,index) in list" :key="index">
        <div v-if="item.type=='1'">
          <div class="list_wrap" @click="goDetails(item.id,item.platform,item.isFreePostage)">
            <div class="wrap_img">
              <img :src=" item.image" />
            </div>
            <div class="list_title">{{item.title}}</div>
            <div class="list_text">
              <div class="list_company">{{item.platform===1?'淘宝':'天猫'}}</div>
              <div class="list_free">{{item.isFreePostage===true?'包邮':'不包邮'}}</div>
            </div>
            <div class="list_price">
              ￥
              <div class="price_da">{{item.price[0]}}</div>.
              <div class="price_xiao">{{item.price[1]}}</div>
            </div>
            <div class="list_saleNum">{{item.saleNum}}人已买</div>
            <div v-if="item.showExpireMsg==true">
              <div class="list_couponValue">{{item.couponValue}}</div>
            </div>
            <div v-else></div>
          </div>
        </div>
        <div v-else>
          <div class="wrap_png" @click="tocolumn(item.url)">
            <img :src=" item.image" />
          </div>
        </div>
      </van-cell>
    </van-list>
    <div class="panda_wrap">
      <a
        href="https://a.app.qq.com/o/simple.jsp?pkgname=com.lukou.youxuan&ckey=CK1362065872812"
      >去熊猫优选APP，看更多商品</a>
    </div>
    <div class="browse_wrap">
      <div class="APP">
        <a href="https://xinyong.yunaq.com/certificate?site=www.xiongmaoyouxuan.com">App内浏览</a>
      </div>
      <div class="security">
        <img src="../../assets/security.png" />
      </div>
    </div>
    <div class="toponscroll" @click="gotop" style="display:none">
      <img src="../../assets/top.png" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  props: ["httpQuery"],
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      start: 0,
      isEnd: null,
      timer: null,
      keys: true
    };
  },
  watch: {
    httpQuery(to, from) {
      if (to.url != from.url) {
        this.list = [];
        this.start=0
        this.onLoad();
      }
    }
  },
  methods: {
    goDetails(id,company,free){
      this.$router.push({path:`/details/${id}`,query:{company:`${company}`,free:`${free}`}})
    },
    async onLoad() {
      const { url, type } = this.httpQuery;
      this.loading = true;
      this.finished = false;
      let { data: res } = await axios.get(url + this.start);
      res = await this.getbaselist(res, type);
      for (let i = 0; i < res.data.list.length; i++) {
        const element = res.data.list[i].saleNum;
        const price = res.data.list[i].price;
        if (price != undefined) {
          let b = price.toString().split(".");
          res.data.list[i].price = b;
        }

        if (element != undefined) {
          let str = element.toFixed();
          if (str.length > 4) {
            var num = str / 10000;
            res.data.list[i].saleNum = num.toFixed(1) + "万";
          }
        }
      }
      this.list = [...this.list, ...res.data.list];
      this.loading = false;
      this.start = res.data.nextIndex;

      this.isEnd = res.data.isEnd;
      if (this.isEnd === true) {
        this.finished = true;
      }
    },
    async getbaselist(res, type) {
      if (type === "feed") {
        return {
          data: { ...res.data.items }
        };
      } else if (type === "feeds") {
        return {
          data: { ...res.data }
        };
      }
    },
    roll() {
      var toponscroll = document.getElementsByClassName("toponscroll")[0];
      window.onscroll = function() {
        var scrollTop = document.documentElement.scrollTop;
        if (scrollTop >= 1500) {
          toponscroll.style.display = "block";
        } else {
          toponscroll.style.display = "none";
        }
      };
    },
    gotop() {
      var scollTop1 =
        window.document.scrollTop || document.documentElement.scrollTop;
      if (this.keys) {
        this.timer = setInterval(this.gotop, 10);
      }
      if (scollTop1 > 1) {
        window.document.scrollTop = document.documentElement.scrollTop =
          scollTop1 - 50; // 减速运动
        this.keys = false; // 关闭开关
      } else {
        window.document.scrollTop = 0;
        clearInterval(this.timer);
        this.keys = true;
      }
    },
    tocolumn(url) {
      let url1 = url.split("//")[1];
      var type = url1.split("?")[0];
      var id = url1.split("=")[1];
      this.$router.push({ path: `/category/${id}`, query: { type: type } });
    }
  },
  mounted() {
    this.roll();
    var van = document.getElementsByClassName("van-list")[0];
    let a = this.$route.fullPath.split("=")[0];
    if (a != undefined) {
      let type = a.split("?")[1];
      if (type === "userid") {
        van.style.margin = "14vh 0 0 0";
      }
    }
    if (this.$route.fullPath.split("/")[1] === "titleBase") {
      van.style.margin = "14vh 0 0 0";
    }
    if (this.$route.fullPath.split("/")[1] === "category") {
      van.style.margin = "16vh 0 0 0";
    }
    if (this.$route.fullPath.split("=")[1] === "column") {
      van.style.margin = "-.7vh 0 0 0";
    }
    if (this.$route.fullPath.split("/")[1] === "hot") {
      van.style.margin = "33vh 0 0 0";
    }
  }
};
</script>
<style lang="less">
.van-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #f5f5f5;
  .van-cell {
    padding: 0 !important;
    width: 49%;
    height: 43vh;
    margin-bottom: 1vh;
    .list_wrap {
      .wrap_img {
        height: 28vh;
        img {
          display: block;
        }
      }
      .list_title {
        font-size: 2vh;
        margin: 0 2vw;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #877a73;
      }
      .list_text {
        display: flex;
        font-size: 2vh;
        justify-content: space-between;
        margin: 0 2vw;
        color: #877a73;
        .list_company {
          width: 9vw;
          height: 2.5vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f40;
          color: #fff;
        }
      }
      .list_price {
        color: #fa585a;
        font-size: 2vh;
        margin: -1.5vh 0 0 2vw;
        display: flex;
        .price_da {
          font-size: 3.5vh;
        }
      }
      .list_saleNum {
        color: #877a73;
        font-size: 1vh;
        margin: -2vh 0 0 14vw;
      }
      .list_couponValue {
        margin: -3.5vh 0 0 34vw;
        font-size: 1vh;
        color: #fa585a;
        width: 12vw;
        height: 2.5vh;
        box-shadow: inset 0 0 0 0.03rem #fa585a;
        display: flex;
        justify-content: center;
        align-items: center;
      }
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
  background: #efeeee;
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
  .APP {
    width: 40vw;
    height: 6vh;
    background-color: #3680ff;
    border-radius: 25px;
    text-align: center;
    line-height: 2.1;
    color: #fff;
  }
  .security {
    width: 27vw;
    height: 5vh;
    position: absolute;
    top: 3vh;
  }
}
.toponscroll {
  width: 15vw;
  height: 8vh;
  position: fixed;
  right: 8vw;
  bottom: 8vh;
  z-index: 10;
  border-radius: 50%;
  img {
    width: 100%;
    display: block;
  }
}
.wrap_png {
  height: 100%;
}
</style>