<template>
<div class="wrapper">
  <!-- 标题区域 -->
    <div class="title">
      <p class="title-content">
        {{title}}
      </p>
      <p class="time">发表时间：{{time}}</p>
    </div>
    <!-- 内容区域 -->
    <div class="content">
      <div class="content-body" v-html="this.content"></div>
      <!-- 评论区域 -->
      <comment :id="this.id"></comment>
    </div>
</div>
</template>

<script>
// import axios from 'axios'
import newsInfo from './newsinfo.json'
// 引入评论标签
import comment from '@/components/comment/comment'
export default {
  name: 'NewsInfo',
  mounted () {
    // 发起axios请求新闻数据
    // this.getNewsInfo()
    let id = parseInt(this.id) - 1
    this.content = newsInfo.news[id].content
    this.title = newsInfo.news[id].title
    this.time = newsInfo.news[id].time
  },
  components: {
    comment
  },
  data () {
    return {
      // url参数id
      id: this.$route.params.id,
      title: '',
      content: '',
      time: ''
    }
  },
  methods: {
    // 发送请求函数
    // getNewsInfo () {
    //   axios.get('../../../static/mock/newsinfo.json').then(this.getNewsInfoSuc)
    // },
    // 请求成功回调函数
    // getNewsInfoSuc (res) {
    //   let data = res.data.news
    //   for (let i = 0; i < data.length; i++) {
    //     if (data[i].id === this.id) {
    //       this.content = data[i].content
    //       this.title = data[i].title
    //       this.time = data[i].time
    //       return
    //     }
    //   }
    // }
  }
}

</script>

<style lang="stylus" scoped>
.wrapper
  padding: 0 12px
  .title
     border-bottom:2px solid #000
     padding-top:4px
    .title-content
      font-size:19px
      font-weight: bold
      color:#000
      letter-spacing:3px
      font-family:'Microsoft Yahei'
    .time
      margin:0
  .content
    padding-top:10px
    padding-bottom:50px
    font-family:'Microsoft Yahei'
    font-size:15px
    color:#1a1a1a
    letter-spacing:3px
</style>
