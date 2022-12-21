<template>
    <div>
        <!--萨基联动全局组件 ：三级联动已经被注册为全局组件了，可以直接使用-->
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor></Floor>
        <Floor></Floor>
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
import { mapState } from "vuex"


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
  
    
}
</script>
<style scoped>

</style>