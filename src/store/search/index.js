 //state存储数据的地方
 const state={
    
}
 //mutations:修改state的唯一手段
const mutations={
      
}
 //action：处理action，可以书写自己的业务逻辑，可以处理异步
 //这里可以书写业务逻辑，不能直接修改state，实际上修改还是使用了mutations进行修改
const actions={
      
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