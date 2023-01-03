import { reqAddressInfo ,reqTradeDetail} from "@/api"
const state={
    address:[],
    tradeDetail:{}
}
const mutations={
    GETADDRESSINFO(state,address){
        state.address=address
    },
    GETTRADEDETAIL(state,tradeDetail){
        state.tradeDetail=tradeDetail
    }
}
const actions={
    //获取用户地址
    async getAddressInfo({commit}){
        let result =await reqAddressInfo()
        if(result.code==200){
            commit("GETADDRESSINFO",result.data)
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    //获取订单详情
    async getTradeDetail({commit}){
        let result = await reqTradeDetail()
        if(result.code==200){
            commit("GETTRADEDETAIL",result.data)
        }else{
            return Promise.reject(new Error("faile"))
        }
    }
}
const getters={
    detailArrayList(state){
        return state.tradeDetail.detailArrayList||[]
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}