/* 引入路由组件 */
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
import Trade from "@/pages/Trade"
import Pay from "@/pages/Pay"
//路由配置
export default [
        {
            path:'/home',
            component:Home,
            meta:{show:true}
            //meta是用来表示是否显示footer
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },
        {
            name:'pay',
            path:'/pay',
            component:Pay,
            meta:{show:true}
        },
        {
            path:'/trade',
            component:Trade,
            meta:{show:true}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        {
            name:'search',
            //带问号表示可以传递也可以不传递
            path:'/search:keyword?',
            component:Search,
            meta:{show:true}
            /* props:true */
            /* props:{a:1,b:2} */
            /* props:($route)=>{
                return{keyword:$route.params.keyword,k:$route.query.k}
            } */
        },
        {
           name:"addcartsuccess",
            path:"/addcartsuccess",
            component:AddCartSuccess,
            meta:{show:true}
        },
        {
            name:'detail',
            path:'/detail/:skuId?',
            component:Detail,
            meta:{show:true}
        },
        {
            name:'shopcart',
            path:'/shopcart',
            component:ShopCart,
            meta:{show:true}
        },
        {
            /* 重定向 */
            path:'/',
            redirect:'home'
        }
    ]
