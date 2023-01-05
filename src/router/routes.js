/* 引入路由组件 */
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"
//商品详情页面
import Detail from "@/pages/Detail"
//加入购物车成功页面
import AddCartSuccess from "@/pages/AddCartSuccess"
//购物车页面
import ShopCart from "@/pages/ShopCart"
//未支付订单详情页面
import Trade from "@/pages/Trade"
//支付页面
import Pay from "@/pages/Pay"
//支付成功页面
import PaySuccess from "@/pages/PaySuccess"
//订单中心
import Center from "@/pages/Center"
//引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from "@/pages/Center/groupOrder"

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
            path:'/paysuccess',
            component:PaySuccess,
            meta:{show:true}
        },
        {
            path:'/center',
            component:Center,
            meta:{show:true},
            //二级路由
            children:[
                {
                    path:'myorder',
                    component:MyOrder,
                },
                {
                  path:'grouporder',
                  component:GroupOrder,  
                },{
                    //重定向，默认显示我的订单
                    path:'/center',
                    redirect:'/center/myorder'
                }
            ]
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
