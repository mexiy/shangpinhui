 import { reqCategoryList } from "@/api"
 //state存储数据的地方
 const state={ 
    categoryList:[]
}
 //mutations:修改state的唯一手段
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    }
}
 //action：处理action，可以书写自己的业务逻辑，可以处理异步
 //这里可以书写业务逻辑，不能直接修改state，实际上修改还是使用了mutations进行修改
const actions={
    //通过api里面的接口函数调用，向服务器请求，获取服务器的数据
     async categoryList({commit}){
        let result = await reqCategoryList() 
       if(result.code==200){
        commit('CATEGORYLIST',result.data)
       }
      }
}
 //getters：可以理解为计算属性，用于简化仓库数据，
const getters={}
//对外暴露Store 类的一个实例
export default {
    state,
    mutations,
    actions,
    getters
}