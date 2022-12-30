<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide, index) in skuImageList" :key="slide.id">
        <img :src="slide.imgUrl" :class="{active:currentIndex==index}" @click="changeCurrentIndex(index)">
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Swiper from 'swiper'
export default {
  data(){
    return{
      currentIndex:0
    }
  },
  name: "ImageList",
  props: ["skuImageList"],
  computed: {
    ...mapGetters(["skuInfo"])
  },
  watch: {
    //监听数据：可以保证数据一定是ok的，但是不能保证v-for中的数据已经全部渲染
    skuImageList(newValue, oldValue) {
      //下一次dom更新循环结束之后执行延迟回调，在修改数据之后立即使用这个方法，获取更新后的dom
      this.$nextTick(() => {
          new Swiper(
          this.$refs.cur,
          {
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            //显示几个图片
            slidesPerView:3,
            //每一次移动几块
            slidesPerGroup:1
          })
      })
    }
  },
  methods:{
    //选择显示的图片
    changeCurrentIndex(index){
      this.currentIndex=index
      //通知兄弟组件，当前的索引值为
      this.$bus.$emit("getIndex",this.currentIndex)
    }
  }

}
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;

    &::after {
      font-size: 12px;
    }
  }
}
</style>