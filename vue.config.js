module.exports= {
  lintOnSave:false,
  //代码跨域
  devServer: {
    //proxy代理
    proxy:{
      "/api":{
        target:"http://gmall-h5-api.atguigu.cn",
       /*  pathRewrite:{'^/api':''}, */
      },
    },
  },
  //打包时去除map
  productionSourceMap:false
}
