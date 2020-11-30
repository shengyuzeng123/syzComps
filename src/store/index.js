import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colony:[
      1,2,3,4
    ]
  },
  mutations: {
    changeList(state){
      state.colony.push(5)
    }
  },
  actions: {
    
  },

  modules:{
    user
  }
})
