import Vue from "vue"
import VueRouter from "vue-router"

/* 使用插件 */
Vue.use(VueRouter)
//引入路由配置
import routes from "./routes"
import store from "@/store"

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
let router= new VueRouter({
    /* 配置路由 */
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
      }
    
});
//全局守卫
router.beforeEach((to, from,next) => {
    //to:可以获取到你要跳转到哪个路由的信息
    //from可以获得你从哪个路由而来的信息
    //next:放行函数
    //next();放行
    //next('/login') 放行到指定路由当中  next(path)
    let token = store.state.user.token
    //用户已经登录
    if(token){

        //登录之后，去的不是登录界面
        //获取用户信息
         store.dispatch("getUserInfo")
         next()
        
    }else{
        //我们还要实现，在未登录状态时，想要去往哪个页面，在登陆后，要去往该页面，我们需要保存，是想要前往哪个页面
        //未登录时，不能进入与支付相关的页面，若是去以下页面，都眺往登录页面
        //str.indexof(string) ,若str中没有string则返回-1，若有返回对应下标
        if(to.path.indexOf("/addcartsuccess")!=-1||to.path.indexOf("/shopcart")!=-1||to.path.indexOf('/pay"')!=-1||to.path.indexOf("/center")!=-1||to.path.indexOf("/trade")!=-1){
            //登录之后，将要去的位置通过query，放在地址栏上
            //to.path要去的页面
            next('/login?redirect='+to.path)
        }else{
            next()
        }
    }
    

  })
export default router