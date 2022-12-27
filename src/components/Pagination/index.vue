<template>
    <div class="pagination">
        <!-- 点击上一页，触发自定义函数 -->
        <button :disabled="pageNo==1" @click="$emit('getpageNo',pageNo-1)">上一页</button>
        <button v-if="startNumAndEndNum.start!=1" @click="$emit('getpageNo',1)" :class="{active:pageNo==1}">1</button>
        <button v-if="startNumAndEndNum.start>1">···</button>
        <button v-for="(page,index)  in  startNumAndEndNum.end" :key="index" v-if="page>=startNumAndEndNum.start" @click="$emit('getpageNo',page)" :class="{active:pageNo==page}">{{ page }}</button>
        <button v-if="startNumAndEndNum.end<totalPage-1">···</button>
        <button v-if="startNumAndEndNum.end!=totalPage" @click="$emit('getpageNo',totalPage)"  :class="{active:pageNo==totalPage}">{{ totalPage }}</button>
        <button :disabled="pageNo==totalPage" @click="$emit('getpageNo',pageNo+1)">下一页</button>

        <button style="margin-left: 30px">{{ total }}</button>
    </div>
</template>
  
<script>
export default {
    name: "Pagination",
    props:["pageNo","pageSize","total","continues"],
    computed: {
        //算出一共有多少页
        totalPage(){
            //向上取整
            return Math.ceil(this.total/this.pageSize)
        },
        //计算出连续页码的起始和结束数字
        //数字也可循环遍历
        //将结束的数字作为条件去循环出结束end大小这么多的页码，然后设置v-if,显示大于start的，这样就可以将中间连续显示页码完成
        startNumAndEndNum(){
            //将this中的continues,pageNo,totalPage保存一份（解构）
            const {continues,pageNo,totalPage}=this
            //先定义两个变量存储起始数字与结束数字
            let start = 0,end=0
            //连续页码为5，若不够五页
            if(continues>totalPage){
                start = 1
                end=totalPage
            }else{
                //正常现象总页数大于continues
                //起始数字
                start = pageNo - parseInt(continues/2);
                //结束数字
                end = pageNo + parseInt(continues/2)
                //把出现不正常的现象（start为负数，零）纠正
                if(start<1){
                    start = 1;
                    end=continues;
                }
               //纠正end 大于总页码的 
               if(end>totalPage){
                start=totalPage-continues+1
                end=totalPage
               }
            }
            return{start,end}
        }
    },
}
</script>
  
<style lang="less" scoped>
.pagination {
    text-align: center;
    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
        }

        &.active {
            cursor: not-allowed;
            background-color: #409eff;
            color: #fff;
        }
    }
}
.active{
    background-color: #bfa;
}
</style>
  