import {reqGetCode,register} from "@/api"
const state={
    code:''
}
const mutations={
    GETCODE(state,code){
        state.code=code
    }
}
const actions={
    //获取验证码
    async getCode({commit},phone){
        let result =await reqGetCode(phone)
        if(result.code==200){
            commit("GETCODE",result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    //注册
    async userRegister({commit},user){
        let result =await register(user)
        if(result.code==200){
            return "ok"
        }
        else{
            //返回的是Promise.reject(new Error("")),才说明执行失败，从而能被try,catch，catch到失败
            return Promise.reject(new Error("注册失败"))
        }
    }
}
const getters={}
export default {
    state,
    mutations,
    actions,
    getters,
}