/* 引入路由组件 */
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"
import Detail from "@/pages/Detail"
//路由配置
export default [
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
            name:'detail',
            path:'/detail/:skuId?',
            component:Detail,
            meta:{show:true}
        },
        {
            /* 重定向 */
            path:'/',
            redirect:'home'
        }
    ]
