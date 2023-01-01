import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api"
const state = {
    cartList: []
}
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}
const actions = {
    async getShopCartList({ commit }) {
        let result = await reqCartList()
        if (result.code == 200) {
            commit("GETCARTLIST", result.data)
        }
    },
    //删除购物车中某个产品
    async deleteCartListById({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200)
            return "ok"
        else {
            return Promise.reject(new Error("faile"))
        }
    },
    //修改购物车某一个产品的选中状态
    async UpdateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedById(skuId, isChecked);
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error("faile"))
        }

    },
    //删除全部勾选的产品
    //在action中·在一个任务中也可以使用dispatch派发其他的任务，并且也可以获取到state中的数据
    //利用上下文对象中的方法
    deletAllCheckedCart({ dispatch, getters }) {
        //context:小仓库，commit，getters,dispatch,state,在action中都可以使用
        let promiseAll = []
        getters.cartList.cartInfoList.forEach(element => {
            //将选中的删除,每删一个都生成一个promise
            let promise = element.isChecked == 1 ? dispatch("deleteCartListById", element.skuId) : '';
            //将每一次返回的promise添加到promiseAll中
            promiseAll.push(promise)
        });
        //只要全部的promise都成功，返回成功
        return Promise.all(promiseAll)
    },

    //全选选中
    //当全选按钮选中时，让每个商品都选中
    allChecked({dispatch,state},checked){
        let promiseAll=[]
        state.cartList[0].cartInfoList.forEach(element=>{
       let promise= dispatch("UpdateCheckedById",{skuId:element.skuId,isChecked:checked})
       promiseAll.push(promise)
        });
        return Promise.all(promiseAll)
    }
}
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}