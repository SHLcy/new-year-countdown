import Vue from 'vue'
import Vuex from 'vuex'
/* eslint-disable */ 
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    goodsDataList:{},
    count:0
  },
  mutations:{
    changeCount(state, data){
      let id = data.id
      state.goodsDataList[id] = data
      state.count = 0
      for(var val in state.goodsDataList){
        let dataCount =  state.goodsDataList[val].count
        dataCount  = parseInt(dataCount)
        state.count += dataCount
      }
      console.log(state.goodsDataList)
    }
  }
})
