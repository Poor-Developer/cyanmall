<template>
  <div class="home-wrapper">
    <home-nav-bar class="nav-bar"></home-nav-bar>
    <scroll class="home-scroll" 
            ref="scroll"
            :probeType="3" 
            :pullup="true"
            :listenScroll="true"
            @scrollToEnd="scrollToEnd"
            @scroll="scrollPos"
    >
      <home-swiper class="swiper" :swiperList="banner"></home-swiper>
      <home-recommend class="recommend-box" :recommend="recommend" :colsize=4></home-recommend>
      <tab-control class="tab-control" :titles="['流行', '最新', '其他']" @tabClick="tabClick"></tab-control>
      <goods-list class="goods-list" :goodsList="goods[currTab].list" @addCart="addCart"></goods-list>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="scrollToTop"></back-top>
  </div>
</template>

<script>
import HomeNavBar from './childComps/HomeNavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goodsList/GoodsList'
import Scroll from 'components/common/scroll/Scroll';
import BackTop from 'components/content/backTop/BackTop';

import {getHomeMulitData, getHomeGoods} from 'network/home.js';
import {toTop} from 'network/mixin.js';

export default {
  name: "Home",
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  mixins: [toTop],
  data() {
    return {
      banner: [],
      recommend: [],
      currTab: "pop",
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []}
      },
      newList: []
    }
  },
  created() {
    this.getMainData();
    this.setList();
    this.getGoods("pop");
  },
  methods:{
    getMainData() {
      getHomeMulitData().then((res) =>{
        let resData = res.data;
        this.banner = resData.banner.list;
        this.recommend = resData.recommend.list;
        console.log(resData);
      })
    },
    getGoods(type) {
      let currList = this.goods[type];
      currList.page ++;
      getHomeGoods({
        type: type,
        page: currList.page
      }).then((res) =>{
        currList.list.push(...this.newList);
        this.$refs.scroll.refreshScroll();
        // currList.push(...res.data);
      })
    },
    setList() {
      this.newList = [];
      let url = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F19%2F20180719150738_gauku.thumb.700_0.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619595754&t=dda86eb80bd20c9766a0bfffc35b5853";
      for (let i = 0; i < 20; i++) {
        const obj = {
          id: Math.random(),
          name: "测试数据",
          url
        }
        this.newList.push(obj);
      }
    },
    tabClick(tabIndex) {
      switch(tabIndex) {
        case 0:
          this.currTab = "pop"
          break;
        case 1:
          this.currTab = "new"
          break; 
        case 2:
          this.currTab = "sell"
          break;
      }

      if (this.goods[this.currTab].page === 0) {
        this.getGoods(this.currTab);
      }
    },
    scrollToEnd() {
      this.setList();
      this.getGoods(this.currTab);
    },
    addCart(item) {
      this.$store.dispatch('addCart', item);
    }
  }
}
</script>

<style lang="less" scoped>
.home-wrapper{
  width: 100%;
  height: 100vh;
}
.nav-bar{
  width: 100%;
  height: 40px;
}
.home-scroll{
  width: 100%;
  height: calc(100% - 90px);
  overflow: hidden;
}
.swiper{
  width: 100%;
  height: 200px;
}
.recommend-box{
  width: 100%;
  // height: 80px;
  padding: 8px 0;
  border-bottom: 8px solid #f2f2f2;
}
.tab-control{
  width: 100%;
  height: 36px;
  line-height: 36px;
  padding: 6px 0;
}
.goods-list{
  width: 100%;
  margin-top: 8px;
}
</style>