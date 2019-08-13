<template>
  <div class="goodsInfo">
    <!-- 图片区域 -->
    <div class="imgWrapper">
      <img src="//m.360buyimg.com/mobilecms/s843x843_jfs/t1/29946/39/15313/359420/5cafebc9E92a636e3/39b8335a41a1bde2.jpg!q70.dpg.webp" alt="">
    </div>
    <!-- 订单区域 -->
    <div class="order">
      <h1>苏泊尔（SUPOR）电压力锅 5L高压锅</h1>
      <div class="orderDetail">
        <div class="orderPrice">
          <span class="old">市场价：</span>
          <span class="oldPrice">￥2599</span>
          <span class="new">销售价：</span>
          <span class="newPrice">￥2199</span>
        </div>
        <div class="orderCount">
        购买数量:
          <div class="mui-numbox">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input class="mui-input-numbox" type="number" />
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
          </div>
        </div>
      </div>
    </div>
    <div class="goodsDetails">
      <h1>商品参数</h1>
      <div>
        <p>商品代号：SD2932214404</p>
        <p>库存情况：50件</p>
        <p>上架时间：2015-04-20 01：19：40</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsInfo'
}
</script>

<style lang="stylus" scoped>
.goodsInfo >>> .mui-numbox
  height:26px
  margin-left:4px
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
  .goodsDetails
    margin: 8px
    background-color: #fff
    h1
      padding:15px
      font-size: 18px
      border-bottom:1px solid #ccc
    div
      padding:15px
      p
        font-size : 13px
        margin-bottom:5px

</style>
