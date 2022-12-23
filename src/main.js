import Vue from 'vue'
import App from './App.vue'
/* 引入路由 */
import router from "@/router"
import TypeNav from "@/components/TypeNav"
//引入
import "@/mock/mockServe"

//将一个组件注册为全局组件
/* 第一个参数：全局组件的名字，第二个参数：哪一个组件 */
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false


//引入仓库
import store from "@/store"
new Vue({
  render: h => h(App),
  router,
  //注册之后组件就会多了一个$store属性
  store
}).$mount('#app')
