<template>
    <!-- 轮播图 -->
    <div class="swiper-container" id="floor2Swiper" ref="cur">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(carousel, index) in list" :key="carousel.id">
                <img :src="carousel.imgUrl" />
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>
<script>
import Swiper from 'swiper';
export default {
    name: "Carousel",
    props: ["list"],
    watch: {
        list: {
            //立即监听：不管你数据有没有变化，上来就立即监听一次
            //为什么watch监听不到list，因为list是父组件给你，没有发生过变化
            immediate: true,
            handler() {
                //只能监听到数据已经有了，还是不能判断v-for是否完成渲染
                this.$nextTick(() => {
                    var mySwiper = new Swiper(
                        /* '.swiper-container ', */
                        this.$refs.cur,
                        {
                            /* direction: 'vertical', // 垂直切换选项 */
                            //不开启上述，默认是水平的
                            loop: true, // 循环模式选项

                            // 如果需要分页器
                            pagination: {
                                el: '.swiper-pagination',
                                //点击小球时也可以切换
                                clickable: true
                            },

                            // 如果需要前进后退按钮
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },

                            // 如果需要滚动条
                            scrollbar: {
                                el: '.swiper-scrollbar',
                            },
                        })
                })
            }
        }
    }
};
</script>
<style scoped>

</style>
