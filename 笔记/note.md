npm 安装depcheck 检查依赖，一般用于拷贝他人程序时出错，查看是否有依赖缺失

##
App.vue可以看作页面外围的根组件，其mounted只会执行一次，
所以我们可以将三级联动派发的action，用来获取商品数据的代码可以放在app.vue中，避免每次使用typenav都要进行派发

##
mapState()函数接收了一个对象。
对象的第一个属性是string类型的，count: 'count', 这条语句映射出了this.count， 值等于store.state.count的值。

对象的第二个属性是一个箭头函数，name: (state) => state.name,，映射 this.name 为 store.state.name的值。

对象的第三个属性是一个string类型，nameAlias: 'name'，映射 this.nameAlias 为 store.state.name的值， 和第一个属性的用法本质是一致的，不过这里映射出的计算属性的名称与 state 的子节点名称不同。

对象的第四个属性是一个普通函数，普通函数和箭头函数的不同之处在于，普通函数中的this指向了vue实例，因为可以访问到当前组件的局部状态，比如this.tempcount。
