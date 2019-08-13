<template>
  <div class="detailWrapper">
    <div class="movieName">{{movieDetailData.name}}</div>
    <div class="moviePic" v-for="(item, index) in movieDetailData.pic" :key="index">
      <img :src="item" alt="">
      <div class="movieDetail" v-if="movieDetailData.detail[index]">{{movieDetailData.detail[index]}}</div>
    </div>
    <!-- <div class="movieDetail">{{movieDetailData.detail1}}</div> -->

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ImgDetail',
  data () {
    return {
      movieDetailData: {}
    }
  },
  mounted () {
    this.getMovieDetail()
  },
  methods: {
    getMovieDetail () {
      axios.get('/api/movieDetail.json').then(this.getMovieDetailSuc)
    },
    getMovieDetailSuc (res) {
      this.movieDetailData = res.data
    }
  }
}
</script>

<style lang="stylus" scoped>
.detailWrapper
  padding: 0 10px 50px 10px
.movieName
  text-align: center
  font-size:25px
  line-height: 40px
.moviePic
  width:100%
  margin: 0 auto
  img
    width:100%
.movieDetail
  text-indent:34px
  padding: 0 10px
</style>
