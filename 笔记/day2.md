犯的错误:
1:项目阶段，左侧菜单目录，只能有项目文件夹
2:联想电脑安装node_modules依赖包的时候，经常丢包。npm install --save axios --force
3：单词错误
4：路由理解
KV：K--->URL  V---->相应的组件
配置路由：
     ------路由组件
     -----router--->index.js
                  import Vue  from 'vue';
                  import VueRouter from 'vue-router';
                  //使用插件
                  Vue.use(VueRouter);
                  //对外暴露VueRouter类的实例
                  export default new VueRouter({
                       routes:[
                            {
                                 path:'/home',
                                 component:Home
                            }
                       ]
                  })
    ------main.js   配置项不能瞎写


$router:进行编程式导航的路由跳转
this.$router.push|this.$router.replace
$route:可以获取路由的信息|参数
this.$route.path
this.$route.params|query
this.$route.meta

##
1)编程式导航路由跳转到当前路由(参数不变), 多次执行会抛出NavigationDuplicated的警告错误?
注意:编程式导航（push|replace）才会有这种情况的异常，声明式导航是没有这种问题，因为声明式导航内部已经解决这种问题。
这种异常，对于程序没有任何影响的。
为什么会出现这种现象:
由于vue-router最新版本3.5.2，引入了promise，当传递参数多次且重复，会抛出异常，因此出现上面现象,
第一种解决方案：是给push函数，传入相应的成功的回调与失败的回调
第一种解决方案可以暂时解决当前问题，但是以后再用push|replace还是会出现类似现象，因此我们需要从‘根’治病；

所以要想从根源解决多此触发编程式路由引发的错误，就需要改写push方法
this :当前组件实例
this.$router属性：当前的这个属性是VueRouter类的一个实例，当在入口文件注册路由的时候，给组件实例添加$router|$route属性
push:VueRouter类的一个实例

function VueRouter(){

}
//原型对象的方法
VueRouter.prototyte.push=function(){
     //函数上下文为VueRouter类的一个实例
}
let $router =new VueRouter();
$router.push(xxx)
this.$route.push(xxx)


2)将Home组件的静态组件拆分
2.1静态页面（样式）
2.2拆分静态组件
2.3发请求获取服务器数据进行展示
2.4开发动态业务
拆分组件：结构+样式+图片资源
一共要拆分为七个组件








3)axios二次封装
AJAX:客户端可以'敲敲的'向服务器端发请求，在页面没有刷新的情况下，实现页面的局部更新。
XMLHttpRequest、$、fetch、axios
为什么要进行二次封装axios？
为了封装请求拦截器，响应拦截器、请求拦截器：可以在发送请求之前可以处理一些业务，响应拦截器：当服务器数据返回以后，可以处理一些事情

##
跨域问题
什么叫做跨域？
跨域:如果多次请求协议、域名、端口号有不同的地方，称之为跨域
//本地服务器http://172.27.109.167:8081/#/home 前端项目的本地服务器，
//http://gmall-h5-api.atguigu.cn 后端服务器
形成了跨域
JSONP、CROS、代理 解决跨域
代理，webpack给我们提供了DevServer设置代理跨域，我们可以在vue.config.js中配置
2.1:工作的时候src目录下的API文件夹，一般关于axios二次封装的文件
2.2进度条：nprogress模块实现进度条功能
工作的时候，修改进度条的颜色，修改源码样式.bar类名的

##
接口统一管理
项目很小：完全可以在组件的生命周期函数中发请求


4)vuex:今晚务必vuex复习一下
vuex:Vue官方提供的一个插件，插件可以管理项目共用数据。
vuex：书写任何项目都需要vuex？
项目大的时候，需要有一个地方‘统一管理数据’即为仓库store
state：存储数据
mutations
action
getters
modules
Vuex基本使用:

## nprogress 进度条的使用  
   start :进度条开始
   done：进度条结束
   可以修改进度条颜色


















