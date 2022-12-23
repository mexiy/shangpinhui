//先引入mockjs对象
import Mock from "mockjs"
// 把json数据格式引入进来
//webpack默认对外暴露的：图片，json数据格式
import banner from "./banner.json";
import floor from "./floor.json"

//mock数据：第一个参数请求地址 第二个参数：请求数据
Mock.mock("/mock/banner",{code:200,data:banner});//模拟首页大的轮播图
Mock.mock("/mock/floor",{codeJ:200,data:floor});
