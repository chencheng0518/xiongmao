<template>
  <div>
    <div class="details_swipe">
      <van-swipe :autoplay="3000" :loop="false">
        <van-swipe-item v-for="(item,index) in swipe" :key="index">
          <img v-lazy="item.url" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="details_break" @click="back">
      <van-icon name="arrow-left" />
    </div>
    <div class="details_img_title">
      <div class="details_free">{{this.$route.query.free==='true'?'包邮':'不包邮'}}</div>
      <div class="details_title">{{title}}</div>
    </div>
    <div class="details_juan">
      <img src="../../assets/juan.png" />
    </div>
    <div class="details_price">
      <div class="price_￥">￥</div>
      <div class="price">{{price}}</div>
    </div>
    <div class="details_origin_sale">
      <div class="originPrice">
        原价
        <div class="origin">￥{{originPrice}}</div>
      </div>
      <div class="saleNum">月销量:{{saleNum}}</div>
    </div>
    <div class="details_foot">
      <div class="foot"></div>淘宝图文详情
      <div class="foot"></div>
    </div>
    <div v-for="item in images" :key="item.id">
      <div v-if="item.image">
        <img :src="item.image.url" />
      </div>
      <div v-else></div>
    </div>
    <div class="toponscroll" @click="gotop" style="display:none">
      <img src="../../assets/top.png" />
    </div>
    <div class="details_click">
      <div class="details_click_juan">{{originPrice-price}}元淘宝优惠劵</div>
      <div class="click" @click="click">领卷购买</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      swipe: [], //轮播图
      images: [], //详情图
      title: "", //标题
      price: null, //现价格
      originPrice: null, //原价格
      saleNum: null, //月销量
      timer: null,
      keys: true
    };
  },
  created() {
    this.getlist();
  },
  mounted() {
    if (this.$route.query.company != 1) {
      var img0 = document.getElementsByClassName("details_img_title")[0];
      img0.style.backgroundImage = "url(/img/tian.23868456.jpg)";
      img0.style.backgroundRepeat = "no-repeat";
      img0.style.backgroundPosition = "4vw 0.5vh";
      img0.style.backgroundSize = "3vh";
    }
    this.roll();
  },
  methods: {
    async getlist() {
      let { data: res } = await axios.get(
        `http://www.xiongmaoyouxuan.com/api/detail?id=${this.$route.params.id}&normal=1&sa=`
      );
      this.swipe = res.data.detail.photo;
      this.images = res.data.detail.descContentList;
      this.title = res.data.detail.title;
      this.originPrice = res.data.detail.originPrice;
      this.saleNum = res.data.detail.saleNum;
      this.price = res.data.detail.price;
    },
    back() {
      this.$router.go(-1);
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
    click(){
      
    }
  }
};
</script>
<style lang="less">
.details_swipe {
  .van-swipe__indicator {
    background-color: #000;
  }
  .van-swipe__indicator--active {
    background: #007aff;
  }
  .van-swipe__track {
    height: 60vh;
  }
}
.details_img_title {
  padding: 0 3vw;
  background: url("../../assets/tao.jpg") no-repeat;
  background-size: 3vh;
  background-position: 4vw 0.5vh;
  .details_free {
    display: inline-block;
    font-size: 2vh;
    width: 11vw;
    height: 2.5vh;
    border: 0.1vh solid #b1a9a5;
    color: #b1a9a5;
    text-align: center;
    line-height: 2.5vh;
    margin: 0 2vw 0 8vw;
  }
  .details_title {
    font-size: 2.2vh;
    display: unset;
    line-height: 4vh;
  }
}
.details_juan {
  width: 14vw;
  height: 3vh;
  margin: 3vh 1vw 3vh 3vw;
}
.details_price {
  color: #fa585a;
  display: flex;
  align-items: center;
  margin: -6.5vh 0 1vh 19vw;
  .price_￥ {
    font-size: 1vh;
  }
  .price {
    font-size: 5vh;
    font-weight: 700;
    margin-top: -1vh;
  }
}
.details_origin_sale {
  display: flex;
  color: #b1a9a5;
  padding: 0 3vw;
  justify-content: space-between;
  font-size: 2vh;
  .originPrice {
    display: flex;
    .origin {
      text-decoration: line-through;
    }
  }
}
.details_foot {
  display: flex;
  justify-content: center;
  color: #b1a9a5;
  font-size: 2vh;
  align-items: center;
  margin: 3vh 0 1vh 0;
  .foot {
    width: 10vw;
    height: 0.1vh;
    background-color: #b1a9a5;
    margin: 0 1vw;
  }
}
.details_break {
  position: fixed;
  width: 9vw;
  height: 5vh;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vh;
  color: #fff;
  top: 2vh;
  left: 5vw;
}
.toponscroll {
  width: 14vw;
  height: 7vh;
  position: fixed;
  right: 6vw;
  bottom: 19vh;
  z-index: 10;
  border-radius: 50%;
  img {
    width: 100%;
    display: block;
  }
}
.details_click {
  display: flex;
  width: 100%;
  height: 9vh;
  align-items: center;
  position: fixed;
  z-index: 11;
  bottom: -1vh;
  background: #f5f5f5;
  .details_click_juan {
    width: 50%;
    display: flex;
    justify-content: center;
    padding-left: 10%;
    height: 9vh;
    align-items: center;
    color: #fa585a;
  }
  .click {
    width: 40%;
    height: 9vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fa585a;
    color: #fff;
  }
}
</style>