<template>
  <div class="comment-wrapper">
    <h3 class="comment">发表评论</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容（最多120字）" maxlength="120" v-model="user_comment"></textarea>
    <mt-button type="primary" size="large" @click="sendComment">发表评论</mt-button>
    <div class="comment-list">
      <div class="comment-item" v-for="(item, index) in comments" :key="item.id">
        <div class="comment-title">第{{index+1}}楼 &nbsp;&nbsp;{{item.nick}}&nbsp;&nbsp;发表时间：{{item.time}}</div>
        <div class="comment-body">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
// 引入Toast
import { Toast } from 'mint-ui'
export default {
  name: 'comment',
  data () {
    return {
      // 默认展示第一页数据
      pageIndex: 1,
      // 定义评论数据
      comments: [],
      // 该用户评论
      user_comment: ''
    }
  },
  mounted () {
    this.getComment()
  },
  props: [ 'id' ],
  methods: {
    // axios发送请求
    getComment () {
      axios.get('/api/newscomment.json').then(this.getCommentsSuc)
    },
    // axios请求成功回调函数
    getCommentsSuc (res) {
      this.comments = res.data.comments
    },
    // 发送评论
    sendComment () {
      // 当用户提交评论内容为空时，弹出提示
      if (this.user_comment === '') {
        Toast({
          message: '不能为空',
          position: 'bottom',
          duration: 5000
        })
        return
      }
      // 1，修改本地数据
      let current = this.getDate()
      let content = {
        'nick': 'lcy',
        'content': this.user_comment,
        'time': current
      }
      // 拼接至本地comments数据最前端
      this.comments.unshift(content)
      this.user_comment = ''
    },
    // watch: {
      // 监控本地comments数据，有改动后发送至服务器
      // 未配置服务器，暂不发送
    // },
    // 获得当前时间
    getDate () {
      let myDate = new Date()
      //获取当前年
      let year = myDate.getFullYear()
      //获取当前月
      let month = myDate.getMonth() + 1
      //获取当前日
      let date = myDate.getDate()
      //获取当前小时数(0-23)
      let h = myDate.getHours()
      //获取当前分钟数(0-59)
      let m = myDate.getMinutes()
      // 获取当前秒数（0-59）
      let s = myDate.getSeconds();
      // 拼接
      let now = year + '-' + this.conver(month) + "-" + this.conver(date) + " " + this.conver(h) + ':' + this.conver(m) + ":" + this.conver(s)
      return now
    },
    // 个位数的月份，日期，时间前加0
    conver(s) {
      return s < 10 ? '0' + s : s;
    }
  }
}
</script>

<style lang="stylus" scoped>
.comment-wrapper
  .comment
    font-size:18px
  textarea
    font-size: 14px
    margin-bottom:2px
    height: 85px
  .comment-item
    letter-spacing:1px
    margin-top:3px
    .comment-title
      font-size:13px
      line-height:30px
      background-color: #ccc
    .comment-body
      line-height:45px
      text-indent:2em
</style>
