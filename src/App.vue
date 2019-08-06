<template>
  <div id="app">
    <!--顶部header区域-->
    <mt-header fixed title="购物"></mt-header>
    <!--中间路由-->
    <router-view/>
    <!--底部tab-bar-->
    <!--<mt-tabbar>-->
      <!--<mt-tab-item id="外卖">-->
        <!--<img slot="icon" src="./assets/menu1.png">-->
        <!--外卖-->
      <!--</mt-tab-item>-->
      <!--<mt-tab-item id="订单">-->
        <!--<img slot="icon" src="./assets/menu2.png">-->
        <!--订单-->
      <!--</mt-tab-item>-->
      <!--<mt-tab-item id="发现">-->
        <!--<img slot="icon" src="./assets/menu3.png">-->
        <!--发现-->
      <!--</mt-tab-item>-->
      <!--<mt-tab-item id="我的">-->
        <!--<img slot="icon" src="./assets/menu4.png">-->
        <!--我的-->
      <!--</mt-tab-item>-->
    <!--</mt-tabbar>-->
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </a>
      <a class="mui-tab-item">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="stylus" scoped>
#app
  padding-top:40px
</style>
