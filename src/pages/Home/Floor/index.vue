<template>
  <!--楼层-->
  <div class="floor">
    <div class="py-container">
      <div class="title clearfix">
        <!-- name -->
        <h3 class="fl">{{ list.name }}</h3>
        <!-- navList -->
        <div class="fr">
          <ul class="nav-tabs clearfix">
            <li class="active" v-for="(navlist, index) in list.navList" :key="index">
              <a href="#tab1" data-toggle="tab">{{ navlist.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-pane">
          <div class="floor-1">
            <div class="blockgary">
              <!-- keywords -->
              <ul class="jd-list">
                <li v-for="(keywords, index) in list.keywords" :key="index">{{ keywords }}</li>
              </ul>
              <!-- imgUrl -->
              <img :src="list.imgUrl" />
            </div>
            <div class="floorBanner">
              <!-- 轮播图 (全局组件)-->
              <Carousel :list="list.carouselList"></Carousel>
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[0]" />
              </div>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[1]" />
              </div>
            </div>
            <div class="split center">
              <img :src="list.bigImg" />
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[2]" />
              </div>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[3]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  props: ['list'],
  mounted() {
    //思考，为什么listContainer轮播图的初识化不能放在mounted中，而要用watch+nextTick
    //因为listcontainer的mounted内有一个dispatch派发，还在动态请求数据来渲染轮播的的主体，所以
    //不能确定再初识化轮播图的时候数据已经完全渲染，所以不能再mounted中初始化轮播图
    //而这里，数据是从父组件传递，mounted当所以数据都挂载结束时调用mounted，所以可以再这里初识化轮播图
    //创建swiper实例
    /*  var mySwiper = new Swiper (
           // '.swiper-container ',
           this.$refs.cur,
           {
       // direction: 'vertical',垂直切换选项
       //不开启上述，默认是水平的
       loop: true, // 循环模式选项
       
       // 如果需要分页器
       pagination: {
         el: '.swiper-pagination',
         //点击小球时也可以切换
         clickable:true
       },
       
       // 如果需要前进后退按钮
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
       
       // 如果需要滚动条
       scrollbar: {
         el: '.swiper-scrollbar',
       }, })  */
  },
 
}
</script>
<style scoped lang="less">
.floor {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      .fl {
        float: left;
        color: #c81623;
        font-size: 20px;
        line-height: 30px;
        margin: 9px 0;
        font-weight: 700;
      }

      .fr {
        float: right;
        
       

        .nav-tabs {
          margin: 10px 0 0;
          display: inline-block;
          

          li {
            float: left;
            line-height: 18px;

            a {
              padding-top: 1px;
              font-weight: 400;
              opacity: 1;

              &::after {
                content: "|";
                padding: 0 10px;
              }
            }

            &:nth-child(7) {
              a {
                &::after {
                  content: "";
                }
              }
            }

            &.active {
              a {
                color: #e1251b;
              }
            }
          }
        }
      }
    }

    .tab-content {
      border-top: 2px solid #c81623;
      border-bottom: 1px solid #e4e4e4;

      .tab-pane {
        .floor-1 {
          height: 360px;
          display: flex;

          .blockgary {
            width: 210px;
            height: 100%;
            background: #f7f7f7;

            .jd-list {
              padding: 15px 0;
              overflow: hidden;

              li {
                list-style-type: none;
                float: left;
                width: 40%;
                margin: 0 10px;
                border-bottom: 1px solid #e4e4e4;
                text-align: center;
                line-height: 26px;
              }
            }

            img {
              width: 100%;
            }
          }

          .floorBanner {
            width: 330px;
            height: 100%;
          }

          .split {
            width: 220px;
            height: 100%;
            position: relative;

            .floor-x-line {
              position: absolute;
              background: #e4e4e4;
              width: 220px;
              height: 1px;
              top: 180px;
            }

            .floor-conver-pit {
              width: 100%;
              height: 50%;

              img {
                width: 100%;
                height: 100%;
                transition: all 400ms;

                &:hover {
                  opacity: 0.8;
                }
              }
            }
          }

          .center {
            border: 1px solid #e4e4e4;
          }
        }
      }
    }
  }
}
</style>