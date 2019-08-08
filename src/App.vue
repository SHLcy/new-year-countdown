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
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopping">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
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
#app {
  padding-top: 40px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;

  .mui-bar {
    background-color: white;
  }
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}

.v-enter-to {
  opacity: 1;
}

.v-enter-active {
  transition: 1s;
}

.v-leave {
  opacity: 1;
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-leave-active {
  transition: 1s;
}
</style>
