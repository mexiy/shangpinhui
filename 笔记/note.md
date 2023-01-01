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


H5的新特性：

1. 用于绘画 canvas 元素。

2. 用于媒介回放的 video 和 audio 元素。

3. 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；sessionStorage 的数据在浏览器关闭后自动删除。

4. 语意化更好的内容元素，比如 article、footer、header、nav、section。

5. 表单控件，calendar、date、time、email、url、search。

css3的新特征:

选择器。

2.和透明度。

3. 多栏布局。

4. 多背景图。

5.Word Wrap。

6. 文字阴影。

7.@font-face属性。

8.圆角(边框半径)。

9.边框图片。

10.盒阴影。

11. 盒子大小。

12. 媒体查询。

13.语音。 

##本地存储，会话存储一般存的都是字符串，而不是对象
##使用every可以遍历数组，判断数组中的某个元素是否全为1，可以用在复选框全选判断中
this.cartInfoList.every(item=>item.isChecked==1)，如果cartinfolist中的所以项中的ischecked都是1，那么就返回true

##
Promise.all([p1,p2,p3])
p1|p2|p3每一个都是一个promise对象，如果有一个promise失败，都失败，如果都成功，返回成功

##
assets 放的是所以组件公用的静态资源，打包时放在组件文件夹下
pages静态资源放在dist文件夹下

返回的是Promise.reject(new Error("")),才说明执行失败，从而能被try,catch，catch到失败
所以当我们想表明这是失败回调时，要返回promise.reject