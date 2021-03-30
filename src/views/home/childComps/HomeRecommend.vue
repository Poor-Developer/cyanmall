<template>
  <ul class="recommend">
    <li v-for="item in recommend" :key="item.id" :style="liStyle">
      <a href="#">
        <img :src="item.image" alt="">
        <div class="title">{{item.title}}</div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "homeRecommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    },
    colsize: {
      type: Number,
      default: 5
    }
  },
  computed: {
    liStyle() {
      return {width: 100/this.colsize + '%'}
    }
  }
}
</script>

<style lang="less" scoped>
.recommend{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  li{
    height: 100%;

    a{
      text-align: center;

      img{
        width: 80%;
      }
      .title{
        font-size: 14px;
        color: #888;
        line-height: 20px;
      }
    }
    
  }
}
</style>