/* 引入路由组件 */
/* import Home from "@/pages/Home" */
/* import Login from "@/pages/Login"
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
import GroupOrder from "@/pages/Center/groupOrder" */

//当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
//如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。
/* const foo=()=> import('@/pages/Home') */

//采用路由懒加载
//路由配置
export default [
    {
        path: '/home',
        component: ()=> import('@/pages/Home') ,
        meta: { show: true }
        //meta是用来表示是否显示footer
    },
    {
        path: '/login',
        component: ()=>import('@/pages/Login'),
        meta: { show: false }
    },
    {
        path: '/paysuccess',
        component: ()=>import('@/pages/PaySuccess'),
        meta: { show: true },
    },
    {
        path: '/center',
        component:()=>import('@/pages/Center'),
        meta: { show: true },
        //二级路由
        children: [
            {
                path: 'myorder',
                component: ()=>import('@/pages/Center/myOrder'),
            },
            {
                path: 'grouporder',
                component:()=>import('@/pages/Center/groupOrder'),
            }, {
                //重定向，默认显示我的订单
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
    {
        name: 'pay',
        path: '/pay',
        component:()=>import('@/pages/Pay'),
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            //只有从trade过来的，才允许进入
            if (from.path == '/trade') {
                next();
            } else {
                next(false)
            }

        }
    },
    {
        path: '/trade',
        component: ()=>import('@/pages/Trade'),
        meta: { show: true },
        //路由独享守卫
        beforeEnter: (to, from, next) => {
            //如果发生的路由跳转是从购物车来的，才允许跳转
            if (from.path == '/shopcart') {
                next();
            } else {
                //如果不是从购物来的，从哪来回哪去
                next(false)
            }
        }
    },
    {
        path: '/register',
        component: ()=>import('@/pages/Register'),
        meta: { show: false }
    },
    {
        name: 'search',
        //带问号表示可以传递也可以不传递
        path: '/search/:keyword?',
        component: ()=>import('@/pages/Search'),
        meta: { show: true }
        /* props:true */
        /* props:{a:1,b:2} */
        /* props:($route)=>{
            return{keyword:$route.params.keyword,k:$route.query.k}
        } */
    },
    {
        name: "addcartsuccess",
        path: "/addcartsuccess",
        component:()=>import('@/pages/AddCartSuccess'),
        meta: { show: true }
    },
    {
        name: 'detail',
        path: '/detail/:skuId?',
        component: ()=>import('@/pages/Detail'),
        meta: { show: true }
    },
    {
        name: 'shopcart',
        path: '/shopcart',
        component: ()=>import('@/pages/ShopCart'),
        meta: { show: true }
    },
    {
        /* 重定向 */
        path: '/',
        redirect: 'home'
    }
]
