

//vue 插件一定暴露一个对象
let myPlugins={};
myPlugins.install = function(Vue,options){
    
    //VUE-prototype.$bus
    //vue-directive
    //vue-component
    //vue-filter
    Vue.directive(options.name,()=>{
        //自定义事件
        console.log("执行该插件")
        
    })
}
export default myPlugins