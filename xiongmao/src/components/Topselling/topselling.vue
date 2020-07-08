<template>
  <div>
    <div class="topselling_wrap" @click="gohot()">
      <div class="gray"></div>
      <div class="topselling">
        <div class="hot">
          <div class="hot_img">
            <img src="../../assets/Hot.png" />
          </div>
        </div>
        <div class="white" style="width: 6vw;
    background: #fff; height: 20vh"></div>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item,newindex) in index.topData" :key="newindex">
            <div v-if="newindex===_.size(index.topData)-1">
              <div class="swiper-last">
                <div class="swiper_more">更多商品</div>
                <div class="swiper_see">see-more</div>
              </div>
            </div>
            <div v-else>
              <img :src="item.image" />
              <div class="swiper_title">{{item.qunTitle}}</div>
              <div class="swiper_price">￥{{item.price}}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: "auto",
        freeModeMomentum: true,
        spaceBetween: 10,
        speed: 600 // config参数同swiper4,与官网一致
      }
    };
  },
  computed: {
    ...mapState(["index"])
  },
  methods:{
    gohot(){
      this.$router.push({path:`/hot/228`})
    }
  }
};
</script>
<style lang="less">
.topselling_wrap {
  .gray {
    width: 100%;
    height: 2vh;
    background: #f5f5f5;
    margin-top: 0.1vh;
  }
  .topselling {
    display: flex;
    height: 20vh;
    padding: 2vh 0;
    .hot {
      background: #fee44e;
      height: 20vh;
      width: 18vw;
      display: flex;
      justify-content: center;
      align-items: center;
      .hot_img {
        height: 12vh;
        width: 6vw;
      }
    }
    .swiper-slide {
      width: 24vw !important;
      height: 14vh !important;
      margin-right: 4vw !important;
      .swiper_title {
        overflow: hidden;
        font-size: 1vh;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-left: -1vw;
      }
      .swiper_price {
        color: #fa585a;
        font-size: 2.5vh;
        text-align: center;
      }
      .swiper-last {
        border: 1px solid #d9d9d9;
        background: #fff;
        height: 14vh;
        color: #fda900;
        text-align: center;
        .swiper_more {
          font-size: 2.5vh;
          border-bottom: 1px solid red;
          margin-top: 3vh;
          line-height: 4vh;
        }
        .swiper_see {
          color: #877a73;
          font-size: 2vh;
          margin-top: .5vh;
        }
      }
    }
  }
}
</style>