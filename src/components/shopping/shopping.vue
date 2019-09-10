<template>
  <div class="wrapper">
    <div v-for="(val, ind) in shoppingList" :key="ind" class="itemwrapper">
      <div class="imgwrapper">
        <img :src="val.img" alt="">
      </div>
      <div class="datawrapper">
        <p class="title">{{val.title}}</p>
        <p class="price">¥{{val.price}}</p>
       <div class="mui-numbox">
          <!-- "-"按钮，点击可减小当前数值 -->
          <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
          <input class="mui-numbox-input" type="number" :value="val.count"/>
          <!-- "+"按钮，点击可增大当前数值 -->
          <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */ 
  name: "ShoppingList",
  data () {
    return{
      shoppingList: this.$store.state.goodsDataList
    }
  },
  mounted () {
    console.log(this.shoppingList)
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
    padding-bottom:50px
    width:100%
    .itemwrapper
      margin:5px
      padding:3px
      border-radius:3%
      border:1px solid #eee
      overflow: hidden
      .imgwrapper
        width:40%
        float:left
        img
          width:100%
      .datawrapper
        width:60%
        float:right
        padding-left:10px 
        p
          color:#000
        .price
          color:red
</style>