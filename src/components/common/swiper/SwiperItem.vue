<template>
  <li class="slide">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "swiperItem"
}
</script>

<style lang="less" scoped>
  .slide {
    width: 100%;
    height: 100%;
    transition: all 2s;
    flex-shrink: 0;

    img {
      width: 100%;
    }
  }
</style>