import Vue from 'vue'
import Vuex from 'vuex'
// import * as api from '../constants/index.js'
import * as types from './type'
// import * as http from '../utils/http.js'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    step:0,//认证步骤
    responseHouseMsg:'',
  },
  getters: {
    responseHouseMsg: state => state.responseHouseMsg,
  },
  mutations: {
    [types.SET_STEP] (state,res) {

    	state.step =res
        // let tempJson = JSON.stringify(res);
        // window.sessionStorage.setItem('step', tempJson);

    }
  }
})
