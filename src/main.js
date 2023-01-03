import Vue from 'vue'
import App from './App.vue'
/* 引入路由 */
import router from "@/router"
//全局组件
import TypeNav from "@/components/TypeNav"
import Carousel from "@/components/Carousel"
import Pagination from "@/components/Pagination"
//引入
import "@/mock/mockServe"
//引入swiper样式
import 'swiper/css/swiper.css'
//统一接口api文件夹里面全部请求函数
import * as API from '@/api'

//将一个组件注册为全局组件
/* 第一个参数：全局组件的名字，第二个参数：哪一个组件 */
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.config.productionTip = false


//引入仓库
import store from "@/store"
new Vue({
  render: h => h(App),
  //配置全局事件总线$bus
  beforeCreate(){
    Vue.prototype.$bus=this;
    //将所有的api挂载到vue原型对象中，这样再所有组件中都可以使用
    Vue.prototype.$API = API
  },
  router,
  //注册之后组件就会多了一个$store属性
  store
}).$mount('#app')
