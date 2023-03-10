//当前这个模块：api进行统一管理
import requests from "./Ajax";
import mockRequest from "./mockRequest"
//三级联动接口
///api/product/getBaseCategoryList  get  无参数
//向外暴露一个访问三级联动的api接口
export const reqCategoryList = () => {
    //发请求
    return requests({
        //注意axios发请求返回的结果是Promise对象
        url: "/product/getBaseCategoryList",
        method: 'get'
    })
}
//上述代码可以简化为：
//export const reqCategoryList =()=>requests({url:"/product/getBaseCategoryList",method:'get'})}

//获取banner
export const reqGetBannerList = () => mockRequest.get("/banner")

//获取floor
export const reqGetFloorList = () => mockRequest.get("/floor")

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
export const reqGetSearchInfo = (params) => requests({
    url: "/list",
    method: "post",
    data: params
})

//获取商品详情  /api/item/{ skuId },
//注意路径上直接带参，一定要写成模板字符串，并用${}括住变量
export const reqGetGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: "get" })

//加入购物车，或更新个数 /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" })
//获取购物车列表/api/cart/cartList
export const reqCartList = ()=>requests({url:"/cart/cartList",method:"get"})
//删除购物产品 /api/cart/deleteCart/{skuId}
export const reqDeleteCartById=(skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:"delete"})
//切换商品选中状态 /api/cart/checkCart/{skuID}/{isChecked}
export const reqUpdateCheckedById = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:"get"})

//获取验证码 /user/passport/sendCode/{phone}
export const reqGetCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:"get"})

//用户注册 /api/user/passport/register   post    参数phone,password,code  
//路径中没有带有参数时，我们可以利用data带参数
export const register=(data)=>requests({url:"/user/passport/register",data,method:"post"})

//用户登录 /api/user/passport/login  post  参数phone password
export const login=(data)=>requests({url:"/user/passport/login",data,method:"post"})

//带着token找用户信息 /api/user/passport/auth/getUserInfo  get
export const reqUserInfo=()=>requests({url:'/user/passport/auth/getUserInfo',method:"get"})

//退出登录/api/user/passport/logout  get
export const logout=()=>requests({url:'/user/passport/logout',method:'get'})

//获取用户地址信息 /api/user/userAddress/auth/findUserAddressList  get
export const reqAddressInfo=()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})
 
//获取订单交易信息 /api/order/auth/trade  get
export const reqTradeDetail=()=>requests({url:"/order/auth/trade",method:'get'})

//提交订单的接口 /api/order/auth/submitOrder?tradeNo={tradeNo}  post
export const reqSubmit=(tradeNo,data)=>requests({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method:'post'
})

//获取订单支付信息 /api/payment/weixin/createNative/{orderId}  get
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

//查询订单支付状态 /api/payment/weixin/queryPayStatus/{orderId}  get
export const reqPayStatus=(orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:"get"})

//获取我的订单列表  api/order/auth/{page}/{limit}  get
export const reqMyOrderList=(page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:"get"})