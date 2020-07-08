<template>
  <div>
    <div class="tab">
      <div class="tab_wrap">
        <div class="tab_wrap_text" @click="tomiddle">{{index.tabFirstData.name}}</div>
        <div class="after"></div>
        <van-tabs v-model="active" :ellipsis="false" background="#fdde4a">
          <van-tab 
          v-for="(item,index) in index.tabData" 
          :title="item.name" 
          :key="index"
          :to="{path:`/tag/${item.id}`,query:{index:index}}"
          ></van-tab>
        </van-tabs>
        <van-icon name="bars" class="icon" @click="on()" />
      </div>
    </div>
    <div class="float_layer" style="display:none;">
      <div class="float_text">
        <div class="title">全部分类</div>
        <van-icon name="cross" @click="to()" />
      </div>
      <div class="float_content">
        <div class="content" v-for="(item,index) in index.layerData" 
        :key="item.id" 
        :to="{path:`/tag/${item.id}`,query:{index:index}}" 
        @click="totag(item.id, index)"       
        >
          <div class="float_img">
            <img :src="item.imageUrl" />
          </div>
          <div class="float_title">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data(){
    return{
      active: parseInt(this.$route.query.index)
    }
  },
  created() {
    this.getListData();
  },
  methods: {
    ...mapActions(["getListData"]),
    tomiddle(){
      this.$router.push({path:'/middle'})
    },
    on() {
      let div = document.getElementsByClassName("float_layer")[0];
      div.style.display = "block";
    },
    to() {
      let div = document.getElementsByClassName("float_layer")[0];
      div.style.display = "none";
    },
    totag( id,index){
      this.$router.push({path:`/tag/${id}`,query:{index:index}})
      let div = document.getElementsByClassName("float_layer")[0];
      div.style.display = "none";
      this.active=index-1
    }
  },
  computed: {
    ...mapState(["index"])
  },
  mounted(){
    var van =document.getElementsByClassName('van-tabs__line ')[0];
    if (this.$route.fullPath.split('/')[1]==='category') {
      van.style.display='none'
    }
  }
};
</script>
<style lang="less">
.tab_wrap {
  position: fixed;
  top: 8vh;
  z-index: 200000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
  background-color: #fdde4a;
  .tab_wrap_text {
    width: 22vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdde4a;
    font-size: 2.4vh;
    font-weight: 600;
  }
  .after {
    width: 0.4vw;
    height: 5vh;
    background-color: #877a73;
    margin: 0 2vw 0 2vw;
  }
  .van-tabs {
    width: 68vw;
  }
  .icon {
    font-size: 4vh;
  }
}
.van-tab {
  font-size: 2.2vh !important;
}
.van-tabs__line {
  height: 0.5vh !important;
}
.float_layer {
  position: fixed;
  z-index: 10000000;
  top: 9vh;
  width: 100%;
  .float_text {
    background: #fdde4a;
    height: 7vh;
    font-size: 2.5vh;
    color: #877a73;
    .title {
      text-align: center;
      line-height: 7vh;
    }
    .van-icon {
      float: right;
      margin-top: -5.5vh;
      font-size: 4vh;
      color: #000;
    }
  }
  .float_content {
    height: 52vh;
    background: #fff;
  }
}
.float_content {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .content {
    width: 25%;
    font-size: 2vh;
    color: #877a73;
    text-align: center;
    .float_img {
      width: 15vw;
      height: 8vh;
      margin: 0 auto;
    }
    .float_title {
    }
  }
}
</style>