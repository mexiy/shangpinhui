import Vue from "vue"
import VueRouter from "vue-router"
/* 使用插件 */
Vue.use(VueRouter)
/* 引入路由组件 */
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"

/* 先把VueRouter原型对象的push,先保存一份 */
let originPush=VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace
//重写push|replace
/* 第一个参数：告诉原来的push方法，往哪里跳转 */
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve&&reject){
        //call||apply区别
        //相同点，都可以调用函数一次，都可以篡改函数的上下文一次
        //不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行。传递数组
        //this还是用该上下文调用，也就是vuerouter的实例，后面跟参数指定跳的位置，以及成功失败的回调
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve&&reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

export default new VueRouter({
    /* 配置路由 */
    
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        {
            name:'search',
            path:'/search:keyword?',
            component:Search,
            meta:{show:true},
            /* props:true */
            /* props:{a:1,b:2} */
            /* props:($route)=>{
                return{keyword:$route.params.keyword,k:$route.query.k}
            } */
        },
        {
            /* 重定向 */
            path:'/',
            redirect:'home'
        }
    ]
})