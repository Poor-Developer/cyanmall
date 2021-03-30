<template>
  <div class="back-top">
    top
  </div>
</template>

<script>
  export default {
    name: 'BackTop'
  }
</script>

<style lang="less" scoped>
  .back-top{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(51, 51, 51, 0.8);
    color: #fff;
    position: fixed;
    right: 6px;
    bottom: 56px;
    z-index: 3;
    text-align: center;
    line-height: 60px;
  }
</style>