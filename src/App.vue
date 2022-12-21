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
