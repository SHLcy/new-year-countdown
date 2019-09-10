<template>
  <div id="app">
    <!--顶部header区域-->
    <mt-header fixed title="购物"></mt-header>
    <!--中间路由-->
    <transition>
      <router-view />
    </transition>
    <!--底部tab-bar-->
    <nav class="mui-bar-tab mui-bar">
      <router-link class="mui-tab-item1" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/shopping">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="count">{{$store.state.count}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
#app
  padding-top: 40px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  .mui-bar
    background-color: white;
    // 解决tapbar无法切换问题
    .mui-active
      color: #007aff !important
    .mui-tab-item1
      display: table-cell;
      overflow: hidden;
      width: 1%;
      height: 50px;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #929292;
      .mui-icon
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
      .mui-tab-label
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;

.v-enter
  opacity: 0;
  transform: translateX(100%);
  position: absolute;

.v-enter-to
  opacity: 1;

.v-enter-active
  transition: 1s;

.v-leave
  opacity: 1;

.v-leave-to
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;

.v-leave-active
  transition: 1s;

</style>
