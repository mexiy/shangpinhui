/* 对于axios进行二次封装 */
import axios from "axios"
//移入进度条
import nprogress from "nprogress"
//引入进度条的样式
import "nprogress/nprogress.css"
//start 进度条开始，done：进度条结束
//1:利用axios对象的方法create，去创建一个axios实例
//2:request就是axios，我们进行一下配置

//引入仓库
import store from "@/store"
const requests = axios.create({
    //配置对象
    //基础路径，发送请求的时候，路径当中会出现api
    baseURL:"/api",
    //配置请求超时时间
    timeout:2000,
    
});
//请求拦截器：再发请求指示之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
//interceptors拦截器
//为了让服务器知道购物车的身份，我们在请求拦截器中添加uuid，用来标注用户的身份，给请求头添加了一个字段
requests.interceptors.request.use((config)=>{
    //请求头添加一个字段userTempId，和后台商量好了
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token
    }
    //config:配置对象，对象里面有一个属性很重要，header请求头
    //进度条开始
    nprogress.start();
    return config;
});
//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
    //进度条结束
    nprogress.done();
    return res.data;
},(error)=>{
    //响应失败的回调函数
    return Promise.reject(new Error('faile'));
}
)
//向外暴露
export default requests
