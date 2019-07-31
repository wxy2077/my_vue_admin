import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储token
    token: {
        // authentication: "",
        // refresh_token: "",
    }
  },
  mutations: {
    addToken(state, token_obj){
      // 保存
        for(let key in token_obj) {

            state.token.key = token_obj[key]



        }

    }
  },
  actions: {

  }
})
