<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style lang="less" scope>
.navbar{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  .left{
    width: 60px;
    height: 100%;
  }

  .center{
    flex: 1;
    height: 100%;
  }

  .right{
    width: 60px;
    height: 100%;
  }
}
</style>