<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p v-if="!userName">
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register">免费注册</router-link>
          </p>
          <p v-else>
            <a>{{ userName }}</a>
            <a @click="logout">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <router-link to="/center/myorder">我的订单</router-link>
          <router-link to="/shopcart">我的购物车</router-link>

          <a href="###" @click="message">我的尚品汇</a>

          <a href="###" @click="message">尚品汇会员</a>

          <a href="###" @click="message">企业采购</a>

          <a href="###" @click="message">关注尚品汇</a>

          <a href="###" @click="message">合作招商</a>

          <a href="###" @click="message">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword" style="background-color: #dff9fb;"/>
          <button class="sui-btn btn-xlarge btn-danger" @click="Search" :disabled="keyword == ''">搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    Search() {
      /* 路由传递参数 */
      /* 第一种，字符串形式 */
      /* this.$router.push('/search/'+this.keyword+"?k="+this.keyword.toUpperCase()) */
      /* 第二种，模板字符串 */
      /* this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`) */
      /* 第三种，对象 */
      /*  this.$router.push(
      {
        name:'search',
        params:{keyword:this.keyword ||undefined},
   
    }) */
      //如果路由有query参数带上,
      let location = { name: "search", params: { keyword: this.keyword || undefined } };
      if (this.$route.query.categoryName) {
        location.query = this.$route.query;
      }
      this.$router.push(location);



    },
    async logout() {
      //退出登录
      //需要发请求，通知服务器退出，服务清除一些数据：token
      //清除项目中
      try {
        await this.$store.dispatch('userLogout')
        //退出成功后，回到首页
        /* this.$router.push("/home") */
      } catch (error) {
        alert(error.message)
      }
    },
    message(){
      alert('功能暂未上线，敬请期待!!!')
    }
  },
  mounted() {
    //通过全局事件总线清除关键字
    /* vm.$emit( event, arg ) //触发当前实例上的事件
      vm.$on( event, fn );//监听event事件后运行 fn； */
    //监听clear事件，在得到search页面发来的触发信号执行
    this.$bus.$on("clear", () => {
      this.keyword = "";
    })
  },
  computed: {
    //用户信息
    userName() {
      return this.$store.state.user.userInfo.name
    }
  }
};
</script>
<style scoped lang="less">
.header {
  &>.top {
    background-color:#eb4d4b;
    height: 40px;
    line-height: 30px;

    .container {
      background-color:#eb4d4b;
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      line-height: 40px;
      font-size: 16px;
      

      .loginList {
        float: left;

        a {
          padding-left: 10px;
          color: white;
          &:hover {
            color:blue
          }
        }


        p {
          float: left;
          margin-right: 10px;
          color: black;


          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;
          color:black;

          &+a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  &>.bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
