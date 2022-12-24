<template>
    <div>
        <!--萨基联动全局组件 ：三级联动已经被注册为全局组件了，可以直接使用-->
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <!--通过遍历，遍历出两个floor -->
        <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"></Floor>
        <Brand></Brand>
    </div>
</template>
<script>
/* 引入其余德组件 */
import ListContainer from "@/pages/Home/ListContainer"
import Recommend from "@/pages/Home/Recommend"
import Rank from "@/pages/Home/Rank"
import Like from "@/pages/Home/Like"
import Floor from "@/pages/Home/Floor"
import Brand from "@/pages/Home/Brand"
import {mapState} from "vuex"
export default {
    name: "",
    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    },
  mounted(){
    //派发action，获取floor数据
    this.$store.dispatch("getFloorList")
  },
 computed:{
    ...mapState({
        floorList:state=>state.home.floorList
    })
 }
    
}
</script>
<style scoped>

</style>