<template>
  <li class="goods-item" :style="goodsItemStyle">
    <a href="#">
      <img :src="goodsItem.url" alt="">
      <div class="goodsDesc">
        {{goodsItem.name}}
      </div>
    </a>
  </li>
</template>

<script>

export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    },
    colSize: {
      type: Number,
      default: 2
    }
  },
  computed: {
    goodsItemStyle() {
      return {
        width: 100/this.colSize + "%"
      }
    }
  }
}
</script>

<style lang="less">
.goods-item{
  height: 100%;
  box-sizing: border-box;
  padding: 0 3px 6px 3px;
  img{
    max-width: 100%;
    max-height: calc(100% - 30px);
    border-radius: 4px;
  }
  .goodsDesc{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
}
</style>