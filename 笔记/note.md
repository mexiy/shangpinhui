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

##在我们学习了vue之后操作Dom我们就可以不用选择器了，可以用ref
将节点中的id换为ref，然后获取节点用this.$refs.

api文件夹下。request是对ajax的重写，所以request.get其实就是ajax.get

当面包屑中的关键字清除以后，需要让兄弟组件Header组件中的关键字清除，也就是搜索框内的文本清除
这就涉及到了组件间的通讯
props:父子通讯
自定义事件：子父(例如在search中的trademarkInfo)
vuex：仓库数据
插槽：父子
pubsub-js
$bus:全局事件总线

开发某一个页面的步骤
1：静态组件
2：发请求
3：vuex
4：动态展示组件