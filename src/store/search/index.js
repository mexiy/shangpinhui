import { reqGetSearchInfo } from "@/api"
//state存储数据的地方
 const state={
    searchList:{}
}
 //mutations:修改state的唯一手段
const mutations={
    GETSEARCHINFO(state,searchList){
        state.searchList=searchList
    } 
}
 //action：处理action，可以书写自己的业务逻辑，可以处理异步
 //这里可以书写业务逻辑，不能直接修改state，实际上修改还是使用了mutations进行修改
const actions={
    //获取search的数据
    //commit是一个上下文对象，用来提交给mutations
    //action中可以带有两个参数，第一个是一个上下文对象，commit,另一个叫做载荷，是在dispatch中第二个参数传递过来，用来传递参数
    //我们这样写params={}，表明若是传递了，就放在对象中，若没有传递就默认为一个空对象
     async getSearchInfo({commit},params={}){
        let result =await reqGetSearchInfo(params)//该接口需要传递参数，至少要有一个空对象
        if(result.code==200){
            commit("GETSEARCHINFO",result.data)
        }
     } 
}
 //getters：可以理解为计算属性，用于简化仓库数据，
 //计算属性，在项目当中，是为了简化数据
const getters={
    //当前形参state，当前仓库的state，并非大仓库的state
    goodsList(state){
        return state.searchList.goodsList
    },
    trademarkList(state){
        return state.searchList.trademarkList
    },
    attrsList(state){
        return state.searchList.attrsList
    }
}
//对外暴露Store 类的一个实例
export default {
    state,
    mutations,
    actions,
    getters
}