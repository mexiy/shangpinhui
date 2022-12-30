import { reqGetGoodsInfo ,reqAddOrUpdateShopCart} from "@/api"
const state={
    goodsInfo:{}
}
const mutations={
    GETGOODSINFO(state,goodsInfo){
        state.goodsInfo=goodsInfo
    }
}
const actions={
    async getGoodsInfo({commit},skuId){
        let result =await reqGetGoodsInfo(skuId)
        if(result.code==200){
            commit("GETGOODSINFO",result.data)
        }
    },
    //将商品添加到购物车中，async函数返回的是一个promise对象，有两个状态，成功，失败
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        //用户加入购物车，服务器写入数据成功，并没有返回其他的数据，只是返回code=200，代表这次操作成功
        //服务器没有返回data,所以不用三连环
        //加入购物车后会获得一个状态码，用来判断是成功还是失败，进行相应的操作
        //有async的返回的是promise
        let result =await reqAddOrUpdateShopCart(skuId,skuNum)
        //当前的这个函数弱国执行返回promise
        if(result.code==200){
            return "ok"
        }else{
             //代表加入购物车失败
             return Promise.reject(new Error("faile"))
        }  
    }
}
const getters={
    categoryView(state){
        //因为在没有获得数据之前goodsInfo为空，空对象的categoryView是undefined，undefined传到详情页，undefined加点后跟属性，就会报错
        //所以让他最起码返回的是一个空对象，空对象加点才不会报错
        return state.goodsInfo.categoryView||{}
    },
    skuInfo(state){
        return state.goodsInfo.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.goodsInfo.spuSaleAttrList||{}
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}