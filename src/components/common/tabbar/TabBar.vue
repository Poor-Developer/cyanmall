<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tabbar{
    width: 100%;
    height: 49px;
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #f2f2f2;
    box-shadow: 0 -1px 1px #ccc;
  }
</style>