import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/HomeContainer'
import MemberContainer from '../components/MemberContainer'
import ShoppingContainer from '../components/ShoppingContainer'
import SearchContainer from '../components/SearchContainer'
import NewsList from '../components/home/news/NewsList'
import NewsInfo from '../components/home/news/NewsInfo'
import ImgShare from '../components/home/img/ImgShare'
import ImgDetail from '../components/home/img/ImgDetail'
import Shopping from '../components/home/shopping/shopping'
import GoodsInfo from '../components/home/shopping/goodsInfo'
Vue.use(Router)
export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomeContainer},
    {path: '/member', component: MemberContainer},
    {path: '/shopping', component: ShoppingContainer},
    {path: '/search', component: SearchContainer},
    {path: '/home/newslist', component: NewsList},
    {path: '/home/newsinfo/:id', component: NewsInfo},
    {path: '/home/imgshare', component: ImgShare},
    {path: '/home/imgdetail', component: ImgDetail},
    {path: '/home/shopping', component: Shopping},
    {path: '/home/goodsinfo', component: GoodsInfo}
  ],
  linkActiveClass: 'mui-active'
})
