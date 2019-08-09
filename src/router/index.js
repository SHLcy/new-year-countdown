import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/HomeContainer'
import MemberContainer from '../components/MemberContainer'
import ShoppingContainer from '../components/ShoppingContainer'
import SearchContainer from '../components/SearchContainer'
import NewsList from '../components/home/news/NewsList'
import NewsInfo from '../components/home/news/NewsInfo'

Vue.use(Router)
export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomeContainer},
    {path: '/member', component: MemberContainer},
    {path: '/shopping', component: ShoppingContainer},
    {path: '/search', component: SearchContainer},
    {path: '/home/newslist', component: NewsList},
    {path: '/home/newsinfo/:id', component: NewsInfo}

  ],
  linkActiveClass: 'mui-active'
})
