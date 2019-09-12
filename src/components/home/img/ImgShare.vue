<template>
  <div class="imgWrapper">
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item', index == 0 ? 'mui-active' : '']" v-for="(item, index) in catagory" :key="index">{{item}}</a>
        </div>
      </div>
    </div>
    <router-link class="imgBox" v-for="(item, index) in moviesData" :key="index" to="/home/imgdetail">
      <img :src="item.pic" alt="" class="movieImg">
      <div class="movieBackground"></div>
      <p class="movieName">{{item.moviename}}</p>
    </router-link>
  </div>
</template>

<script>
/* eslint-disable */
// import axios from 'axios'
import movies from './movies.json'
import mui from '@/lib/mui/js/mui.js'
export default {
  name: 'ImgShare',
  data () {
    return {
      moviesData: [],
      catagory: [
        '全部', '家居生活', '摄影设计', '明星美女', '空间设计', '户型装饰', '摄影器材', '明星写真', '清纯甜美', '古典美女'
      ]
    }
  },
  mounted () {
    // this.getMoviesData()
    this.moviesData = movies.list
    console.log(this.moviesData)
    // 操作元素最好在mounted内操作
    mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    startX: 0, //初始化时滚动至y
})
  },
  methods: {
    // getMoviesData () {
    //   axios.get('../../../static/mock/movies.json').then(this.getMoviesDataSuc)
    // },
    // getMoviesDataSuc (res) {
    //   console.log(res.data.list)
    //   this.moviesData = res.data.list
    // }
  }
}
</script>

<style lang="stylus" scoped>
.imgWrapper
  width:100%
  .imgBox
    display:inline-block
    width: 50%
    position: relative
    .movieImg
      width: 100%
      display: block
    .movieBackground
      position: absolute
      bottom:0
      height:25px
      background-color:black
      opacity: 0.5
      margin:0
      width:100%
    .movieName
      position: absolute
      bottom:2px
      margin:0
      width:100% 
      color:white
      font-size:13px
      text-indent:5px
</style>
<style scoped>
      .mui-bar~.mui-content .mui-fullscreen {
          top: 44px;
          height: auto;
        }
			.mui-pull-top-tips {
				position: absolute;
				top: -20px;
				left: 50%;
				margin-left: -25px;
				width: 40px;
				height: 40px;
				border-radius: 100%;
				z-index: 1;
			}
			
			.mui-bar~.mui-pull-top-tips {
				top: 24px;
			}
			
			.mui-pull-top-wrapper {
				width: 42px;
				height: 42px;
				display: block;
				text-align: center;
				background-color: #efeff4;
				border: 1px solid #ddd;
				border-radius: 25px;
				background-clip: padding-box;
				box-shadow: 0 4px 10px #bbb;
				overflow: hidden;
			}
			
			.mui-pull-top-tips.mui-transitioning {
				-webkit-transition-duration: 200ms;
				transition-duration: 200ms;
			}
			
			.mui-pull-top-tips .mui-pull-loading {
				/*-webkit-backface-visibility: hidden;
				-webkit-transition-duration: 400ms;
				transition-duration: 400ms;*/
				margin: 0;
			}
			
			.mui-pull-top-wrapper .mui-icon,
			.mui-pull-top-wrapper .mui-spinner {
				margin-top: 7px;
			}
			.mui-pull-bottom-tips {
				text-align: center;
				background-color: #efeff4;
				font-size: 15px;
				line-height: 40px;
				color: #777;
			}
			
			.mui-pull-top-canvas {
				overflow: hidden;
				background-color: #fafafa;
				border-radius: 40px;
				box-shadow: 0 4px 10px #bbb;
				width: 40px;
				height: 40px;
				margin: 0 auto;
			}
			
			.mui-pull-top-canvas canvas {
				width: 40px;
			}
			
			.mui-slider-indicator.mui-segmented-control {
				background-color: #efeff4;
			}
</style>

