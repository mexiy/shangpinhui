//当前这个模块：api进行统一管理
import requests from "./Ajax";
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

//获取floor
export const reqGetFloorList=()=>mockRequest.get("/floor")

//获取搜索模块数据，地址/api/list  请求方式post  需要参数
//参数
/* {
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
} */
//axios有两种写法,一种是axios.get("url"),另一种是axios({}),传一个对象，用来说明请求方式，和传递的参数
//当前这个接口，给服务器传递的params最起码是个空对象
export const reqGetSearchInfo=(params)=>requests({
    url:"/list",
    method: "post",
   data:params
})

//获取商品详情  /api/item/{ skuId },
//注意路径上直接带参，一定要写成模板字符串，并用${}括住变量
export const reqGetGoodsInfo=(skuId)=> requests({ url:`/item/${skuId}`,method:"get"})

//加入购物车，或更新个数 /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>requests({url:`/cart/addToCart/${ skuId }/${ skuNum }`,method:"post"})

