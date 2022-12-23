//当前这个模块：api进行统一管理
import requests from "./request";
import mockRequest from "./mockRequest"
//三级联动接口
///api/product/getBaseCategoryList  get  无参数
//向外暴露一个访问三级联动的api接口
export const reqCategoryList =()=>{
    //发请求
   return requests({
    //注意axios发请求返回的结果是Promise对象
        url:"/product/getBaseCategoryList",
        method:'get'
    })
}
//上述代码可以简化为：
//export const reqCategoryList =()=>requests({url:"/product/getBaseCategoryList",method:'get'})}

//获取banner
export const reqGetBannerList=()=>mockRequest.get("/banner")