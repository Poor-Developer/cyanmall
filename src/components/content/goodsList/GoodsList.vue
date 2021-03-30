<template>
  <ul class="goods-list">
    <goods-list-item v-for="item in goodsList" :key="item.id" :goodsItem="item" :colSize="colSize" @click.native="addCart(item)"></goods-list-item>
  </ul>
</template>

<script>
import GoodsListItem from './GoodsListItem';

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    },
    colSize: {
      type: Number,
      default: 2
    }
  },
  methods: {
    addCart(item) {
      this.$emit("addCart", item)
    }
  }
}
</script>

<style lang="less">
.goods-list{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>