<template>
  <div>
    <div class="column_wrap">
      <div class="break" @click="go">
        <van-icon name="arrow-left" />返回
      </div>
      <div class="column_name">{{name}}</div>
      <div class="column_tab">
        <van-tabs :ellipsis="false" background="#fdde4a" v-model="active">
          <van-tab
            v-for="(item,index) in list"
            :key="item.id"
            :title="item.name"
            :to="{name:`column`,query:{userid:`${item.id}`,active:index}}"
          ></van-tab>
        </van-tabs>
      </div>
    </div>
    <BaseList :httpQuery='httpQuery'></BaseList>
  </div>
</template>
<script>
import axios from "axios";
import BaseList from "../../components/BaseList/baselist";
export default {
  created() {
   this.getList()   
  },
  data() {
    return {
      name: "",
      list: [],
      httpQuery: {
        url: `http://www.xiongmaoyouxuan.com/api/sub_column/${this.$route.query.userid}/items?start=`,
        type: "feeds"
      },
      active:parseInt(this.$route.query.active)
    };
  },
  components: {
    BaseList
  },
  methods: {
    getList(){
      axios.get(`http://www.xiongmaoyouxuan.com/api/column/${this.$route.params.id}`).then(({data})=>{
        this.list = data.data.subColumns;
        this.name = data.data.name;
      })
    },   
    go(){
        this.$router.push({path:'/'})
    }
  },
  watch: {
    "$route"(to, from) {
      if (to.query.userid != from.query.userid) {
        this.httpQuery = {
          url: `http://www.xiongmaoyouxuan.com/api/sub_column/${to.query.userid}/items?start=`,
          type: "feeds"
        };
      }
    },
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
    .van-tabs{
      position: unset;
    }
  }
}
</style>