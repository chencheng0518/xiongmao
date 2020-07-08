import axios from 'axios'
export default {
    getListData(content) {
        axios.get('http://www.xiongmaoyouxuan.com/api/tabs?sa=').then(({ data }) => {
            content.commit('setListData', data.data.list)
        })
    },
    getData(content) {
        axios.get(`http://www.xiongmaoyouxuan.com/api/tab/1?start=0`).then(({ data }) => {
                    content.commit('setData',data.data)
        })
    },
    getTitle(content) {
        axios.get(`http://www.xiongmaoyouxuan.com/api/search/home`).then(({ data }) => {
            content.commit('setTitle',data)           
        })
    }
}