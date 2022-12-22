<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- 在Home,Search显示 ，在登录，注册隐藏-->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header"
/* import HelloWorld from './components/HelloWorld.vue' */
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
   /*  HelloWorld, */
    Header,
    Footer
    
  },
  mounted(){
    //通知vuex发请求，获取数据，存储于仓库当中
    //进行派遣，派发action
    this.$store.dispatch("categoryList");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
 
}
</style>
