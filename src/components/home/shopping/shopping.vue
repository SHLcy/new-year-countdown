<template>
  <div class="goodList">
    <router-link class="goodItem" v-for="(item, index) in goodList" :key="index" to="/home/goodsinfo">
      <img :src="item.pic" alt="">
      <h1 class="itemTitle">{{item.title}}</h1>
      <div class="itemInfo">
        <p class="sell">
          <span class="hot">热卖中</span>
          <span class="left">剩{{item.remainder}}件</span>
        </p>
        <p class="price">
          <span class="now">{{item.newPrice}}</span>
          <span class="old">{{item.oldPrice}}</span>
          <span class="location">{{item.location}}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'shopping',
  data () {
    return {
      goodList: []
    }
  },
  mounted () {
    this.getGoodList()
  },
  methods: {
    getGoodList () {
      axios.get('/api/goodList.json').then(
        (res) => {
          this.goodList = res.data.list
          console.log(this.goodList)
        }
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
.goodList
  display: flex
  flex-wrap:wrap
  padding: 7px
  justify-content: space-between
  padding-bottom:55px
  .goodItem
    width:49%
    border: 1px solid #ccc
    box-shadow: 0 0 8px #ccc
    margin: 3px 0
    padding:2px
    img
      width: 100%
    .itemTitle
      font-size: 13px
      margin:0
      font-weight: normal
      height: 20px
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      padding: 0 6px
    .itemInfo
      p
        margin:0
        padding:5px
      .sell
        display:flex
        justify-content: space-between
        font-size: 10px
        padding:0 6px
        .hot
          font-size: 12px
          color:red
          height 13px
          line-height: 13px
          border: 1px solid red
        .left
          font-size: 12px
          height 13px
          line-height: 13px
      .price
        padding-bottom:0
        .location
          float:right
          font-size:12px
</style>
<style scoped>
.old{
  text-decoration: line-through;
  font-size: 16px;
  margin-left:8px;
}
.now{
  color: red;
  font-size: 16px;
}
</style>
