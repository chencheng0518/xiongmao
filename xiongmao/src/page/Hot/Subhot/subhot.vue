<template>
    <div>
        <BaseList :httpQuery='httpQuery'></BaseList>
    </div>
</template>
<script>
import BaseList from '../../../components/BaseList/baselist';
export default {
    props:['httpQuery'],
    components:{
        BaseList
    }
}
</script>
<style lang="less">

</style>