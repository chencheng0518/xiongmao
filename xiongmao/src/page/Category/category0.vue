<template>
    <div>
         <Tab></Tab>
    <Clicksearch></Clicksearch>
    <div v-if="this.$route.query.type==='column'">
        <div class="column_img" style="margin-top: 16vh;">
            <img :src="img"/>
        </div>
    </div>
    <div v-else></div>
    <BaseList :httpQuery='httpQuery'></BaseList>
    </div>
</template>
<script>
import Clicksearch from "../../components/Clicksearch/clicksearch";
import Tab from "../../components/Tab/tab";
import BaseList from '../../components/BaseList/baselist';
import axios from 'axios';
export default {
    data(){
        return{
            httpQuery:{
                url:`http://www.xiongmaoyouxuan.com/api/category/${this.$route.params.id}/items?start=&sort=0`,
                type:'feed'
            },
            img:''
        }
    },
    components:{
        Clicksearch,
        Tab,
        BaseList
    },
    created(){
        if (this.$route.query.type==='column') {
            this.httpQuery={
                url:`http://www.xiongmaoyouxuan.com/api/column/${this.$route.params.id}/items?start=&sort=0`,
                type:'feeds'
            }
        }
        this.getColumn()
    },
    methods:{
        getColumn(){
            axios.get(`http://www.xiongmaoyouxuan.com/api/column/${this.$route.params.id}`).then(({data})=>{
                this.img=data.data.cover                
            })
        }
    }
}
</script>
<style lang="less">
.b{
    margin-top: 50vh;
}
</style>