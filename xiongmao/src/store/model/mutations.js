export default {
    setListData(state, data) {
        state.tabData=data
        state.tabFirstData = state.tabData.shift()
        let arr1=[state.tabFirstData]
        state.layerData=[...arr1,...data]
    },
    setData (state, data) {
        state.swipeData = data.banners
        state.gridsData = data.gridsV2   
        let arr=[' ']
        state.topData = [...data.topList, ...arr]
        state.listData = data.items.list
    },
    setTitle(state, data) {
        state.titleData=data.data.hotWords.slice(0,8)      
    }
}