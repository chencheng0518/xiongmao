<template>
  <div>
    <Swipe></Swipe>
    <Grids></Grids>
    <Topselling></Topselling>
    <div class="selected">
      <div class="selected_xian_left"></div>
      <div class="selected_text">小编精选，全场特惠 (ง •̀_•́)ง</div>
      <div class="selected_xian_right"></div> 
    </div>
  <BaseList :httpQuery='httpQuery'></BaseList>
  </div>
</template>
<script>
import Swipe from "../../components/Swipe/swipe.vue";
import Grids from "../../components/Grids/grids";
import Topselling from "../../components/Topselling/topselling.vue";
import BaseList from '../../components/BaseList/baselist'
export default {
  data(){
    return{
      httpQuery:{
          url:'http://www.xiongmaoyouxuan.com/api/tab/1?start=',
          type:'feed'
      }
    }
  },
  components: {
    Swipe,
    Grids,
    Topselling,
    BaseList
  }
};
</script>
<style lang="less">
.selected {
  display: flex;
  width: 100%;
  height: 5vh;
  background: #f5f5f5;
  justify-content: center;
  font-size: 2vh;
  align-items: center;
  color: hsla(21, 8%, 49%, 0.7);
  .selected_text {
    margin: 0 6vw;
  }
  .selected_xian_left {
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
  .selected_xian_right {
    height: 0.1vh;
    width: 12vw;
    background-color: #fdde4a;
    &::before{
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
</style>