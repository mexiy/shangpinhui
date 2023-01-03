import {reqGetCode,register,login,reqUserInfo,logout} from "@/api"
import{setToken,getToken,removeToken}from "@/utils/token"
const state={
    code:'',
    //当本地存储没有的时候是none，就要进行登录获取，然后本地存储的TOKEN由none变为获得的token值，下次再登录的时候，local storage中就有值了
    //就可以直接登录
    token:localStorage.getItem("TOKEN"),
    userInfo:{}
}
const mutations={
    GETCODE(state,code){
        state.code=code
    },
    USERLOGIN(state,token){
        state.token=token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo=userInfo
    },
    CLEAR(state){
        //把仓库中用户相关信息清空，以及本地存储清空
        state.token="",
        state.userInfo={}
        removeToken()
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
    },
    //登录业务 获取token令牌
   async userLogin({commit},data){
    let result = await login(data)
    //获得的token是用户的唯一标识
    if(result.code==200){
        commit("USERLOGIN",result.data.token)
        //用户成功登录，本地持久化存储token
        setToken(result.data.token)
    }else{
        return Promise.reject(new Error("faile"))
    }

    },
    //获取用户信息
    async getUserInfo({commit}){
        let result = await reqUserInfo();
        if(result.code==200){ 
            commit("GETUSERINFO",result.data)  
        }else{
            //如果登录失败，就清除token
            commit("CLEAR")
            return Promise.reject(new Error("faile"))
        }
        
    },
    //退出登录
    async userLogout({commit}){
        //像服务器发送请求，清除服务器的token
        let result = await logout()
        if(result.code==200){
            //服务器的token清除了，就需要清除本地的token
            //action不能操作state
            commit('CLEAR')
            return 'ok'
        }else{
            return Promise.reject(new Error("faile"))
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