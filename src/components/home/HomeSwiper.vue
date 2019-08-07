<template>
    <!-- 循环轮播图 -->
    <mt-swipe @change="handleChange" class="imgWrapper">
        <mt-swipe-item v-for="item in swiperList" :key="item.id">
            <img :src="item.imgUrl" alt="" class='swipe-img'>
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
/* eslint-disable */
export default {
    name: 'HomeSwiper',
    props:['swiperList'],
    mounted(){
        // 根据页面宽度，计算图片高度
         let pageWidth = document.body.clientWidth
         let imgHeight = pageWidth / 3.2
         this.sendHeight(imgHeight)
    },
    methods: {
        handleChange (index) {
            index: {
                auto: 3000
            }
        },
        // 发送子组件高度给父组件
        sendHeight(data){
            this.$emit('getHeight', data)
        }
    }
}
</script>

<style lang="stylus" scoped>
.imgWrapper >>> .mint-swipe-indicators
    bottom:0
.swipe-img
    width: 100%
</style>
