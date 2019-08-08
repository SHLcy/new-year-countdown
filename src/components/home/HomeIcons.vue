<template>
   <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <span class="mui-icon">
                        <img src="@/assets/menu1.png" alt="" class="icon-img">
                    </span>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon">
                        <img src="@/assets/menu2.png" alt="" class="icon-img">
                    </span>
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon">
                        <img src="@/assets/menu3.png" alt="" class="icon-img">
                    </span>
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon">
                        <img src="@/assets/menu4.png" alt="" class="icon-img">
                    </span>
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon">
                        <img src="@/assets/menu5.png" alt="" class="icon-img">
                    </span>
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon">
                        <img src="@/assets/menu6.png" alt="" class="icon-img">
                    </span>
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
/* eslint-disable */ 
export default {
    name: 'HomeIcons'
}
</script>
<style lang="stylus" scoped>
.mui-content>>>.mui-table-view
    margin-top:0
.mui-content>>>.mui-table-view-cell
    border:none
.mui-grid-view
    background-color: white
    .icon-img
        width:60px
    .mui-media-body
        font-size:13px
</style>
