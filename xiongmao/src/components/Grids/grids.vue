<template>
  <div>
    <div class="grids_wrap">
      <div class="grids_left_wrap" @click="goColumn()">
        <div class="left_content">
          <div class="left_title">{{_.get(index.gridsData,[0,"title"])}}</div>
          <div class="left_text">{{_.get(index.gridsData,[0,'text'])}}</div>
        </div>
        <div class="left_img">
          <img :src="_.get(index.gridsData,[0,'imageUrl'])" />
        </div>
      </div>
      <div class="grids_right_wrap">
        <div class="right_top" @click="toColumn()">
          <div class="right_title">{{_.get(index.gridsData,[1,'title'])}}</div>
          <div class="right_text">{{_.get(index.gridsData,[1,'text'])}}</div>

          <div class="right_img">
            <img :src="_.get(index.gridsData,[1,'imageUrl'])" />
          </div>
        </div>
        <div class="right_bottom" @click="tocategory()">
          <div class="right_title">{{_.get(index.gridsData,[2,'title'])}}</div>
          <div class="right_text">{{_.get(index.gridsData,[2,'text'])}}</div>

          <div class="right_img">
            <img :src="_.get(index.gridsData,[2,'imageUrl'])" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.getData();
  },
  computed: {
    ...mapState(["index"])
  },
  methods: {
    ...mapActions(["getData"]),
    tocategory(){
      this.$router.push({path:`/category/3183`,query:{type:'column'}})
    },
    goColumn(){
      this.$router.push({path: '/column/29' ,query:{userid:7}})
    },
    toColumn(){
      this.$router.push({path: '/column/170',query:{userid:174}})
    }
  }
};
</script>
<style lang="less">
.grids_wrap {
  height: 20vh;
  display: flex;
  justify-content: space-between;
  padding: 2vh;
  box-shadow: 0 1px 0 0 #d9d9d9;
  .grids_left_wrap {
    height: 20vh;
    width: 48%;
    background: #fdf4e6;
    border-radius: 10px;
    .left_content {
      position: relative;
      z-index: 1000;
      top: 1vh;
      left: 3vw;
      .left_title {
        font-size: 3vh;
        font-weight: 400;
      }
      .left_text {
        font-size: 2vh;
        color: #ff9e55;
      }
    }
    .left_img {
      width: 37%;
      height: 20vh;
      position: absolute;
      top: 38vh;
      left: 11vw;
    }
  }
  .grids_right_wrap {
    height: 20vh;
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .right_top {
      width: 100%;
      height: 46%;
      background: #fff3f1;
      border-radius: 10px;
      position: relative;
    }
    .right_bottom {
      width: 100%;
      height: 46%;
      background: #eef9fc;
      border-radius: 10px;
      position: relative;
    }

    .right_title {
      font-size: 2.4vh;
      font-weight: 400;
      position: absolute;
      left: 2vw;
      top: 1vh;
    }
    .right_text {
      font-size: 1.8vh;
      color: #ff9e55;
      position: absolute;
      top: 4.5vh;
      left: 2vw;
    }

    .right_img {
      position: absolute;
      left: 27vw;
      width: 16vw;
      top: 0.5vh;
      height: 9vh;
    }
  }
}
</style>