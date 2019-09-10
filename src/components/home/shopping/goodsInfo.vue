<template>
  <div class="goodsInfo">
    <!-- 图片区域 -->
    <div class="imgWrapper">
      <img :src="goodsData.img" alt="">
    </div>
    <!-- 订单区域 -->
    <div class="order">
      <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="ball" v-show="ballFlag" ref="ball"></div>
      </transition>
      <h1>{{goodsData.title}}</h1>
      <div class="orderDetail">
        <div class="orderPrice">
          <span class="old">市场价：</span>
          <span class="oldPrice">￥2599</span>
          <span class="new">销售价：</span>
          <span class="newPrice">￥{{goodsData.price}}</span>
        </div>
        <div class="orderCount">
        购买数量:
          <div class="mui-numbox" data-numbox-min="0" :data-numbox-max="goodsData.max_quantity">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input class="mui-input-numbox" type="number" value="0" ref="numbox"/>
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
          </div>
        </div>
        <div class="buttons">
            <div class="mui-btn mui-btn-primary">立即购买</div>
            <button type="button" class="mui-btn mui-btn-danger" @click="addToShopCar">加入购物车</button>
        </div>
      </div>
    </div>
    <div class="goodsDetails">
      <h1>商品参数</h1>
      <div class="goodsParams">
        <p>商品代号：SD2932214404</p>
        <p>库存情况：{{goodsData.max_quantity}}件</p>
        <p>上架时间：2015-04-20 01：19：40</p>
      </div>
      <div class="buttonsMore">
        <button type="button" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined">图文介绍</button>
         <button type="button" class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined">商品评论</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */ 
  name: 'GoodsInfo',
  data () {
    return{
      ballFlag: false,
      id: "SD2932214404",
      goodsData:{
        id:"SD2932214404",
        title: "苏泊尔（SUPOR）电压力锅 5L高压锅",
        max_quantity: 50,
        price:2199,
        img:"//m.360buyimg.com/mobilecms/s843x843_jfs/t1/29946/39/15313/359420/5cafebc9E92a636e3/39b8335a41a1bde2.jpg!q70.dpg.webp",
        count: 0
      }
    }
  },
  methods: {
    // 显示小球
    addToShopCar () {
      this.ballFlag = !this.ballFlag
      // 提交到vuex
      let value = parseInt(this.$refs.numbox.value)
      let count = parseInt(this.goodsData.count)
      if(value !== 0){
        if(count !== 0){
          count += value
        }
        else{
          count = value
        }
        console.log(count)
        this.goodsData.count = count
        this.$store.commit('changeCount', this.goodsData)
        this.$refs.numbox.value = 0
      }
     
    },
    beforeEnter (el) {
      el.style.transform = "translate(0,0)"
    },
    enter (el, done) {
      el.offsetWidth // 没加会没动画
      // 获取位置：domObj.getBoundingClientRect()
      // 获取小球在页面中位置
      const ballPosition = this.$refs.ball.getBoundingClientRect()
      // 获取购物车小标在页面的位置
      const countPosition = document.getElementById('count').getBoundingClientRect()
      // 计算出要走的left值
      const leftDistance = countPosition.left - ballPosition.left
      const topDistance = countPosition.top - ballPosition.top
      el.style.transform = "translate("+leftDistance+"px, "+topDistance+"px)" 
      el.style.transition = "all 0.5s cubic-bezier(.46,-0.56,1,.64)"
      done()
    },
    afterEnter (el) {
      this.ballFlag = !this.ballFlag
    },
    // numChange () {
    //     this.goodsData.count = parseInt(this.$refs.numbox.value)
    // }
  }
}
</script>

<style lang="stylus" scoped>
.goodsInfo >>> .mui-numbox
  height:26px
  margin-left:4px
.goodsInfo >>> .mui-btn-block
  padding:4px 0
.goodsInfo
  padding-bottom:50px
  background-color: #eee
  overflow: hidden
  .imgWrapper
    margin: 8px
    img
      width:100%
      display:block
  .order
    background-color: #fff
    margin: 8px
    position: relative
    h1
      font-size:18px
      font-weight:normal
      margin:0
      padding:15px
      border-bottom:1px solid #eee
    .orderDetail
      padding:20px 15px 20px 15px
      font-size: 15px
      .orderPrice
        margin-bottom:8px
        .oldPrice
          text-decoration:line-through
          margin-right:4px
        .newPrice
          color:red
      .buttons
        margin-top:8px
    .ball
      width:15px
      height: 15px
      border-radius: 50%
      background-color: red
      position:absolute
      z-index:99
      top:103px
      left:141px
  .goodsDetails
    margin: 8px
    background-color: #fff
    h1
      padding:15px
      font-size: 18px
      border-bottom:1px solid #ccc
    .goodsParams
      padding:15px
      border-bottom:1px solid #eee
      p
        font-size : 13px
        margin-bottom:5px
    .buttonsMore
      padding: 10px

</style>
