import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
//引入小仓库
import home from "./home";
import search from "./search"
export default new Vuex.Store({
    //实现vuex的模块化开发
   modules:{
    home,
    search
   }
})