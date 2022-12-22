npm 安装depcheck 检查依赖，一般用于拷贝他人程序时出错，查看是否有依赖缺失

##
App.vue可以看作页面外围的根组件，其mounted只会执行一次，
所以我们可以将三级联动派发的action，用来获取商品数据的代码可以放在app.vue中，避免每次使用typenav都要进行派发