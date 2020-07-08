<template>
    <div>
         <Clicksearch></Clicksearch>
         <Tab></Tab>
         <router-view/>
    </div>
</template>
<script>
import Clicksearch from '../../components/Clicksearch/clicksearch'
import Tab from '../../components/Tab/tab'
export default {
  components: {
    Clicksearch,
    Tab
  }
}

</script>

<style lang="less">

</style>
