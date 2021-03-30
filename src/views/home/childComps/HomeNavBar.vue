<template>
  <div class="navbar">
    <nav-bar height="40px">
      <div class="center" slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';

export default {
  name: "homeNavBar",
  components: {
    NavBar
  }
}
</script>

<style lang="less" scope>
.navbar{
  background-color: #0ff;
  box-shadow: 0 1px 1px #eee;
  height: 40px;
  .center{
    text-align: center;
    line-height: 40px;
    color: #fff;
  }
}
</style>

