<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="changeIndex1" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 过渡动画 -->
        <transition name="sort">
        <!-- 三级联动 -->
        <div class="sort" v-show="show">
          <div class="all-sort-list2" @click="goSearch">
            <!-- 一级分类                      添加一个动态类名，当currentIndex等于它某个index给他添加一个类名cur -->
            <div
              class="item bo"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              :class="{ cur: currentIndex == index }"
            >
              <h3 @mouseenter="changIndex(index)">
                <!-- 绑定自定义属性的方法：data-(驼峰式命名的自定义属性名)
                获取自定义属性的方法element.dataset
                (这里获取的自定义属性名是浏览器自动将驼峰式都转化为小写了) -->
                <a
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                  >{{ c1.categoryName }}</a
                >
                <!--  <router-link to="/search">{{c1.categoryName}}</router-link> -->
              </h3>
              <!-- 二级三级分类，鼠标没移到对应的一级分类时，二三级display为none
          当我们鼠标放在某个一级分类上，就将其对应的二三级分类的display设置为block -->
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex == index ? 'block' : 'none' }"
              >
                <div
                  class="subitem"
                  v-for="(c2, index) in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                        >{{ c2.categoryName }}</a
                      >
                      <!-- <router-link to="/search">{{c2.categoryName}}</router-link> -->
                    </dt>
                    <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                      <a
                        :data-categoryName="c3.categoryName"
                        :data-category3Id="c3.categoryId"
                        >{{ c3.categoryName }}</a
                      >
                      <!-- <router-link to="/search">{{c3.categoryName}}</router-link> -->
                    </em>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        </transition>
        
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  //组件挂载完毕，可以像服务器发请求
  //生命周期函数，挂载完毕后执行
  data() {
    return {
      //存储用户鼠标移到哪一个一级分类
      currentIndex: -1, //谁都没有移上
      show:true
    };
  },
  mounted() {
    //通知vuex发请求，获取数据，存储于仓库当中
    //进行派遣，派发action
    /* this.$store.dispatch("categoryList"); */
    //如果是在search页面，将sort隐藏
    if(this.$route.path!='/home'){
      this.show=false
    }
  },
  computed: {
    ...mapState({
      //右侧需要的是一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
      //注册一个参数state，其实就是大仓库中的数据
      categoryList: (state) => {
        return state.home.categoryList;
      },
    }),
  },
  methods: {
    //节流
    changIndex: throttle(function (index) {
      //鼠标进入修改响应式数据currentIndex数据
      this.currentIndex = index;
    }, 50),
    //鼠标移出的回调，currentIndex变为-1，这样就取消了鼠标进入的背景样式
    changeIndex1() {
      this.currentIndex = -1;
      //当现在不是在home内时，可以配合enterShow来实现鼠标移入移出控制一级分类的展出
      if(this.$route.path!="/home"){
        this.show=false
      }
    },
    //编程式路由
    goSearch: function (event) {
      //可以获得触发事件的节点
      let element = event.target;

      //节点有一个dataset属性，可以获取节点自定义属性与属性值
      /* let { a,b,c}={"a":3,“b”:6,"c":23}
      console.log(a)//3
      let { catagoryname } = element.dataset;会在后面的对象中找到catagoryname并对其赋值

      */
      //所以当我们点击的是a标签的话，我们才有catagoryname

      let { categoryname, category1id, category2id, category3id } = element.dataset;
      /* console.log(element.dataset) */
      if (categoryname) {
        //整理路由的参数
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        /* this.$router.push("/search"); */
        //一级分类二级分类，三级分类的a标签
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else{
          query.category3Id = category3id;
        }
        //整理完参数
        //将两个参数变为一个参数
        location.query = query;
        //判断：如果路由跳转的时候，带有params参数，捎带传递过去
        if(this.$route.params){
          location.params=this.$route.params
        }

        this.$router.push(location);
        console.log(location)
        
      }
    },
    enterShow(){
      this.show=true
    }
  },
};
</script>
<style lang="less" scoped>
.type-nav { 
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      overflow: hidden;

      .all-sort-list2 {
        
        
        .item {
          h3 {
            line-height: 27.2px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
    //定义动画的样式
    //动画进入前
    .sort-enter{
     height: 0px; 
    }
    //动画进入后
    .sort-enter-to{
      height: 461px;
    }
    //设置动画的时间，速率
    .sort-enter-active{
      transition: all .5s linear;
    }
  }
}
.cur {
  background: skyblue;
}
</style>
