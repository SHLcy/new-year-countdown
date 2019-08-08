<template>
  <div class="newsWrapper">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <a :href="item.weburl">
          <img class="mui-media-object mui-pull-left" :src="item.pic">
          <div class="mui-media-body newsTitle">{{item.title}}</div>
          <div class="small">
            <p class="small-left">发表时间：{{item.time}}& nbsp& nbsp& nbsp& nbsp</p>
            <p class="small-right">{{item.src}}</p>
          </div>
        </a>
      </li>
    </ul>
    </div>
</template>

<script>
/* eslint-disable */
// 引入axios
// import axios from 'axios'
import news from './news.json'
export default {
  name: 'NewsList',
  mounted () {
      // 页面挂在后发送ajax请求
      // this.sendNewsListReq()
      this.newsList = news.data.newsList
  },
  data () {
    return {newsList: []}
  },
  methods: {
      // 发送ajax请求函数
      // sendNewsListReq () {
      //   console.log('send')
      //   axios.get('/api/news.json').then(this.getNewsListSuc).catch((err)=>{
      //     console.log(err)
      //   })
      // },
      // 接收数据成功回调函数
      // getNewsListSuc (data) {
      //   let newsList = JSON.parse(data.data)
      //   console.log(typeof(newsList))
      // }
  } 
}
</script>

<style lang="stylus" scoped>
  .newsWrapper >>> .mui-table-view .mui-media-object
    max-width:100px
    height: auto
  .newsWrapper
    padding-bottom:50px
    .newsTitle
      overflow: hidden
      text-overflow:ellipsis
      white-space: nowrap
      font-size:15px
    .small
      overflow:hidden
      max-width:190px
      .small-left
        display: inline-block
        float:left
        color:gray
        font-size:13px
        width:188px
        overflow: hidden
        text-overflow:ellipsis
        white-space: nowrap
      .small-right
        float:left
        color:gray
        font-size:10px
</style>
