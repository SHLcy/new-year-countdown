<template>
    <div class="wrapper">
        <!-- 轮播图 -->
        <home-swiper :swiperList="swiperList" class='clearfix' @getHeight='getHeightFromChild'  id='imgs'></home-swiper>
        <!-- icons区 -->
        <home-icons></home-icons>
    </div>
</template>

<script>
// 引入轮播图
import HomeSwiper from './home/HomeSwiper'
// 引入axios
import axios from 'axios'
// 引入icons
import HomeIcons from './home/HomeIcons'
export default {
/* eslint-disable */ 
    name: 'HomeContainer',
    data () {
        return {
            swiperList:'',
            imgHeight:''
        }
    },
    components: {
        HomeSwiper,HomeIcons
    },
    methods: {
        // axios获取轮播图数据
        getImg () {
            axios.get('/api/images.json').then(this.getImgSuc)
        },
        // 获取数据成功返回结果
        getImgSuc(res){
            this.swiperList = res.data.data.swiperList
        },
        // 从子组件得到图片wrapper的高度
        getHeightFromChild(data){
            this.imgHeight = data
        }
    },
     mounted () {
        // 页面初始化时，获取轮播图数据
         this.getImg()
        //  将从子组件获得的高度给父组件
         document.getElementById('imgs').style.height = this.imgHeight + 'px'
    }
}
</script>

<style lang="stylus" scoped>
    body
        background-color : white
</style>
