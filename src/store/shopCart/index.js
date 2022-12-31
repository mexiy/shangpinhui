import { reqCartList,reqDeleteCartById,reqUpdateCheckedById } from "@/api"
const state={
    cartList:[]
}
const mutations={
    GETCARTLIST(state,cartList){
        state.cartList=cartList
    }
}
const actions={
    async getShopCartList({commit}){
    let result = await reqCartList()
    if(result.code==200){
        commit("GETCARTLIST",result.data)
    }
    },
    //删除购物车中某个产品
    async deleteCartListById({commit},skuId){
        let result =await reqDeleteCartById(skuId);
        if(result.code==200)
        return "ok"
        else{
            return Promise.reject(new Error("faile"))
        }
    },
    //修改购物车某一个产品的选中状态
    async UpdateCheckedById({commit},{skuId,isChecked}){
        let result =await reqUpdateCheckedById(skuId,isChecked);
        if(result.code==200){
            return "ok"
        }else{
            return Promise.reject(new Error("faile"))
        }

    }
}
const getters={
    cartList(state){
        return state.cartList[0]||{}
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}